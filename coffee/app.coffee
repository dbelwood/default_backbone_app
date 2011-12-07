define [
	'jQuery',
	'jQueryUI',
	'Underscore',
	'Backbone',
	'router'
], ($, ui, _, Backbone, Router) ->
	initialize = ->
		console.log "Initializing application."
		Router.initialize()

	{
		initialize: initialize
	}