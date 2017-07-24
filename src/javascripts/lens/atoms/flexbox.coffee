m = angular.module "lens.atoms.flexbox", []


m.controller "FlexboxController", (
  $scope
) ->
  return this


m.directive "flexbox", ->
  controller: "FlexboxController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <p>Flexbox is perfect for aligning items inside components. It typically
    isn't used for large scale layouts but for smaller parts of a page or
    component. All of the flex box utility classes can be used with our
    breakpoint suffixes.</p>
  <section id="flex-container-section">
    <div id="flex-container" title="Flex Container" class="inpage-anchor"></div>
    <h2>Flex Container</h2>
    <p>The flex container is the parent of the items that will be laid out using flex box.
    The properties in this section are all applied on this container.</p>

    <h3>Display Properties</h3>
    <p>The display property defines the flex container and enables a flex context for all of its
      direct children.</p>
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
          <td><code>%flex-block-xs</code></td>
          <td>display: flex</td>
          <td>Used on block elements</td>
        </tr>
        <tr>
          <td><code>%flex-inline-xs</code></td>
          <td>display: flex-inline</td>
          <td>Used on inline elements</td>
        </tr>
      </tbody>
    </table>

    <h3>Flex Direction</h3>
    <p>This establishes the main-axis, defining the direction items are palced
      in the container. Flex lays out in a single direction, either horizontal or vertical.</p>
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
          <td><code>%flex-row-xs</code></td>
          <td>flex-direction: row</td>
          <td>(Default) Left to right.</td>
        </tr>
        <tr>
          <td><code>%flex-row-reverse-xs</code></td>
          <td>flex-direction: row-reverse</td>
          <td>Right to left</td>
        </tr>
        <tr>
          <td><code>%flex-column-xs</code></td>
          <td>flex-direction: column</td>
          <td>Top to bottom</td>
        </tr>
        <tr>
          <td><code>%flex-column-reverse-xs</code></td>
          <td>flex-direction: column-reverse</td>
          <td>Bottom to top</td>
        </tr>
      </tbody>
    </table>

    <h3>Flex Wrap</h3>
    <p>Flex items will all fit into one line by default. To change that behavior
       and allow them to wrap, you'll need to add some properties. Flex direction
       plays a role here by defining the direction new line are stacked.</p>
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
          <td><code>%flex-nowrap-xs</code></td>
          <td>flex-wrap: nowrap</td>
          <td>(Default) Single-line with no wrapping</td>
        </tr>
        <tr>
          <td><code>%flex-wrap-xs</code></td>
          <td>flex-wrap: wrap</td>
          <td>Multi-line from left to right</td>
        </tr>
        <tr>
          <td><code>%flex-wrap-reverse-xs</code></td>
          <td>flex-wrap: wrap-reverse</td>
          <td>Multi-line from right to left</td>
        </tr>
      </tbody>
    </table>

    <h3>Justify Content</h3>
    <p>This defines the alignment along the main axis and helps distribute space
      around the flex items.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th class="col-30-xs"><code>@extend</code></th>
          <th class="col-30-xs">Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%flex-justify-start-xs</code></td>
          <td>justify-content: flex-start</td>
          <td>(Default) Items are packed toward the start line</td>
        </tr>
        <tr>
          <td><code>%flex-justify-end-xs</code></td>
          <td>justify-content: flex-end</td>
          <td>Items are packed toward the end line</td>
        </tr>
        <tr>
          <td><code>%flex-justify-center-xs</code></td>
          <td>justify-content: center</td>
          <td>Items are centered along the line</td>
        </tr>
        <tr>
          <td><code>%flex-justify-between-xs</code></td>
          <td>justify-content: space-between</td>
          <td>Items are evenly distributed in the line. First item on the start line, last item on the end line.</td>
        </tr>
        <tr>
          <td><code>%flex-justify-around-xs</code></td>
          <td>justify-content: space-around</td>
          <td>Items are evently distributed in the line with equal space around them. Note that visually the spaces aren't equal because each item has equal space on both sides.</td>
        </tr>
      </tbody>
    </table>

    <h3>Align Items</h3>
    <p>This defines how flex items are laid out along the cross axis on the current line.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th class="col-30-xs"><code>@extend</code></th>
          <th class="col-30-xs">Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%flex-item-stretch-xs</code></td>
          <td>align-items: stretch</td>
          <td>(Default) Stretch to fill the container but still respects min/max-width</td>
        </tr>
        <tr>
          <td><code>%flex-item-start-xs</code></td>
          <td>align-items: flex-start</td>
          <td>Cross-start margin edge of the items is placed on the cross-start line</td>
        </tr>
        <tr>
          <td><code>%flex-item-end-xs</code></td>
          <td>align-items: flex-end</td>
          <td>Cross-end margin edge of the items is placed on the cross-end line</td>
        </tr>
        <tr>
          <td><code>%flex-item-center-xs</code></td>
          <td>align-items: center</td>
          <td>Items are centered in the cross-axis</td>
        </tr>
        <tr>
          <td><code>%flex-item-baseline-xs</code></td>
          <td>align-items: baseline</td>
          <td>Items are aligned along their baselines</td>
        </tr>
      </tbody>
    </table>


    <h3>Align Content</h3>
    <p>This aligns a flex container's lines within when there is extra space in the cross-axis,
      similar to how justify-content aligns items within the main axis. Note: this property
      has no effect when there is only one line of flex items.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th class="col-30-xs"><code>@extend</code></th>
          <th class="col-30-xs">Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%flex-content-stretch-xs</code></td>
          <td>align-content: stretch</td>
          <td>(Default) Lines stretch to take up the remaining space</td>
        </tr>
        <tr>
          <td><code>%flex-content-start-xs</code></td>
          <td>align-content: flex-start</td>
          <td>Lines packed to the start of the container</td>
        </tr>
        <tr>
          <td><code>%flex-content-end-xs</code></td>
          <td>align-content: flex-end</td>
          <td>Lines packed to the end of the container</td>
        </tr>
        <tr>
          <td><code>%flex-content-center-xs</code></td>
          <td>align-content: center</td>
          <td>Lines packed to the center of the container</td>
        </tr>
        <tr>
          <td><code>%flex-content-around-xs</code></td>
          <td>align-content: space-around</td>
          <td>Lines evenly distributed with the first line at the start and the last at the end of the container.</td>
        </tr>
        <tr>
          <td><code>%flex-content-between-xs</code></td>
          <td>align-content: space-between</td>
          <td>Lines evenly distributed with equal space around each line.</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="flex-items-section">
    <div id="flex-items" title="Flex Items" class="inpage-anchor"></div>
    <h2>Flex Items</h2>
    <p>These are the direct children of the parent container. Flex items are laid
      out according to the properties applied to the flex container. The following
      properties are applied on the individual flex items.</p>

    <h3>Order</h3>
    <p>By default, items are laid out in source order. Use the <code>order</code>
      property to control the order inside the flex container.
    </p>
    <p>Lens contains built in ordering classes of <code>.flex-order-$n-xs</code>,
       where <code>$n</code> is an integer
      from 1 to 6. Any item without an order will default to 1 and matching orders
      will be grouped together in the appropriate order. You can rearrange the
      order across breakpoints using the breakpoint suffixes.</p>
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
          <td><code>%flex-order-$n-xs</code></td>
          <td>order: $n</td>
          <td><code>$n</code> is a an integer from 1 to 6</td>
        </tr>
      </tbody>
    </table>

    <h3>Flex Grow</h3>
    <p>This property lets an item grow if necessary. It accepts a unitless value
      that serves as a proportion. The default is <code>0</code>.</p>
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
          <td><code>%flex-grow-$n-xs</code></td>
          <td>flex-grow: $n</td>
          <td><code>$n</code> is a an integer from 0 to 6</td>
        </tr>
      </tbody>
    </table>

    <h3>Flex Shrink</h3>
    <p>This property lets an item shrink if necessary. It also accepts a unitless
      value that serves as a proportion. The default is <code>1</code>.</p>
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
          <td><code>%flex-shrink-$n-xs</code></td>
          <td>flex-shrink: $n</td>
          <td><code>$n</code> is a an integer from 1 to 6</td>
        </tr>
      </tbody>
    </table>

    <h3>Flex Basis</h3>
    <p>This property defines the default size of an element before the remaining
       space is distributed. It can be a length or keyword, like "auto". The
       default is <code>auto</code>.</p>
    <p>To use percentages, use the same percentage values
       used to layout <a ui-sref="grid">grids</a> (5-100 in increments of 5, plus 33 and 66).
       To use a <a ui-sref="spaces-sizing">sizing unit</a> preface the unit with an <code>s</code>.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th class="col-30-xs"><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%flex-basis-auto-xs</code></td>
          <td>flex-basis: auto</td>
          <td>Default</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%flex-basis-$n-xs</code></td>
          <td>flex-basis: percentage($n/100)</td>
          <td><code>$n</code> is a an integer from 5-100 in increments of 5, plus 33 and 66</td>
          <td><code>%flex-basis-33-xs</code> resolves to flex-basis: 0.33</td>
        </tr>
        <tr>
          <td><code>%flex-basis-s$size-xs</code></td>
          <td>flex-basis: s$size</td>
          <td><code>$size</code> is a <a ui-sref="spaces-sizing">sizing unit</a></td>
          <td><code>%flex-basis-s4-xs</code> resolves to flex-basis: 4px</td>
        </tr>
      </tbody>
    </table>


    <h3>Align Self</h3>
    <p>This allows individual flex items to have their own unique alignment within the container
      overriding the container align-items property.</p>
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
          <td><code>%flex-self-auto-xs</code></td>
          <td>align-self: auto</td>
          <td>(Default) Auto align, which inherits the align-items property</td>
        </tr>
        <tr>
          <td><code>%flex-self-start-xs</code></td>
          <td>align-self: flex-start</td>
          <td>Cross-start margin edge of the items is placed on the cross-start line</td>
        </tr>
        <tr>
          <td><code>%flex-self-end-xs</code></td>
          <td>align-self: flex-end</td>
          <td>Cross-end margin edge of the items is placed on the cross-end line</td>
        </tr>
        <tr>
          <td><code>%flex-self-center-xs</code></td>
          <td>align-self: center</td>
          <td>Items are centered in the cross-axis</td>
        </tr>
        <tr>
          <td><code>%flex-self-stretch-xs</code></td>
          <td>align-self: stretch</td>
          <td>Stretch to fill the container but still respects min/max-width</td>
        </tr>
        <tr>
          <td><code>%flex-self-baseline-xs</code></td>
          <td>align-self: baseline</td>
          <td>Items are aligned such as their baselines align</td>
        </tr>
      </tbody>
    </table>
  </section>

</lens-main>
"""
