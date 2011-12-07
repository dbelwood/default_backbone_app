define([
	'jQuery',
	'jQueryUI',
	'Underscore',
	'Backbone'
], ($, ui, _, Backbone) ->
	class TabsView extends Backbone.View
		el: $("#tabs")
		initialize: ->
			$('#app-tabs').bind 'tabsshow', (event, ui) ->
				window.location.hash = "#"+ui.panel.id
				 
		render: =>
			console.log "Rendering tabs."
			@el.tabs()

	return TabsView
)