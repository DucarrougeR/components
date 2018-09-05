```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;
<StatusAndResources
  status="experimental"
  githubURL="https://github.com/looker/relens/blob/master/src/components/Box/Box.tsx"
  feedbackTitle="Box Component Feedback" />
```

### About Box

`<Box />` is a low level component who's primary purpose is to provide a utility for easily controlling the spacing around elements in a consistent way using the [Lens spacing values](/#!/Spacing).

It is recommended that you **avoid** using `<Box />` if possible and instead use a higher level component if it is available.

***

### Spacing with Box

The `<Box />` component allows you to control it's margin and padding properties for a chosen side.

Using spacing on a `<Box />` is like following a recipe, you select:
```js noeditor
<List type="number">
  <ListItem>The type of spacing, margin or padding</ListItem>
  <ListItem>The side to apply it to </ListItem>
  <ListItem>The amount of space to apply</ListItem>
</List>
```
```js noeditor
const SpacingTableRender = require('../../../styleguide_components/SpacingTable').SpacingTableRender;
<Box my="xxlarge">
  <SpacingTableRender />
</Box>
```
To get the correct spacing you choose one value from each of the above columns. For example, to get 8px of margin on the right side you would do. `<Box mr="small">` or if you wanted 40px of padding on all sides you would do `<Box p="xxlarge">`.

You can combine different spacing recipes to apply spacing to multiple sides at one time. For example if you wanted 16px of margin on the left and 20px of padding on the top you would do `<Box ml="medium" pt="large">`

#### Spacing Examples
Below are a few more examples of building a spacing recipe to help clarify how to use spacing with the `<Box>` component.
```js
  <Box pl="xsmall">Padding left - Extra Small</Box>
  <Box pl="medium">Padding left -  Medium</Box>
  <Box my="xxxlarge" ml="xlarge">Margin Top & Bottom - XXXLarge, Margin left - XLarge</Box>
  <Box pb="xxlarge" ml="xxxlarge"> Padding Bottom - XXLarge, Margin left - XXXLarge</Box>
```
