m = angular.module "lens.components.forms", []


m.controller "FormsController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "forms", ->
  controller: "FormsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="label-section">
    <div id="label" title="Label" class="inpage-anchor"></div>
    <h2>Labels</h2>
    <p>Use the <code>.form-label</code> class to set the default styles on a label.
      You can also change the text alignment with <code>.text-right</code>.</p>
    <div class="col-container col-max col-gutters">
      <div class="col col-30-lg">
        <form>
          <label class="form-label">Form Label</label>
          <label class="form-label text-right-lg">Form Label</label>
        </form>
      </div>
    </div>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;label class="form-label"&gt;Form Label&lt;/label&gt;
  &lt;label class="form-label text-right"&gt;Form Label&lt;/label&gt;
&lt;/form&gt;</code></pre></div>
  </section>

  <section id="text-input-section">
    <div id="text-input" title="Text Input" class="inpage-anchor"></div>
    <h2>Text Input</h2>
    <p>Use the <code>.form-text-input</code> class to apply the default styling
      for text inputs. Inputs should always be paired with a label to make them
      accessible. You can use placeholder text for additional context when necessary.
      <strong>Never</strong> use placeholder text in place of a label.</p>

    <form>
      <div class="col-container col-max col-gutters">
        <div class="col col-15-lg">
          <label for="form-text-input-1" class="form-label text-right-lg m-b-05 m-b-0-lg">Label</label>
        </div>
        <div class="col col-50-lg">
            <input type="text" class="form-text-input" id="form-text-input-1" placeholder="this is placeholder text">
        </div>
      </div>
    </form>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="col-container col-max col-gutters"&gt;
    &lt;div class="col col-15-lg"&gt;
      &lt;label for="form-text-input-1" class="form-label text-right-lg m-b-05 m-b-0-lg"&gt;Label&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="col col-50-lg"&gt;
        &lt;input type="text" class="form-text-input" id="form-text-input-1" placeholder="this is placeholder text"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>

    <h3>Disabled</h3>
    <p>You may have an text input that needs to be disabled. To do that, use the
      class <code>.form-text-input-disabled</code> in addition to the default class.</p>

    <form>
      <div class="col-container col-max col-gutters">
        <div class="col col-15-lg">
          <label for="form-text-input-1" class="form-label text-right-lg m-b-05 m-b-0-lg">Disabled</label>
        </div>
        <div class="col col-50-lg">
            <input type="text" readonly="true" class="form-text-input form-text-input-disabled" id="form-text-input-1">
        </div>
      </div>
    </form>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="col-container col-max col-gutters"&gt;
    &lt;div class="col col-15-lg"&gt;
      &lt;label for="form-text-input-1" class="form-label text-right-lg m-b-05 m-b-0-lg"&gt;Disabled&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="col col-50-lg"&gt;
        &lt;input type="text" readonly="true" class="form-text-input form-text-input-disabled" id="form-text-input-1"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>


  <section id="textarea-section">
    <div id="textarea" title="Textarea" class="inpage-anchor"></div>
    <h2>Textarea</h2>
    <p>Use the <code>.form-textarea</code> class to get the default styling. When setting a typesize and width, we recommend aiming for a measure of 52-78 characters.</p>

    <form>
      <div class="col-container col-max col-gutters">
        <div class="col col-15-lg">
          <label for="form-text-input-1" class="form-label text-right-lg m-b-05 m-b-0-lg">Label</label>
        </div>
        <div class="col col-50-lg">
          <textarea name="form-textarea-1" id="form-textarea-1" class="form-textarea"></textarea>
        </div>
      </div>
    </form>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="col-container col-max col-gutters"&gt;
    &lt;div class="col col-15-lg"&gt;
      &lt;label for="form-text-input-1" class="form-label text-right-lg m-b-05 m-b-0-lg"&gt;Label&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="col col-50-lg"&gt;
      &lt;textarea name="form-textarea-1" id="form-textarea-1" class="form-textarea"&gt;&lt;/textarea&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>


  <section id="selects-section">
    <div id="select" title="Select" class="inpage-anchor"></div>
    <h2>Select</h2>
    <p>Use the <code>.form-select</code> class to get the default styling.</p>

    <form>
      <div class="col-container col-max col-gutters">
        <div class="col col-15-lg">
          <label for="form-select-1" class="form-label text-right-lg">Label</label>
        </div>
        <div class="col col-50-lg">
          <select id="form-select-1" class="form-select">
            <option value="">Item 1</option>
            <option value="">Item 2</option>
            <option value="">Item 3</option>
            <option value="">Item 4</option>
          </select>
        </div>
      </div>
    </form>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="col-container col-max col-gutters"&gt;
    &lt;div class="col col-15-lg"&gt;
      &lt;label for="form-select-1" class="form-label text-right-lg"&gt;Label&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="col col-50-lg"&gt;
      &lt;select id="form-select-1" class="form-select"&gt;
        &lt;option value=""&gt;Item 1&lt;/option&gt;
        &lt;option value=""&gt;Item 2&lt;/option&gt;
        &lt;option value=""&gt;Item 3&lt;/option&gt;
        &lt;option value=""&gt;Item 4&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>

  <section id="select-multiple-section">
    <div id="select-multiple" title="Select Multiple" class="inpage-anchor"></div>
    <h2>Select Multiple</h2>
    <p>Use the <code>.form-select-multiple</code> class and add the attribute,
      <code>multiple</code> to get the default styling. If you'd only like a user
       to be able to select one option, just remove the <code>multiple</code> attribute
        and add a <code>size</code> attribute that takes a value of how ever many
        options you want shown.</p>

    <form>
      <div class="col-container col-max col-gutters">
        <div class="col col-15-lg">
          <label for="form-select-1" class="form-label text-right-lg m-b-05 m-b-0-lg">Multiple</label>
        </div>
        <div class="col col-50-lg">
          <select id="form-select-1" class="form-select-multiple" multiple>
            <option value="">Item 1</option>
            <option value="">Item 2</option>
            <option value="">Item 3</option>
            <option value="">Item 4</option>
          </select>
        </div>
      </div>
      <div class="col-container col-max col-gutters">
        <div class="col col-15-lg">
          <label for="form-select-1" class="form-label text-right-lg">Single</label>
        </div>
        <div class="col col-50-lg">
          <select id="form-select-1" class="form-select-multiple" size="3">
            <option value="">Item 1</option>
            <option value="">Item 2</option>
            <option value="">Item 3</option>
          </select>
        </div>
      </div>
    </form>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="col-container col-max col-gutters"&gt;
    &lt;div class="col col-15-lg"&gt;
      &lt;label for="form-select-1" class="form-label text-right-lg"&gt;Multiple&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="col col-50-lg"&gt;
      &lt;select id="form-select-1" class="form-select-multiple" multiple&gt;
        &lt;option value=""&gt;Item 1&lt;/option&gt;
        &lt;option value=""&gt;Item 2&lt;/option&gt;
        &lt;option value=""&gt;Item 3&lt;/option&gt;
        &lt;option value=""&gt;Item 4&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-container col-max col-gutters"&gt;
    &lt;div class="col col-15-lg"&gt;
      &lt;label for="form-select-1" class="form-label text-right-lg m-b-05 m-b-0-lg"&gt;Single&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="col col-50-lg"&gt;
      &lt;select id="form-select-1" class="form-select-multiple" size="3"&gt;
        &lt;option value=""&gt;Item 1&lt;/option&gt;
        &lt;option value=""&gt;Item 2&lt;/option&gt;
        &lt;option value=""&gt;Item 3&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>


  <section id="radio-button-section">
    <div id="radio-button" title="Radio Button" class="inpage-anchor"></div>
    <h2>Radio Button</h2>
    <p>Use <code>div.form-radio</code> to wrap an <code>label.form-radio-label</code>
      inside. Within that label you'll nest <code>input.form-radio-input</code>
      to get a radio input with the correct styles.</p>

    <form>
      <div class="col-container col-gutters">
        <div class="col col-15-lg">
          <label class="form-label text-right-lg">Radios</label>
        </div>
        <div class="col col-50-lg">
          <div class="form-radio">
            <label class="form-radio-label">
              <input type="radio" name="radio-1" class="form-radio-input">
              Radio selection 1
            </label>
          </div>
          <div class="form-radio">
            <label class="form-radio-label">
              <input type="radio" name="radio-1" class="form-radio-input">
              Radio selection 2
            </label>
          </div>
        </div>
      </div>
    </form>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="col-container col-gutters"&gt;
    &lt;div class="col col-15-lg"&gt;
      &lt;label class="form-label text-right-lg"&gt;Radios&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="col col-50-lg"&gt;
      &lt;div class="form-radio"&gt;
        &lt;label class="form-radio-label"&gt;
          &lt;input type="radio" name="radio-1" class="form-radio-input"&gt;
          Radio selection 1
        &lt;/label&gt;
      &lt;/div&gt;
      &lt;div class="form-radio"&gt;
        &lt;label class="form-radio-label"&gt;
          &lt;input type="radio" name="radio-1" class="form-radio-input"&gt;
          Radio selection 2
        &lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>

  <section id="checkbox-section">
    <div id="checkbox" title="Checkbox" class="inpage-anchor"></div>
    <h2>Checkbox</h2>
    <p>Use <code>div.form-checkbox</code> to wrap an <code>label.form-checkbox-label</code> inside. Within that label you'll nest <code>input.form-checkbox-input</code> to get a radio input with the correct styles.</p>

    <form>
      <div class="col-container col-gutters">
        <div class="col col-15-lg">
          <label class="form-label text-right-lg">Checkboxes</label>
        </div>
        <div class="col col-50-lg">
          <div class="form-checkbox">
            <label class="form-checkbox-label">
              <input type="checkbox" name="checkbox-1" class="form-checkbox-input">
              Checkbox 1
            </label>
          </div>
          <div class="form-checkbox">
            <label class="form-checkbox-label">
              <input type="checkbox" name="checkbox-1" class="form-checkbox-input">
              Checkbox 2
            </label>
          </div>
        </div>
      </div>
    </form>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="col-container col-gutters"&gt;
    &lt;div class="col col-15-lg"&gt;
      &lt;label class="form-label text-right-lg"&gt;Checkboxes&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="col col-50-lg"&gt;
      &lt;div class="form-checkbox"&gt;
        &lt;label class="form-checkbox-label"&gt;
          &lt;input type="checkbox" name="checkbox-1" class="form-checkbox-input"&gt;
          Checkbox 1
        &lt;/label&gt;
      &lt;/div&gt;
      &lt;div class="form-checkbox"&gt;
        &lt;label class="form-checkbox-label"&gt;
          &lt;input type="checkbox" name="checkbox-1" class="form-checkbox-input"&gt;
          Checkbox 2
        &lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>

  <section id="switch-section">
    <div id="switch" title="Switch" class="inpage-anchor"></div>
    <h2>Switch</h2>
    <p>A switch is a stylized checkbox that lets a user toggle on/off some sort
      of option. To build one, wrap a div with the class of <code>.lk-switch-outer</code>
      around an input and a label. The input has the class <code>.lk-switch</code>
      and the label has the class <code>.lk-switch-label</code>. That label then
      has two spans inside it. These are <code>.lk-switch-on</code> and <code>.lk-switch-off</code>.</p>

    <div class="col-container col-max col-gutters">
      <div class="col col-50-lg">
        <form>
          <div class="lk-switch-outer">
            <input type="checkbox" id="switch-1" class="lk-switch">
            <label class="lk-switch-label" for="switch-1">
              <span class="lk-switch-on">On</span>
              <span class="lk-switch-off">Off</span>
            </label>
          </div>
        </form>
      </div>
    </div>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="lk-switch-outer"&gt;
    &lt;input type="checkbox" id="switch-1" class="lk-switch"&gt;
    &lt;label class="lk-switch-label" for="switch-1"&gt;
      &lt;span class="lk-switch-on"&gt;On&lt;/span&gt;
      &lt;span class="lk-switch-off"&gt;Off&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>



  <section id="tokens-section">
    <div id="tokens" title="Tokens" class="inpage-anchor"></div>
    <h2>Tokens</h2>
    <p>Tokens are great for using autocomplete inside an input or for anytime you
      need a token that can be closed. To use them, you'll need to copy the look of a
      text input for a div by including <code>.tokenfield.form-text-input</code> on it.
      Then inside, you'll have tokens, which are made up of divs with the <code>.tokenfield-token</code>
      class on them. Finally, you'll have a span with a class of <code>.tokenfield-token-label</code>
      and a close anchor.</p>

    <div class="col-container col-max col-gutters">
      <div class="col col-50-lg">
        <form>
          <div class="tokenfield form-text-input">
            <input type="text" tabindex="-1" style="position: absolute; left: -10000px;">
            <div class="tokenfield-token">
              <span class="tokenfield-token-label">Token A</span>
              <a href="#" class="tokenfield-token-close" tabindex="-1">&times;</a>
            </div>
            <div class="tokenfield-token">
              <span class="tokenfield-token-label">Token B</span>
              <a href="#" class="tokenfield-token-close" tabindex="-1">&times;</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="tokenfield form-text-input"&gt;
    &lt;input type="text" tabindex="-1" style="position: absolute; left: -10000px;"&gt;
    &lt;div class="tokenfield-token"&gt;
      &lt;span class="tokenfield-token-label"&gt;Token A&lt;/span&gt;
      &lt;a href="#" class="tokenfield-token-close" tabindex="-1"&gt;&times;&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="tokenfield-token"&gt;
      &lt;span class="tokenfield-token-label"&gt;Token B&lt;/span&gt;
      &lt;a href="#" class="tokenfield-token-close" tabindex="-1"&gt;&times;&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>


  <section id="input-groups-section">
    <div id="input-groups" title="Input Groups" class="inpage-anchor"></div>
    <!-- Inputs Groups-->
    <h2>Inputs Groups</h2>
    <p>For a number that contains dashes, use our <code>.form-input-group</code>
       class on a <code>div</code> with <code>input.form-text-input</code> inside.
       Between each input, use <code>.form-input-group-addon</code> with a
       dash inside it.</p>

    <div class="col-container">
      <div class="col-50-md">
        <form>
          <div class="form-input-group">
            <input type="text" class="form-text-input">
            <div class="form-input-group-addon">-</div>
            <input type="text" class="form-text-input">
            <div class="form-input-group-addon">-</div>
            <input type="text" class="form-text-input">
            <div class="form-input-group-addon">-</div>
            <input type="text" class="form-text-input">
            <div class="form-input-group-addon">-</div>
            <input type="text" class="form-text-input">
          </div>
        </form>
      </div>
    </div>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="form-input-group"&gt;
    &lt;input type="text" class="form-text-input"&gt;
    &lt;div class="form-input-group-addon"&gt;-&lt;/div&gt;
    &lt;input type="text" class="form-text-input"&gt;
    &lt;div class="form-input-group-addon"&gt;-&lt;/div&gt;
    &lt;input type="text" class="form-text-input"&gt;
    &lt;div class="form-input-group-addon"&gt;-&lt;/div&gt;
    &lt;input type="text" class="form-text-input"&gt;
    &lt;div class="form-input-group-addon"&gt;-&lt;/div&gt;
    &lt;input type="text" class="form-text-input"&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>


  <section id="help-text-section">
    <div id="help-text-" title="Help Text" class="inpage-anchor"></div>
    <h2>Help Text</h2>
    <p>When necessary, you can place additional text below the input in a <code>div</code> with a <code>.form-helper</code> class to add helper text.</p>

    <form>
      <div class="col-container col-max col-gutters">
        <div class="col col-15-lg">
          <label for="form-text-input-1" class="form-label text-right-lg m-b-05 m-b-0-lg">Label</label>
        </div>
        <div class="col col-50-lg">
            <input type="text" class="form-text-input" id="form-text-input-1" placeholder="this is placeholder text">
            <div class="form-helper">You don't need to include http://</div>
        </div>
      </div>
    </form>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;div class="col-container col-max col-gutters"&gt;
    &lt;div class="col col-15-lg"&gt;
      &lt;label for="form-text-input-1" class="form-label text-right-lg m-b-05 m-b-0-lg"&gt;Label&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="col col-50-lg"&gt;
        &lt;input type="text" class="form-text-input" id="form-text-input-1" placeholder="this is placeholder text"&gt;
        &lt;div class="form-helper"&gt;You don't need to include http://&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>

  <section id="placeholder-text-section">
    <div id="placeholder-text" title="Placeholder Text" class="inpage-anchor"></div>
    <h2>Placeholder Text Mixin</h2>

    <p>Good for textareas, text inputs, selects and multiple selects.</p>
    <div class="guide-code">
