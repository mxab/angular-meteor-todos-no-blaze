Template = {};//to prevent angular-meteor.template from failing

angular.module("todos", ["angular-meteor", "ngMaterial"]).controller("AppController", function ($meteor, $scope) {

  this.todos = $meteor.collection(Todos).subscribe("todos");

  this.deleteTodo = function (todo) {
    this.todos.remove(todo._id)
  };
  this.addTodo = function () {

    this.todos.save({text: this.newTodoText, done: false});
    this.newTodoText = "";
    //the input stays red, even if we do this, afaik the form validation in ngMaterial is still a bit buggy
    $scope.newTodoForm.$setPristine();
  };


}).config(function($mdIconProvider){
  $mdIconProvider.icon('delete', 'icon/ic_delete_24px.svg')
});


Meteor.startup(function () {

  //angular.element(document.head).append('<base href="/">'); //add this for ui.router
  angular.element(document).ready(function () {

    angular.element(document.body).attr({
      "ng-strict-di": "" // to prevent non $inject things
    });
    document.body.innerHTML = "<div ng-include=\"'client/app.ng.html'\">"; //hard core rendering

    angular.bootstrap(document.body, ['todos']);// lets start
  });

});