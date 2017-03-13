m = angular.module "lens.atoms.buttons", []


m.controller "ButtonsController", (
  $scope
) ->
  $scope.defaultCode = """
    <a class="m-b-05-xs button" href>Normal</a>
    <a class="m-b-05-xs button button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--xsmall-xs" href>X-Small</a>
  """
  $scope.primaryCode = """
    <a class="m-b-05-xs button button--primary" href>Normal</a>
    <a class="m-b-05-xs button button--primary button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--primary button--xsmall-xs" href>X-Small</a>
  """
  $scope.alertCode = """
    <a class="m-b-05-xs button button--alert" href>Normal</a>
    <a class="m-b-05-xs button button--alert button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--alert button--xsmall-xs" href>X-Small</a>
  """
  $scope.neutralCode = """
    <a class="m-b-05-xs button button--neutral" href>Normal</a>
    <a class="m-b-05-xs button button--neutral button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--neutral button--xsmall-xs" href>X-Small</a>
  """
  $scope.inverseCode = """
    <a class="m-b-05-xs button button--inverse" href>Inverse</a>
    <a class="m-b-05-xs button button--inverse-primary" href>Inverse Primary</a>
    <a class="m-b-05-xs button button--inverse-disabled" href>Inverse Disabled</a>
    <a class="m-b-05-xs button button--inverse-primary-disabled" href>Inverse Primary Disabled</a>
  """
  $scope.disabledLightCode = """
    <a class="m-b-05-xs button button--disabled-light" href>Normal</a>
    <a class="m-b-05-xs button button--disabled-light button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--disabled-light button--xsmall-xs" href>X-Small</a>
  """
  $scope.disabledDarkCode = """
    <a class="m-b-05-xs button button--disabled-dark" href>Normal</a>
    <a class="m-b-05-xs button button--disabled-dark button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--disabled-dark button--xsmall-xs" href>X-Small</a>
  """
  $scope.splitButtonCode = """
    <div class="split-button">
      <a class="m-b-05-xs button" href>Left</a>
      <a class="m-b-05-xs button" href>Middle</a>
      <a class="m-b-05-xs button" href>Right</a>
    </div>
    <div class="split-button">
      <a class="m-b-05-xs button button--small-xs" href>Left</a>
      <a class="m-b-05-xs button button--small-xs" href>Middle</a>
      <a class="m-b-05-xs button button--small-xs" href>Right</a>
    </div>
    <div class="split-button">
      <a class="m-b-05-xs button button--xsmall-xs" href>Left</a>
      <a class="m-b-05-xs button button--xsmall-xs" href>Middle</a>
      <a class="m-b-05-xs button button--xsmall-xs" href>Right</a>
    </div>

    <div class="split-button">
      <a class="m-b-05-xs button button--neutral" href>Left</a>
      <a class="m-b-05-xs button button--neutral" href>Middle</a>
      <a class="m-b-05-xs button button--neutral" href>Right</a>
    </div>
    <div class="split-button">
      <a class="m-b-05-xs button button--neutral button--small-xs" href>Left</a>
      <a class="m-b-05-xs button button--neutral button--small-xs" href>Middle</a>
      <a class="m-b-05-xs button button--neutral button--small-xs" href>Right</a>
    </div>
    <div class="split-button">
      <a class="m-b-05-xs button button--neutral button--xsmall-xs" href>Left</a>
      <a class="m-b-05-xs button button--neutral button--xsmall-xs" href>Middle</a>
      <a class="m-b-05-xs button button--neutral button--xsmall-xs" href>Right</a>
    </div>

    <div class="split-button w-full">
      <a class="m-b-05-xs button" href>Left</a>
      <a class="m-b-05-xs button" href>Middle</a>
      <a class="m-b-05-xs button" href>Right</a>
    </div>
  """

  return this


