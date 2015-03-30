Todos = new Mongo.Collection("todos");

Todos.allow({

  //TODO: make a "authorized version" of todo
  insert : function(){
    return true;
  },
  update : function(){
    return true;
  },
  remove : function(){
    return true;
  }
});