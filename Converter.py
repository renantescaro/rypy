from moviepy.editor import *
import os

class Converter:
    def __init__(self, fileDir, fileName):
        self.fileDir = fileDir
        self.fileName = fileName

    def convert(self):
        
        print(self.fileDir + '/' + self.fileName)
        videoClip = VideoFileClip(self.fileDir + '/' + self.fileName)
        
        audioClip = videoClip.audio
        
        audioClip.write_audiofile(self.fileDir + '/' + (self.fileName.replace("4","3")))
        
        audioClip.close()
        
        videoClip.close()
        
        os.remove(self.fileDir + '/' + self.fileName) 
