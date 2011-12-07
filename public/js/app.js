(function() {
  define(['jQuery', 'jQueryUI', 'Underscore', 'Backbone', 'router'], function($, ui, _, Backbone, Router) {
    var initialize;
    initialize = function() {
      console.log("Initializing application.");
      return Router.initialize();
    };
    return {
      initialize: initialize
    };
  });
}).call(this);
