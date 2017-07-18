require "angular-ui-router"
require "./lens_main.coffee"
require "./main_nav.coffee"
require "./page_header.coffee"
require "./page_footer.coffee"

require "./login.coffee"
require "./index.coffee"
require "./getting_started.coffee"
require "./release_notes.coffee"
require "./installation.coffee"

require "./guidelines/guidelines_module.coffee"
require "./atoms/atoms_module.coffee"
require "./components/components_module.coffee"

module.exports = m = angular.module "Lens", [
  "ui.router"
  "lens.index"
  "lens.login"
  "lens.lens_main"
  "lens.main_nav"
  "lens.page_header"
  "lens.page_footer"

  "lens.getting_started"
  "lens.installation"
  "lens.release_notes"

  "lens.guidelines"
  "lens.components"
  "lens.atoms"
]

m.config (
  $locationProvider
  $stateProvider
) ->
  $locationProvider.html5Mode true

  loginState =
    name: 'login'
    url: '/login'
    template: '<login></login>'
    title: 'Login to view Lens'
  indexState =
    name: 'index'
    url: '/'
    template: '<index></index>'
    title: 'Welcome to Lens'
  gettingStartedState =
    name: 'getting-started'
    url: '/getting-started'
    template: '<getting-started></getting-started>'
    title: 'Getting Started'

# Guidelines
  markupState =
    name: 'markup'
    url: '/guidelines/markup'
    template: '<markup></markup>'
    title: 'Markup'
  responsiveState =
    name: 'responsive'
    url: '/guidelines/responsive'
    template: '<responsive></responsive>'
    title: 'Responsive'

# Components
  buttonsState =
    name: 'buttons'
    url: '/components/buttons'
    template: '<buttons></buttons>'
    title: 'Buttons'
  formsState =
    name: 'forms'
    url: '/components/forms'
    template: '<forms></forms>'
    title: 'Forms'
  tablesState =
    name: 'tables'
    url: '/components/tables'
    template: '<tables></tables>'
    title: 'Tables'
  modalsState =
    name: 'modals'
    url: '/components/modals'
    template: '<modals></modals>'
    title: 'Modals'
  bodyCopyState =
    name: 'body-copy'
    url: '/components/body-copy'
    template: '<body-copy></body-copy>'
    title: 'Body Copy'
  headingsState =
    name: 'headings'
    url: '/components/headings'
    template: '<headings></headings>'
    title: 'Headings'

# Atoms
  blockGridState =
    name: 'block-grid'
    url: '/atoms/block-grid'
    template: '<block-grid></block-grid>'
    title: 'Block Grid'
  bordersState =
    name: 'borders'
    url: '/atoms/borders'
    template: '<borders></borders>'
    title: 'Borders'
  boxPropertiesState =
    name: 'spacing-sizing'
    url: '/atoms/spacing-sizing'
    template: '<spacing-sizing></spacing-sizing>'
    title: 'Spacing and Sizing'
  colorsState =
    name: 'colors'
    url: '/atoms/colors'
    template: '<colors></colors>'
    title: 'Colors'
  effectsState =
    name: 'effects'
    url: '/atoms/effects'
    template: '<effects></effects>'
    title: 'Effects'
  flexboxState =
    name: 'flexbox'
    url: '/atoms/flexbox'
    template: '<flexbox></flexbox>'
    title: 'Flexbox'
  gridState =
    name: 'grid'
    url: '/atoms/grid'
    template: '<grid></grid>'
    title: 'Grid'
  iconsState =
    name: 'icons'
    url: '/atoms/icons'
    template: '<icons></icons>'
    title: 'Icons'
  layoutState =
    name: 'layout'
    url: '/atoms/layout'
    template: '<layout></layout>'
    title: 'Layout'
  typographyState =
    name: 'typography'
    url: '/atoms/typography'
    template: '<typography></typography>'
    title: 'Typography'

  installationState =
    name: 'installation'
    url: '/installation'
    template: '<installation></installation>'
    title: 'Installation'
  releaseNotesState =
    name: 'release-notes'
    url: '/release-notes'
    template: '<release-notes></release-notes>'
    title: 'Release Notes'

  $stateProvider.state loginState
  $stateProvider.state indexState
  $stateProvider.state gettingStartedState

  $stateProvider.state markupState
  $stateProvider.state responsiveState

  $stateProvider.state buttonsState
  $stateProvider.state formsState
  $stateProvider.state tablesState
  $stateProvider.state modalsState
  $stateProvider.state bodyCopyState
  $stateProvider.state headingsState

  $stateProvider.state blockGridState
  $stateProvider.state bordersState
  $stateProvider.state boxPropertiesState
  $stateProvider.state colorsState
  $stateProvider.state effectsState
  $stateProvider.state flexboxState
  $stateProvider.state gridState
  $stateProvider.state iconsState
  $stateProvider.state layoutState
  $stateProvider.state typographyState

  $stateProvider.state installationState
  $stateProvider.state releaseNotesState
  return

m.run ->
