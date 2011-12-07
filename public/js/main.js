require.config({
  paths: {
    jQuery: 'lib/jquery/jquery',
    jQueryUI: 'lib/jquery-ui/jquery-ui',
    Underscore: 'lib/underscore/underscore',
    Backbone: 'lib/backbone/backbone'
  }

});

require([
	'app',
	'order!lib/jquery/jquery-min',
	'order!lib/jquery-ui/jquery-ui.min',
	'order!lib/underscore/underscore-min',
	'order!lib/backbone/backbone-min'
], function (App) {
	App.initialize();
});	