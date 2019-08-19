```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources')
  .StatusAndResources

;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Inputs/InputHidden.tsx"
  feedbackTitle="InputHidden Component Feedback"
/>
```

### Default InputHidden

The `<InputHidden />` component renders a single hidden input element on the page. This is used for storing static values in forms, and meant to remain invisible to the user and screen readers.

```js
import { InputHidden } from './InputHidden'
;<InputHidden />
```

### Name and ID

A name and ID can be specified in the `<InputHidden />` component. Names are important if the input is used in the context of a form, in which case a name is required for the value of the input to be captured.

```js
import { InputHidden } from './InputHidden'
;<InputHidden name="someName" id="someId" />
```
