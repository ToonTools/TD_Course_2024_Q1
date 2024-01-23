/*
	tells the user how many nodes are currently selected in the node view
*/
function getSceneInformation()
{
	MessageLog.trace("started")

	var numberOfNodesSelected = selection.numberOfNodesSelected()

	selection.selectAll()

	var numberOfNodesInScele = selection.numberOfNodesSelected()

	MessageLog.trace("The total number of nodes selected is : " + numberOfNodesSelected )
	MessageLog.trace("The total number of nodes in the scene  is : " + numberOfNodesInScele )

	selection.clearSelection()
}