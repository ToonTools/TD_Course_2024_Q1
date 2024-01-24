// this is where the functionality will live for the custom master controller script

// controller on
Controller.onShowControl = function(){

  Controller.controls = []
  var valAttr = node.getAttr(Controller.node, frame.current(), "checkbox_value")
  var checkBox = new CheckboxWidget({
    data: valAttr,
      position      : Point2d(0.,0.),
      screen_space  : false,
      outer_color   : ColorRGBA(0,0,0,255),
      on_color      : ColorRGBA(0,255,0,128),
      off_color     : ColorRGBA(255,0,0,128),
      size : 1
})
  checkBox.valueChanged.connect(toggleValue)
  Controller.controls = [checkBox]
}

// controller off
Controller.onHildeControl = function(){

  MessageLog.trace("Master Controller is hidden");
  checkBox.valueChanged.connect(toggleValue)
  node.setTextAttr(Controller.node, "checkbox_value" , frame.current(), false)
}


// toggle controller changed
function toggleValue(checkboxValue){
  MessageLog.trace("Value has been toggled : " + checkboxValue );
}