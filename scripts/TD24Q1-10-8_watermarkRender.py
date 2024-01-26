#TD101_watermarkRender.py
import sys
myArguments = sys.argv

import os
from PIL import Image, ImageDraw, ImageFont

def add_watermark(img_path, copy_text, output):

  # set some variables
  text_opacity            =0.7
  box_opacity             =0.4
  textFractionOfBoxWidth  =0.8
  # Open the image
  image                   = Image.open(img_path)
  imageWidth ,imageHeight = image.size

  # set the size of the box at 80% of image width and 2x the height of the text
  boxWidth          = imageWidth * 0.8
  boxOpacityAs8bit  = int(255 * box_opacity)  # convert the percentage value to a 8 bit colour value

  # Add the watermark text
  watermark_text    = copy_text
  fontSize          = 1       # starting font size
  font              = ImageFont.truetype("arial.ttf", fontSize)
  # increase the size of the text box until it is 0.8 % of the width of its background box
  # getbbox returns values like [left,top,right,bottom], we want right
  while font.getbbox(watermark_text)[2] < int(textFractionOfBoxWidth * boxWidth):
    # increse the font size by 1 until it is the correct fraction of the box width
    fontSize  += 1
    font      = ImageFont.truetype("arial.ttf", fontSize)
    
  # size the box height to the text height
  textWidth         = font.getbbox(watermark_text)[2] 
  textHeight        = font.getbbox(watermark_text)[3] # getbbox returns values like [left,top,right,bottom], we want bottom
  boxHeight_upated  = textHeight *2
  
  # create the box
  boxOpacityAs8bit  = int(255 * box_opacity)  # convert the percentage value to a 8 bit colour value
  box               = Image.new("RGBA", (int(boxWidth), int(boxHeight_upated)), (0, 0, 0, boxOpacityAs8bit))
  boxDrawing        = ImageDraw.Draw(box)
  
  # same as getbbox, textbbox returns values like [left,top,right,bottom] we also need to pass in the initial offset [0,0],
  text_xOffset      = (boxWidth- textWidth)/2     # centered horizontally
  text_yOffset      = textHeight/2    # centered vertically
  textOpacityAs8bit = int(255 * text_opacity)  # convert the percentage value to a 8 bit colour value
  boxDrawing.text((text_xOffset, text_yOffset), watermark_text, font=font, fill=(255, 255, 255, textOpacityAs8bit))

  # Paste the black box with the watermark onto the image
  box_xOffset = (imageWidth-boxWidth)/2                 # centered
  box_yOffset = ((imageHeight*0.95)-boxHeight_upated)   # 5% from the bottom
  image.paste(box, (int(box_xOffset), int(box_yOffset)), box)

  # Save the result
  image.save(output)
  
  # if the process was a success, it returns true, otherwise the return value will be False
  return True 
    
def generateWatermarkedImage_fromHarmony(sourceImage, copyText ):
  
  watermarkedImage  = os.path.splitext(sourceImage)[0] + "_watermarked.jpg"
  

  if(add_watermark(sourceImage,copyText,watermarkedImage)):
    print("Generated: {}".format(watermarkedImage))
    

generateWatermarkedImage_fromHarmony("C:\Github\ToonTools\TD_Course_2024_Q1\watermark\source_image.jpg",myArguments[1] )