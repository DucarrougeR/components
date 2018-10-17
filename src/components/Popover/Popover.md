
```js
const popoverTest = (
  <Popover>
    <Box bg="palette.charcoal200" m="small" borderRadius="2" overflow="hidden">
      <Box bg="palette.charcoal300" p="small">
        <Heading size="2">Here's a title</Heading>
      </Box>
      <Box p="small">What am I doing here?</Box>
    </Box>
  </Popover>
);

<div>
<Box display="inline-block" mr="small">
  <OverlayTrigger trigger="click" overlay={popoverTest}>
    <Button variant="outline">Show overlay!</Button>
  </OverlayTrigger>
</Box>
<Box display="inline-block" mr="small">
  <OverlayTrigger placement="top" trigger="click" overlay={popoverTest}>
    <Button variant="outline">Show overlay above!</Button>
  </OverlayTrigger>
</Box>
<Box display="inline-block" mr="small">
  <OverlayTrigger placement="bottom" trigger="click" overlay={popoverTest}>
    <Button variant="outline">Show overlay below!</Button>
  </OverlayTrigger>
</Box>
<Box display="inline-block">
  <OverlayTrigger placement="left" trigger="click" overlay={popoverTest}>
    <Button variant="outline">Show overlay left!</Button>
  </OverlayTrigger>
</Box>
</div>
```
