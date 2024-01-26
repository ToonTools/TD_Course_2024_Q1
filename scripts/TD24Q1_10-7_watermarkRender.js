myPythonScript =  "C:\\Github\\ToonTools\\TD_Course_2024_Q1\\scripts\\TD24Q1-10-8_watermarkRender.py"

function watermarkRenderedImages(){

  MessageLog.trace("starting : watermarkRenderedImages")

  var command       = "Python.exe"
  var watermarkText = "my watermark message..."
  var arguments     = [myPythonScript,watermarkText]
  
  var QPro  = new QProcess();
  QPro.start(command, arguments)
  QPro.waitForFinished(-1);

  MessageLog.trace("Output\t: "+ new QTextStream(QPro.readAllStandardOutput()).readAll());
  MessageLog.trace("Errors\t: "+ new QTextStream(QPro.readAllStandardError()).readAll());

}
