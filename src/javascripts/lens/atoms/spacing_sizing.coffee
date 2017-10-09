m = angular.module "lens.atoms.spacing_sizing", []


m.controller "SpacingSizingController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "spacingSizing", ->
  controller: "SpacingSizingController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>
  <section id="spacing-units-section">
    <div id="spacing-units" title="Spacing Units" class="inpage-anchor"></div>
    <h2>Spacing Units</h2>
    <p>Spacing units are used for margin, padding, and <a ui-sref="layout">positioning</a>.
       The values came from two interleaved scales roughly set at 1:1.6 with some
       adjustment. The values are intended to build shapes and layouts that feel
     balanced.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th>Spacing Unit</th>
          <th>Calculation</th>
          <th>Resolves to...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>n2</code></td>
          <td><code>$spacing-base * 0.25</td>
          <td>4px</td>
        </tr>
        <tr>
          <td><code>n1</code></td>
          <td><code>$spacing-base * 0.5</td>
          <td>8px</td>
        </tr>
        <tr>
          <td><code>0</code></td>
          <td><code>0</td>
          <td>0px</td>
        </tr>
        <tr>
          <td><code>1</code></td>
          <td><code>$spacing-base</td>
          <td>16px</td>
        </tr>
        <tr>
          <td><code>2</code></td>
          <td><code>$spacing-base * 1.25</td>
          <td>20px</td>
        </tr>
        <tr>
          <td><code>3</code></td>
          <td><code>$spacing-base * 1.5</td>
          <td>24px</td>
        </tr>
        <tr>
          <td><code>4</code></td>
          <td><code>$spacing-base * 1.875</td>
          <td>30px</td>
        </tr>
        <tr>
          <td><code>5</code></td>
          <td><code>$spacing-base * 2.25</td>
          <td>36px</td>
        </tr>
        <tr>
          <td><code>6</code></td>
          <td><code>$spacing-base * 2.875</td>
          <td>46px</td>
        </tr>
      </tbody>
    </table>
  </section>



  <section id="margin-padding-section">
    <div id="margin-padding" title="Margin &amp; Padding" class="inpage-anchor"></div>
    <h2>Margin &amp; Padding</h2>
    <p>To specify margin and padding, Lens uses a shorthand of the property name,
       side, the above spacing units, and the <a ui-sref="responsive">breakpoint</a> in the following format:
       <code>%property-side-unit-breakpoint</code>.</p>
    <div class="col-container">
      <div class="col col-30-lg">
        <h4>Properties</h4>
        <ul class="list-unstyled">
          <li><code>m</code> = margin</li>
          <li><code>p</code> = padding</li>
        </ul>
      </div>
      <div class="col col-30-lg">
        <h4>Sides</h4>
        <ul class="list-unstyled">
          <li><code>t</code> = top</li>
          <li><code>b</code> = bottom</li>
          <li><code>l</code> = left</li>
          <li><code>r</code> = right</li>
          <li><code>lr</code> = left + right</li>
          <li><code>tb</code> = top + bottom</li>
        </ul>
      </div>
    </div>

    <h3>Margin</h3>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%m-$n</code></td>
          <td>margin: $n</td>
          <td>Equal margin on all sides of the element.</td>
        </tr>
        <tr>
          <td><code>%m-t-$n</code></td>
          <td>margin-top: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-b-$n</code></td>
          <td>margin-bottom: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-l-$n</code></td>
          <td>margin-left: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-r-$n</code></td>
          <td>margin-right: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-tb-$n</code></td>
          <td>margin-top: $n<br/>margin-bottom: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-lr-$n</code></td>
          <td>margin-left: $n<br/>margin-right: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-auto</code></td>
          <td>margin-left: auto<br/>margin-right: auto</td>
          <td>horizontal center</td>
        </tr>
      </tbody>
    </table>

    <h3>Padding</h3>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%p-$n</code></td>
          <td>padding: $n</td>
          <td>Equal padding on all sides of the element.</td>
        </tr>
        <tr>
          <td><code>%p-t-$n</code></td>
          <td>padding-top: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%p-b-$n</code></td>
          <td>padding-bottom: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%p-l-$n</code></td>
          <td>padding-left: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%p-r-$n</code></td>
          <td>padding-right: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%p-tb-$n</code></td>
          <td>padding-top: $n<br/>padding-bottom: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%p-lr-$n</code></td>
          <td>padding-left: $n<br/>padding-right: $n</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h3>Functions</h3>
    <p>The <code>spacing($n)</code> function can also be used to
      apply spacing units to your class definitions.</p>
    <div class="guide-example">
      <div class="guide-example-code">
        <pre><code class="language-css">.custom-element
  margin: spacing(1)
  padding: spacing(2)</code></pre>
      </div>
    </div>

  </section>


  <section id="widht-height-section">
    <div id="width-height" title="Width &amp; Height" class="inpage-anchor"></div>
    <h2>Width &amp; Height</h2>
    <p>Although most widths in a layout will be set using a
      <a ui-sref="grid">grid layout</a>, the following styles are also useful
      in building components.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%w-fit</code> </td>
          <td>max-width: 100%</td>
        </tr>
        <tr>
          <td><code>%w-full</code> </td>
          <td>width: 100%</td>
        </tr>
        <tr>
          <td><code>%h-full</code> </td>
          <td>height: 100%</td>
        </tr>
        <tr>
          <td><code>%w-auto</code> </td>
          <td>width: auto</td>
        </tr>
      </tbody>
    </table>

    <h3>Mixins</h3>
    <p>When defining your custom elements, you can also use the <code>width-height(x, y)</code> mixin
    where <code>x</code> and <code>y</code> are either a custom CSS width/height value or the spacing
    function from above.</p>
    <div class="guide-example">
      <div class="guide-example-code"><pre><code class="language-css">.custom-selector
  +width-height(100px, spacing(6))</code></pre>
      </div>
    </div>

  </section>


  <section id="overflow-section">
    <div id="overflow" title="Overflow" class="inpage-anchor"></div>
    <h2>Overflow</h2>
    <p>Overflow controls what happens to content when it is bigger than its container.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%overflow-hidden</code> </td>
          <td>overflow: hidden</td>
          <td>clip content</td>
        </tr>
        <tr>
          <td><code>%overflow-auto</code> </td>
          <td>overflow: auto</td>
          <td>only add scrollbars if content is too big</td>
        </tr>
        <tr>
          <td><code>%overflow-scroll</code> </td>
          <td>overflow: scroll</td>
          <td>always have scrollbars</td>
        </tr>
        <tr>
          <td><code>%overflow-visible</code> </td>
          <td>overflow: visible</td>
          <td>allow content to extend outside of container</td>
        </tr>
      </tbody>
    </table>
  </section>



</lens-main>
"""
