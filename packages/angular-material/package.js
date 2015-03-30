Npm.depends({
  "angular-material": "0.8.3"
});

Package.onUse(function (api) {

  //todo make package or use one
  api.use("urigo:angular@0.8.2",["client"]);
  api.addFiles(".npm/package/node_modules/angular-aria/angular-aria.min.js", ["client"]);
  api.addFiles(".npm/package/node_modules/angular-animate/angular-animate.min.js", ["client"]);
  api.addFiles(".npm/package/node_modules/angular-material/angular-material.min.js", ["client"]);
  api.addFiles(".npm/package/node_modules/angular-material/angular-material.min.css", ["client"]);


});