`MenuItem` is an `HTMLAnchorElement` that supports all of the `BoxProps` properties.

An icon can be optionally be assigned to each item via the `icon` property.

```js
<MenuItem>Home</MenuItem>
<MenuItem icon="Home">Home</MenuItem>
<MenuItem href="https://google.com" target="_blank" icon="Public">Away</MenuItem>
```

### Detail Text

Use the `detail` prop to provide explanatory detail to a given item.

```js
<MenuItem detail="Get regular updates">Schedule</MenuItem>
<MenuItem icon="Beaker" detail="Try the newest toys!">
  Labs
</MenuItem>
```

### Active & MenuGroup canActivate

Use the `active` prop to indicate the selected item(s).

Note: This property behaves slightly diffently depending on the context of the `MenuGroup` it is contained within. If the `MenuGroup` has the `canActivate` prop it will reserve space for the checkmark next to `active` items and any `icon` assignments on the items will be ignored.

```js
<Menu>
  <MenuGroup
    label="canActivate=false, no icons"
    labelProps={{ transform: 'none', bg: 'transparent' }}
  >
    <MenuItem active>Gouda</MenuItem>
    <MenuItem detail="Is often orange">Cheddar</MenuItem>
    <MenuItem>Swiss</MenuItem>
  </MenuGroup>
  <MenuGroup
    label="canActivate=false, icons"
    labelProps={{ transform: 'none', bg: 'transparent' }}
  >
    <MenuItem icon="Favorite" active>
      Gouda
    </MenuItem>
    <MenuItem icon="Favorite" detail="Is often orange">
      Cheddar
    </MenuItem>
    <MenuItem icon="Favorite">Swiss</MenuItem>
  </MenuGroup>
  <MenuGroup
    canActivate
    label="canActivate=true, icon ignored"
    labelProps={{ transform: 'none', bg: 'transparent' }}
  >
    <MenuItem active>Gouda</MenuItem>
    <MenuItem icon="Favorite" detail="Is often orange">
      Cheddar
    </MenuItem>
    <MenuItem>Swiss</MenuItem>
  </MenuGroup>
</Menu>
```


```js
  <MenuGroup>
    <MenuItem icon="Favorite" iconProps={{color: 'green'}}>
        Gouda
      </MenuItem>
      <MenuItem icon="Favorite" detail="Is often orange">
        Cheddar
      </MenuItem>
    <MenuItem icon="Favorite">Swiss</MenuItem>
  </MenuGroup>
```
