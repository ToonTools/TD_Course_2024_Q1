
Add the following informaitoninto a `master controller` node and make sure the `myCustomMasterControllerScript.js` is in a location that the harmony scene can read

## Specifications
```html
<specs>
  <ports>
    <in type="IMAGE"/>
    <out type="IMAGE"/>
  </ports>
  <attributes>
<attr type="BOOL" name="checkbox_value" value="false" tooltip="CheckBox On/Off value"/>
  </attributes>
</specs>
```

## UI Script
```javascript
include(scene.currentProjectPath() + "/scripts/myCustomMasterControllerScript.js");
```