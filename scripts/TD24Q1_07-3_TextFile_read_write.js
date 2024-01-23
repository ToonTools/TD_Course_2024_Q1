/*
Input:  press the buttons, no harmony scene requirements
Output: a text file on the users desktop

How to use: launch each of the functions to write and then read information from a .txt file on your user/deskop location

*/


function writeTextFile(){
	MessageLog.trace("this is where text will be written")

	
	// create text file
	var myUserName 		= about.userName
	var myPath 			= "C:\\Users\\" + myUserName + "\\Desktop\\test\\"
	var fileName 		= "MyTextFile.txt"
	var myFileNameFull 	= myPath + fileName 
	
	MessageLog.trace(myFileNameFull)

	var myFile 			= new File(myFileNameFull)		

	myFile.open(FileAccess.ReadWrite)

	MessageLog.trace("my file should be made now")

	myFile.close()
}


function readTextFile(){
	MessageLog.trace("this is where text will be read from")
}