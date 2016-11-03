# -*- coding: UTF-8 -*-

from socketIO_client import SocketIO
import serial
# import time
# import random


class RCControl():

    def __init__(self):
        self.serial_port = serial.Serial('/dev/ttyACM0', 9600, timeout=1)	#open serial port,9600(or 115200) is baud rate.
        # self.serial_port = serial.Serial('/dev/tty.usbmodem1421', 9600, timeout=1)

    def steer(self, prediction):
        if prediction == 1:
            self.serial_port.write(chr(1))	#chr() 函数从指定的 ASCII 值返回字符。
            print("Forward")
        elif prediction == 2:
            self.serial_port.write(chr(2))
            print("backward")
        elif prediction == 3:
            self.serial_port.write(chr(3))
            print("Left")
        elif prediction == 4:
            self.serial_port.write(chr(4))
            print("Right")
        else:
            self.stop()
            print("Stop")

    def stop(self):
        self.serial_port.write(chr(0))

def main():
    class SocketClass():
        def getSocket(self, args):
            # print(args)
            # print type(args)
            if args == "w":
                steer1.steer(1)
            elif args == "s":
                steer1.steer(2)
            elif args == "a":
                steer1.steer(3)
            elif args == "d":
                steer1.steer(4)
            elif args == "t":
                steer1.steer(5)
            else:
                print("Can't read this parameter")

    steer1 = RCControl()
    newObj = SocketClass()
    socketIO = SocketIO('drivecar.mybluemix.net', 80)
    socketIO.on('message', newObj.getSocket)
    socketIO.wait()


if __name__ == '__main__':
    main()