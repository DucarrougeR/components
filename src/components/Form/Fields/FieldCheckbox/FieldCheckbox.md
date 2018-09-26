
```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/2MG6DoSjk4IaLnjjFCnKFf/Forms"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/Fields/FieldCheckbox.tsx"
  feedbackTitle="FieldCheckbox Component Feedback" />
```

### FieldCheckbox

The `<FieldCheckbox />` component has one required property: `label`. By default, the label will render to the left of the checkbox, which is the recommended convention, however this is adjustable with the `alignLabel` property.

Additionally, it is highly recommended to include the `name` property, as this will be used by forms to capture the inputted data and for validation.

The `required` property displays a red star by the label, indicating that the field must be filled out before submission.

```js
<FieldCheckbox name="box" label="Box" />
<FieldCheckbox name="box-2" label="Box 2" alignLabel="left" />
<FieldCheckbox name="requiredField" label="A required field" required />
```

### FieldCheckbox Validation

The `<FieldCheckbox />` components accepts `validationMessage` as a property. This is an object with properties `type` and `message`:
`
interface ValidationMessage {
  type: ValidationType
  message: string
}
`

`ValidationType` is a string literal, which accepts:
* error
* warning
* info
* success


If you have multiple fields in need of validation, it is recommended that you wrap them in a `<Form />` component and pass to it a dictionary with key as field name and value as a `ValidationMessage`.

The `alignValidationMessage` can also be used to adjust where the validation message appears in relation to the input field. By default, it will render to the right, which is the best practice in most cases.

___Note: In the current implementation, any `ValidationMessage` set in a `<FieldCheckbox />` component will be overridden by `ValidationMessages` set in the parent `<Form />` component. Because of this, it is highly recommended that you only ever directly set `ValidationMessage` if a `<FieldCheckbox />` is outside a `<Form />`.___

```js
<FieldCheckbox name="someBox" label="Some Box" validationMessage={{type: "error", message: "This is an error"}}/>
<FieldCheckbox name="some-box-2" label="Some Box 2" validationMessage={{type: "warning", message: "Here is a warning"}} alignValidationMessage="bottom" />
```