m.directive "buttons", ->
  controller: "ButtonsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<section id="Buttons">

  <h2 id="Default" class="m-b-1-xs" id="default">Default</h2>
  <p class="m-b-3-xs">Use the class, <code>button</code> for this default style button. If you are using the <code>&lt;button&gt;</code> element, always specify a <code>type</code>. When using the <code>&lt;a&gt;</code> tag, include <code>role="button"</code> for accessibility. Each button is available in multiple sizes, take note of examples for classes.</p>
    <a class="m-b-05-xs button" href>Normal</a>
    <a class="m-b-05-xs button button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--xsmall-xs" href>X-Small</a>
  <div class="guide-code m-b-4-xs">
    <pre><code class="language-html">{{defaultCode}}</code></pre>
  </div>



  <h2 id="Primary" class="m-b-1-xs" id="primary">Primary</h2>
  <p class="m-b-3-xs">Primary buttons are used to indicate a <em>primary</em> action on the page. Use the class, <code>.button.button--primary</code>, to get a primary button on your page.</p>
    <a class="m-b-05-xs button button--primary" href>Normal</a>
    <a class="m-b-05-xs button button--primary button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--primary button--xsmall-xs" href>X-Small</a>
  <div class="guide-code m-b-4-xs">
    <pre><code class="language-html">{{primaryCode}}</code></pre>
  </div>



  <h2 id="Alert" class="m-b-1-xs" id="alert">Alert</h2>
  <p class="m-b-3-xs">Alert buttons are used to indicate a urgent or negative action on the page. To access these styles, use the class, <code>.button.button--alert</code>.</p>
    <a class="m-b-05-xs button button--alert" href>Normal</a>
    <a class="m-b-05-xs button button--alert button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--alert button--xsmall-xs" href>X-Small</a>
  <div class="guide-code m-b-4-xs">
    <pre><code class="language-html">{{alertCode}}</code></pre>
  </div>



  <h2 id="Neural" class="m-b-1-xs" id="neutral">Neutral</h2>
  <p class="m-b-3-xs">Neutral buttons are used for <em>neutral</em> buttons on the page, like for whitelabeling. To access these styles, use the class, <code>.button.button--neutral</code>.</p>
    <a class="m-b-05-xs button button--neutral" href>Normal</a>
    <a class="m-b-05-xs button button--neutral button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--neutral button--xsmall-xs" href>X-Small</a>
  <div class="guide-code m-b-4-xs">
    <pre><code class="language-html">{{neutralCode}}</code></pre>
  </div>



  <h2 id='Inverse' class="m-b-1-xs" id="inverse">Inverse</h2>
  <p class="m-b-3-xs">Inverse buttons are used when the background color a container is too dark for normal buttons to have enough contrast. Invert the style with the classes, <code>.button--inverse</code>. <code>.button--inverse-primary</code>. <code>.button--inverse-disabled</code>. <code>.button--inverse-primary-disabled</code>.</p>
  <div class="bg-gray-7 p-2-xs p-b-05-xs">
    <a class="m-b-05-xs button button--inverse" href>Inverse</a>
    <a class="m-b-05-xs button button--inverse-primary" href>Inverse Primary</a>
    <a class="m-b-05-xs button button--inverse-disabled" href>Inverse Disabled</a>
    <a class="m-b-05-xs button button--inverse-primary-disabled" href>Inverse Primary Disabled</a>
  </div>
  <div class="guide-code m-b-4-xs">
    <pre><code class="language-html">{{inverseCode}}</code></pre>
  </div>



  <h2 id="Disabled" class="m-b-1-xs" id="disabled">Disabled</h2>
  <p class="m-b-3-xs">Disabled buttons are used when the action on the page is blocked to the user. Get this button on a page by using the class, <code>.button.button--disabled-light</code>.</p>
    <a class="m-b-05-xs button button--disabled-light" href>Normal</a>
    <a class="m-b-05-xs button button--disabled-light button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--disabled-light button--xsmall-xs" href>X-Small</a>
  <pre><code class="language-html">{{disabledLightCode}}</code></pre>
  <p class="m-b-3-xs">Disabled buttons are used when the action on the page is blocked to the user. Get this button on a page by using the class, <code>.button.button--disabled-dark</code>.</p>
    <a class="m-b-05-xs button button--disabled-dark" href>Normal</a>
    <a class="m-b-05-xs button button--disabled-dark button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--disabled-dark button--xsmall-xs" href>X-Small</a>
  <div class="guide-code m-b-4-xs">
    <pre><code class="language-html">{{disabledDarkCode}}</code></pre>
  </div>



  <h2 id="Split" class="m-b-1-xs" id="split-buttons">Split buttons</h2>
  <p class="m-b-3-xs">Split buttons are used when you need a button that contains two actions. To accomplish this, wrap your buttons in <code>&lt;div class="split-button"&gt;</code>. Use <code>&lt;div class="split-button w-full"&gt;</code> for your buttons to take up the full width of the container.</p>
  <div class="split-button">
    <a class="m-b-05-xs button" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
    <a class="m-b-05-xs button" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
    <a class="m-b-05-xs button" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
  </div>
  <div class="split-button">
    <a class="m-b-05-xs button button--small-xs" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
    <a class="m-b-05-xs button button--small-xs" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
    <a class="m-b-05-xs button button--small-xs" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
  </div>
  <div class="split-button">
    <a class="m-b-05-xs button button--xsmall-xs" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
    <a class="m-b-05-xs button button--xsmall-xs" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
    <a class="m-b-05-xs button button--xsmall-xs" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
  </div>
  <div>
    <div class="split-button">
      <a class="m-b-05-xs button button--neutral" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
      <a class="m-b-05-xs button button--neutral" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
      <a class="m-b-05-xs button button--neutral" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
    </div>
    <div class="split-button">
      <a class="m-b-05-xs button button--neutral button--small-xs" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
      <a class="m-b-05-xs button button--neutral button--small-xs" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
      <a class="m-b-05-xs button button--neutral button--small-xs" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
    </div>
    <div class="split-button">
      <a class="m-b-05-xs button button--neutral button--xsmall-xs" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
      <a class="m-b-05-xs button button--neutral button--xsmall-xs" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
      <a class="m-b-05-xs button button--neutral button--xsmall-xs" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
    </div>
  </div>
  <div class="split-button w-full">
    <a class="m-b-05-xs button" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
    <a class="m-b-05-xs button" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
    <a class="m-b-05-xs button" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
  </div>
  <div class="guide-code m-b-4-xs">
    <pre><code class="language-html">{{splitButtonCode}}</code></pre>
  </div>

</section>
"""