<pre><code class="language-css">.custom-selector
    +placeholder-style
      property: value
  </code></pre>
    <p><code>
      +placeholder-style
    </code></p>
  </section>


  <section id="errors-section">
    <div id="errors" title="Errors" class="inpage-anchor"></div>
    <h2>Errors</h2>
    <p>Add the <code>.form-error</code> class to the form element to apply Lens's
       default for feedback styling. Additionally, add a <code>div</code> with
       the class of <code>.form-helper.form-helper-error</code> to inform the user
       what the feedback is.</p>

    <div class="col-container col-max col-gutters">
      <div class="col col-50-lg">
        <form>
          <select id="form-select-1" class="form-select form-error">
            <option value="">Item 1</option>
            <option value="">Item 2</option>
            <option value="">Item 3</option>
            <option value="">Item 4</option>
          </select>
          <div class="form-helper form-helper-error m-b-2">Get to the chopper!</div>
          <input type="text" class="form-text-input form-error" id="form-text-input-1">
          <div class="form-helper form-helper-error">Don't forget to this!</div>
        </form>
      </div>
    </div>
    <div class="guide-code">
    <pre><code class="language-html">&lt;form&gt;
  &lt;select id="form-select-1" class="form-select form-error"&gt;
    &lt;option value=""&gt;Item 1&lt;/option&gt;
    &lt;option value=""&gt;Item 2&lt;/option&gt;
    &lt;option value=""&gt;Item 3&lt;/option&gt;
    &lt;option value=""&gt;Item 4&lt;/option&gt;
  &lt;/select&gt;
  &lt;div class="form-helper form-helper-error m-b-2"&gt;Get to the chopper!&lt;/div&gt;
  &lt;input type="text" class="form-text-input form-error" id="form-text-input-1"&gt;
  &lt;div class="form-helper form-helper-error"&gt;Don't forget to this!&lt;/div&gt;
&lt;/form&gt;</code></pre>
    </div>
  </section>

</lens-main>
"""
