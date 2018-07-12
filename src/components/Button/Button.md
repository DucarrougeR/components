## Variants

The `<Button />` component accepts a `variant` property which allows you to select the proper button style for the context and action the button is for.

### Primary

Use a primary button for the most frequently used action or most important action on a page. Primary buttons should only appear once on a page. They are sometimes accompanied by a secondary button.

```js
 <Button>Primary Button</Button>
```
##### **Primary states**

```js noeditor
<table>
  <tr>
    <td><Button>Primary Idle</Button></td>
    <td><Button className="hover">Primary Hover</Button></td>
    <td><Button className="active">Primary Active</Button></td>
     <td><Button disabled>Disabled Active</Button></td>
  </tr>
</table>

```

<div class="doc-section-divider"></div>

### Outline
Use an outline button alongside a primary button to provide alternative actions on a page. Outline buttons should only appear alongside primary buttons for secondary actions. Use no more than two secondary buttons on a page.

```js

<List>
  <ListItem>
    <Button variant="outline">Light Idle</Button>
  </ListItem>
  <ListItem>
    <Button variant="outline" state="hover">Light Hover</Button>
  </ListItem>
  <ListItem>
     <Button variant="outline" state="active">Light Active</Button>
  </ListItem>
</List>
```

<div class="doc-section-divider"></div>

### Transparent

Use a transparent button as a tertiary action on a screen, they are often used as a Cancel button on a form. Typically it performs the opposite action of a primary button

```js

<List>
  <ListItem>
    <Button variant="transparent">Ghost Idle</Button>
  </ListItem>
  <ListItem>
    <Button variant="transparent" state="hover">Ghost Hover</Button>
  </ListItem>
  <ListItem>
     <Button variant="transparent" state="active">Ghost Active</Button>
  </ListItem>
</List>
```

<div class="doc-section-divider"></div>

### Destructive

Destructive Buttons are to be used in situations where you need to convey some very important, potentially irreversible consequence of pressing this button.

```js
<List>
  <ListItem>
    <DestructiveButton>Destructive Button</DestructiveButton>
  </ListItem>
  <ListItem>
    <DestructiveButton state="hover">Destructive Hover</DestructiveButton>
  </ListItem>
  <ListItem>
     <DestructiveButton state="active">Destructive Active</DestructiveButton>
  </ListItem>
</List>
```

### Destructive Variants

Destructive Buttons extend the default button, so they also have different variants
```js
<List>
  <ListItem>
    <DestructiveButton>Destructive Button</DestructiveButton>
  </ListItem>
  <ListItem>
    <DestructiveButton variant="outline">Destructive Outline</DestructiveButton>
  </ListItem>
  <ListItem>
     <DestructiveButton variant="transparent">Destructive Transparent</DestructiveButton>
  </ListItem>
</List>
```

## Size

Use the size property on a `<Button />` to modify the size the button rendered. You can combine it with the `mode` property to get the correct style and size of button you need.

```js
<List>
  <ListItem><Button size="large">Large Button</Button></ListItem>
  <ListItem><Button>Default Button</Button></ListItem>
  <ListItem><Button size="small">Small Light Button</Button></ListItem>
  <ListItem><Button size="xsmall">Extra-Small Button</Button></ListItem>
</List>
```

## Disabled
Use a disabled button to indicate to the user what action will be possible on a page once a prerequisite action is taken. Disabled buttons do not respond to user interaction.
```js
<Button disabled>I am disabled</Button>
```

## Additional Action Considerations
When a call to action requires additional steps, include an ellipsis at the end of the button text as a visual clue. This helps reinforce that there are additional steps that can take place before the action takes effect.
```js
<List>
  <ListItem><Button mode="scary">Move to Trash...</Button></ListItem>
  <ListItem><Button>Print...</Button></ListItem>
</List>
```
