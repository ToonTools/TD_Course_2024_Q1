/*
	tells the user how many nodes are currently selected in the node view
*/
function getSceneInformation()
{
	MessageLog.trace("started ")

	var selectedNodes_initial = selection.numberOfNodesSelected()

	selection.selectAll()

	var numberOfNodesInScele = selection.numberOfNodesSelected()

	MessageLog.trace("Number of nodes selected : " + selectedNodes_initial )
	MessageLog.trace("Number of nodes in scene : " + numberOfNodesInScele )

	selection.clearSelection()
