# this will wait for file_path, when it exists it will create zip_path
import zipfile
import time
from pathlib import Path
import tkinter as tk

"C:\Github\ToonTools\TD_Course_2024_Q1\wait\wait_file.txt"


file_path = Path("C:\\Github\\ToonTools\\TD_Course_2024_Q1\\wait\\wait_file.txt")
zip_path  = Path("C:\\Github\\ToonTools\\TD_Course_2024_Q1\\wait\\example.txt.zip")

root  = tk.Tk()
root.minsize(width=400, height=50)
root.title("Waiting for file...")
label = tk.Label(root, text=file_path)
label.pack()

def cancel_operation():
  root.destroy()
  return("Process completed")

cancel_button = tk.Button(root, text="Cancel Waiting", command=cancel_operation)
cancel_button.pack()

while True:
  if file_path.exists():
    with zipfile.ZipFile(zip_path, 'w') as zip_file:
      zip_file.write(file_path)
    label.config(text="File found and zipped!")
    cancel_button.config(text = "Close Window", command=cancel_operation)
    break
  else:
    root.update()
    time.sleep(1) # how often this loop will run in the backgorund
  
root.mainloop()