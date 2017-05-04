m = angular.module "lens.atoms.buttons", []


m.controller "ButtonsController", (
  $scope
) ->
  return this


m.directive "buttons", ->
  controller: "ButtonsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<header class="guide-banner" role="banner">
  <a ui-sref="index" ui-sref-active="active" class="guide-name">Lens</a>
  <div class="guide-skip-content">
    <a href="#navigation">Skip to Navigation</a>
  </div>
  <a href="#" id="hamburger" class="hamburger-button">
    <span class="hamburger"></span>
  </a>
</header>

<lens-main>

  <section id="Buttons">

    <h2 id="Default" class="guide-content-subtitle m-b-1-xs">Default</h2>
    <p class="m-b-3-xs">Use the class, <code>button</code> for this default style button. If you are using the <code>&lt;button&gt;</code> element, always specify a <code>type</code>. When using the <code>&lt;a&gt;</code> tag, include <code>role="button"</code> for accessibility. Each button is available in multiple sizes, take note of examples for classes.</p>
    <a class="m-b-05-xs button" href>Normal</a>
    <a class="m-b-05-xs button button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--xsmall-xs" href>X-Small</a>
    <a class="m-b-05-xs button button--large-xs" href>Large</a>
    <a class="m-b-05-xs button button--xlarge-xs" href>X-Large</a>
    <div class="guide-code m-b-4-xs">
      <pre><code class="language-html">&lt;a class="m-b-05-xs button" href&gt;Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>



    <h2 id="Primary" class="guide-content-subtitle m-b-1-xs">Primary</h2>
    <p class="m-b-3-xs">Primary buttons are used to indicate a <em>primary</em> action on the page. Use the class, <code>.button.button--primary</code>, to get a primary button on your page.</p>
    <a class="m-b-05-xs button button--primary" href>Normal</a>
    <a class="m-b-05-xs button button--primary button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--primary button--xsmall-xs" href>X-Small</a>
    <a class="m-b-05-xs button button--primary button--large-xs" href>Large</a>
    <a class="m-b-05-xs button button--primary button--xlarge-xs" href>X-Large</a>
    <div class="guide-code m-b-4-xs">
      <pre><code class="language-html">&lt;a class="m-b-05-xs button button--primary" href>Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--primary button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--primary button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--primary button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--primary button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>


  <div class="guide-neutral-conditional">
    <h2 id="Neutral" class="guide-content-subtitle m-b-1-xs">Neutral</h2>
    <p class="m-b-3-xs">Neutral buttons are used for <em>neutral</em> buttons on the page, like for whitelabeling. To access these styles, use the class, <code>.button.button--neutral</code>.</p>
    <a class="m-b-05-xs button button--neutral" href>Normal</a>
    <a class="m-b-05-xs button button--neutral button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--neutral button--xsmall-xs" href>X-Small</a>
    <a class="m-b-05-xs button button--neutral button--large-xs" href>Large</a>
    <a class="m-b-05-xs button button--neutral button--xlarge-xs" href>X-Large</a>
    <div class="guide-code m-b-4-xs">
      <pre><code class="language-html">&lt;a class="m-b-05-xs button button--neutral" href&gt;Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--neutral button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--neutral button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--neutral button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--neutral button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>
  </div>



  <div class="guide-alert-conditional">
    <h2 id="Alert" class="guide-content-subtitle m-b-1-xs">Alert</h2>
    <p class="m-b-3-xs">Alert buttons are used to indicate a urgent or negative action on the page. To access these styles, use the class, <code>.button.button--alert</code>.</p>
    <a class="m-b-05-xs button button--alert" href>Normal</a>
    <a class="m-b-05-xs button button--alert button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--alert button--xsmall-xs" href>X-Small</a>
    <a class="m-b-05-xs button button--alert button--large-xs" href>Large</a>
    <a class="m-b-05-xs button button--alert button--xlarge-xs" href>X-Large</a>
    <div class="guide-code m-b-4-xs">
      <pre><code class="language-html">&lt;a class="m-b-05-xs button button--alert" href&gt;Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--alert button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--alert button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--alert button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--alert button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>
  </div>


  <div class="guide-inverse-conditional">
    <h2 id='Inverse' class="guide-content-subtitle m-b-1-xs">Inverse</h2>
    <p class="m-b-3-xs">Inverse buttons are used when the background color a container is too dark for normal buttons to have enough contrast. Invert the style with the classes, <code>.button--inverse</code>. <code>.button--inverse-primary</code>. <code>.button--inverse-disabled</code>. <code>.button--inverse-primary-disabled</code>.</p>
    <div class="bg-gray-7 p-2-xs p-b-05-xs">
    <a class="m-b-05-xs button button--inverse" href>Inverse</a>
    <a class="m-b-05-xs button button--inverse-primary" href>Inverse Primary</a>
    <a class="m-b-05-xs button button--inverse-disabled" href>Inverse Disabled</a>
    <a class="m-b-05-xs button button--inverse-primary-disabled" href>Inverse Primary Disabled</a>
    </div>
    <div class="guide-code m-b-4-xs">
      <pre><code class="language-html">&lt;a class="m-b-05-xs button button--inverse" href&gt;Inverse&lt;/a&gt;
