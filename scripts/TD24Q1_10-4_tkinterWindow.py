
import tkinter as tk

def simplePythonUI():
  root = tk.Tk()
  root.title("Simple UI")

  label = tk.Label(root, text="Welcome to our UI")
  label.pack()

  def buttonAction():
    message = "Quit pressed"
    root.destroy()
    print("Printing : {}".format(message))
    return("Returning : {}".format(message))

  button = tk.Button(root, text="Quit", command=buttonAction)
  button.pack()

  root.mainloop()
  
simplePythonUI()