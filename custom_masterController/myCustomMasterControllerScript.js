Controller.onShowControl = function(){

	Controller.controls =[];
	var valAttr = node.getAttr(Controller.node, frame.current(), "checkbox_value");
	var checkBox = new CheckboxWidget({
		data					: valAttr,
		position			: Point2d(0., 0.),
		screen_space 	: false,
		outer_color 		: ColorRGBA(0,0,0,255),
		on_color 			: ColorRGBA(0,255,0,255),
		off_color 		: ColorRGBA(255,0,0,255),
		size					: 1
	});

	checkBox.valueChanged.connect(toggleValue)

	Controller.controls = [checkBox]
}

Controller.onHideControl = function(){

	MessageLog.trace("Master controller is hidden")
	node.setTextAttr(Controller.node, "checkboxvalue", frame.current(), false)

}

function toggleValue(valAttr){
	MessageLog.trace("Value is : " + valAttr)

	var type = ["CurveModule"]
	//MessageLog.trace("type = " + type)
	var curveNodes = node.getNodes(type)
	//MessageLog.trace("curve modules length = " + curveNodes.length)

	if(valAttr){
		for ( var i = 0 ; i< curveNodes.length ; i++){
			selection.addNodeToSelection(curveNodes[i])
		}
		Action.perform("onActionShowSelectedDeformers()","miniPegModuleResponder")
		selection.clearSelection()
	}
	else{
		selection.clearSelection()
		//selection.addNodeToSelection(Contoller.node)
		Action.perform("onActionShowSelectedDeformers()","miniPegModuleResponder")
	}
}