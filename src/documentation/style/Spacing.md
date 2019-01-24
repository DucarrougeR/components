<div class="component-desc"><p>Consistent spacing is the foundation for a well structured user interface. Lens provides a set of spacing rules that takes the guess work out of spacing UI elements.</p></div>

<div class="doc-section-divider"></div>

<section id="rules" class="doc-section">
### Spacing Values

All spacing for components align to a 4pt grid. This grid allows for flexibility and consistency when designing for various screen sizes and devices.

</section>

```js noeditor
const SpacingOptionsRender = require('../../../styleguide_components/SpacingOptionsTable')
  .SpacingOptionsRender

;<SpacingOptionsRender />
```

### Practical Spacing Example

The table above does a good job at enumerating the available spacing options, but a concrete example does a better job at illustrating how to use those spacing sizes to build a piece of ui. Below we have an image of a hypothetical form we need to build.

On the left we have the form as designed and on the right you see the spacing in pink and line height of the text in blue.

!['Spacing Example'](/img/spacing/spacing-form-example.png)

Using Lens and the [Box Component](/#!/Box) we can quickly apply the correct spacing (the parts in pink) to this form.

```js
<form>
  <Heading fontWeight="light">Style</Heading>
  <Box pt="medium" pb="large" style={{ borderBottom: 'solid 1px #DEE1E5' }}>
    <FieldText id="style-name" name="styleName" label="Name" />
  </Box>

  <Box py="large" style={{ borderBottom: 'solid 1px #DEE1E5' }}>
    <Heading fontWeight="light">Dashboard Page</Heading>

    <Box mt="medium" mb="small">
      <FieldText id="font-family" name="fontFamily" label="Font Family" />
    </Box>

    <Box mb="small">
      <FieldText id="text-color" name="textColor" label="Text Color" />
    </Box>

    <Box>
      <FieldText
        id="background-color"
        name="bgColor"
        label="Background Color"
      />
    </Box>
  </Box>

  <Box pt="large">
    <Button>Save</Button>
  </Box>
</form>
```
