(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  define(['jQuery', 'jQueryUI', 'Underscore', 'Backbone'], function($, ui, _, Backbone) {
    var TabsView;
    TabsView = (function() {
      __extends(TabsView, Backbone.View);
      function TabsView() {
        this.render = __bind(this.render, this);
        TabsView.__super__.constructor.apply(this, arguments);
      }
      TabsView.prototype.el = $("#tabs");
      TabsView.prototype.initialize = function() {
        return $('#app-tabs').bind('tabsshow', function(event, ui) {
          return window.location.hash = "#" + ui.panel.id;
        });
      };
      TabsView.prototype.render = function() {
        console.log("Rendering tabs.");
        return this.el.tabs();
      };
      return TabsView;
    })();
    return TabsView;
  });
}).call(this);
