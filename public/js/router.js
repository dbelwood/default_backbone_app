(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  define(['jQuery', 'jQueryUI', 'Underscore', 'Backbone', 'views/tabsview'], function($, ui, _, Backbone, TabsView) {
    var AppRouter, initialize;
    AppRouter = (function() {
      __extends(AppRouter, Backbone.Router);
      function AppRouter() {
        AppRouter.__super__.constructor.apply(this, arguments);
      }
      AppRouter.prototype.routes = {
        "industry": "renderIndustryTab",
        "personal": "renderPersonalTab",
        "engagements": "renderEngagementsTab",
        "saved": "renderSaveTab",
        "*actions": "renderIndustryTab"
      };
      AppRouter.prototype.initialize = function() {
        return console.log("Initializing AppRouter");
      };
      AppRouter.prototype.renderIndustryTab = function() {
        return console.log("Rendering Industry tab.");
      };
      AppRouter.prototype.renderPersonalTab = function() {
        return console.log("Rendering Personal tab.");
      };
      AppRouter.prototype.renderEngagementsTab = function() {
        return console.log("Rendering Engagement tab.");
      };
      AppRouter.prototype.renderSaveTab = function() {
        return console.log("Rendering Save tab.");
      };
      return AppRouter;
    })();
    initialize = function() {
      var app_router, tabs;
      console.log("Calling initialize named function.");
      app_router = new AppRouter;
      Backbone.history.start();
      tabs = new TabsView();
      tabs.render();
      app_router.navigate("#");
      return;
    };
    return {
      initialize: initialize
    };
  });
}).call(this);
