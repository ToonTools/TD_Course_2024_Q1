myPythonScript = "C:\\Github\\ToonTools\\TD_Course_2024_Q1\\scripts\\TD24Q1_10-6_waitForFile.py"

function waitAndZip(){

  MessageLog.trace("running: waitAndZip()")
  var command     = "Python.exe"
  var arguments   = [myPythonScript]
  
  var QPro  = new QProcess();
  QPro.start(command, arguments)
  QPro.waitForFinished(-1);

  MessageLog.trace("Output\t: "+ new QTextStream(QPro.readAllStandardOutput()).readAll());
  MessageLog.trace("Errors\t: "+ new QTextStream(QPro.readAllStandardError()).readAll());
}
