# @wag/dux

## Usage
Set of tool kits to reduce boilerplate in redux store creation.

### createAsyncActionsTypes
createAsyncActionsTypes(namespace, actionName) will return: 

```javascript
{
  START: Start;
  SUCCESS: Success;
  ERROR: Error;
  DISMISS_ERROR: DismissError;
}
```
