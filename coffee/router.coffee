define([
  # These are path alias that we configured in our bootstrap
  'jQuery',     # lib/jquery/jquery
  'jQueryUI',
  'Underscore', # lib/underscore/underscore
  'Backbone',    # lib/backbone/backbone
  'views/views'
], 
($, ui, _, Backbone, Views) ->
  class AppRouter extends Backbone.Router
    routes:
      "industry": "renderIndustryTab",
      "personal": "renderPersonalTab",
      "engagements": "renderEngagementsTab",
      "saved": "renderSaveTab",
      "*actions": "renderIndustryTab"

    initialize: ->
      console.log "Initializing AppRouter"
    
    renderIndustryTab: ->
      console.log "Rendering Industry tab."

    renderPersonalTab: ->
      console.log "Rendering Personal tab."

    renderEngagementsTab: ->
      console.log "Rendering Engagement tab."

    renderSaveTab: ->
      console.log "Rendering Save tab."

  initialize = ->
    console.log "Calling initialize named function."
    app_router = new AppRouter
    Backbone.history.start()
    tabs = new Views.TabsView()
    tabs.render()
    app_router.navigate("#")
    undefined

  {
    initialize: initialize
  }
)