&lt;a class="m-b-05-xs button button--inverse-primary" href&gt;Inverse Primary&lt;/a&gt;
&lt;a class="m-b-05-xs button button--inverse-disabled" href&gt;Inverse Disabled&lt;/a&gt;
&lt;a class="m-b-05-xs button button--inverse-primary-disabled" href&gt;Inverse Primary Disabled&lt;/a&gt;</code></pre>
    </div>
  </div>


  <div class="guide-disabled-conditional">
    <h2 id="Disabled" class="guide-content-subtitle m-b-1-xs">Disabled</h2>
    <p class="m-b-3-xs">Disabled buttons are used when the action on the page is blocked to the user. Get this button on a page by using the class, <code>.button.button--disabled-light</code>.</p>
    <a class="m-b-05-xs button button--disabled button--disabled-light" href>Normal</a>
    <a class="m-b-05-xs button button--disabled button--disabled-light button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--disabled button--disabled-light button--xsmall-xs" href>X-Small</a>
    <a class="m-b-05-xs button button--disabled button--disabled-light button--large-xs" href>Large</a>
    <a class="m-b-05-xs button button--disabled button--disabled-light button--xlarge-xs" href>X-Large</a>
    <div class="guide-code m-b-3-xs">
      <pre><code class="language-html">&lt;a class="m-b-05-xs button button--disabled-light" href&gt;Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--disabled button--disabled-light button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--disabled button--disabled-light button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--disabled button--disabled-light button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--disabled button--disabled-light button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>

    <p class="m-b-3-xs">Use the class, <code>.button.button--disabled-dark</code>, to get a disabled button that works well on a dark background.</p>
    <a class="m-b-05-xs button button--disabled button--disabled-dark" href>Normal</a>
    <a class="m-b-05-xs button button--disabled button--disabled-dark button--small-xs" href>Small</a>
    <a class="m-b-05-xs button button--disabled button--disabled-dark button--xsmall-xs" href>X-Small</a>
    <a class="m-b-05-xs button button--disabled button--disabled-dark button--large-xs" href>Large</a>
    <a class="m-b-05-xs button button--disabled button--disabled-dark button--xlarge-xs" href>X-Large</a>
    <div class="guide-code m-b-4-xs">
      <pre><code class="language-html">&lt;a class="m-b-05-xs button button--disabled-dark" href&gt;Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--disabled button--disabled-dark button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--disabled button--disabled-dark button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--disabled button--disabled-dark button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="m-b-05-xs button button--disabled button--disabled-dark button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>
  </div>


  <div class="guide-split-button-conditional">
    <h2 id="Split" class="guide-content-subtitle m-b-1-xs">Split buttons</h2>
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
        <pre><code class="language-html">&lt;div class="split-button"&gt;
  &lt;a class="m-b-05-xs button" href&gt;Left&lt;/a&gt;
  &lt;a class="m-b-05-xs button" href&gt;Middle&lt;/a&gt;
  &lt;a class="m-b-05-xs button" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
        <span class="button--small">
          <pre><code class="language-html">
&lt;div class="split-button"&gt;
  &lt;a class="m-b-05-xs button button--small-xs" href&gt;Left&lt;/a&gt;
  &lt;a class="m-b-05-xs button button--small-xs" href&gt;Middle&lt;/a&gt;
  &lt;a class="m-b-05-xs button button--small-xs" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
        </span>
        <span class="button--xsmall">
          <pre><code class="language-html">
&lt;div class="split-button"&gt;
  &lt;a class="m-b-05-xs button button--xsmall-xs" href&gt;Left&lt;/a&gt;
  &lt;a class="m-b-05-xs button button--xsmall-xs" href&gt;Middle&lt;/a&gt;
  &lt;a class="m-b-05-xs button button--xsmall-xs" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
        </span>

        <pre><code class="language-html">&lt;div class="split-button"&gt;
  &lt;a class="m-b-05-xs button button--neutral" href&gt;Left&lt;/a&gt;
  &lt;a class="m-b-05-xs button button--neutral" href&gt;Middle&lt;/a&gt;
  &lt;a class="m-b-05-xs button button--neutral" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>

        <span class="button--small">
          <pre><code class="language-html">
&lt;div class="split-button"&gt;
  &lt;a class="m-b-05-xs button button--neutral button--small-xs" href&gt;Left&lt;/a&gt;
  &lt;a class="m-b-05-xs button button--neutral button--small-xs" href&gt;Middle&lt;/a&gt;
  &lt;a class="m-b-05-xs button button--neutral button--small-xs" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
        </span>
        <span class="button--xsmall">
          <pre><code class="language-html">
&lt;div class="split-button"&gt;
  &lt;a class="m-b-05-xs button button--neutral button--xsmall-xs" href&gt;Left&lt;/a&gt;
  &lt;a class="m-b-05-xs button button--neutral button--xsmall-xs" href&gt;Middle&lt;/a&gt;
  &lt;a class="m-b-05-xs button button--neutral button--xsmall-xs" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
        </span>

        <pre><code class="language-html">&lt;div class="split-button w-full"&gt;
  &lt;a class="m-b-05-xs button" href&gt;Left&lt;/a&gt;
  &lt;a class="m-b-05-xs button" href&gt;Middle&lt;/a&gt;
  &lt;a class="m-b-05-xs button" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

  </section>

</lens-main>

<main-nav></main-nav>

<footer class="guide-contentinfo" role="contentinfo">
  <p class="guide-contentinfo-copy">Copyright &copy; 2017 Looker. All rights reserved.</p>
</footer>


"""
