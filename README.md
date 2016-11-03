# IoTCar
IoT car on Bluemix demo code

1. The js folder and img folder are recommend to push under the publish folder.

2. Pay attention to the file path in "index.html"(img path,socketIO.js and jQuery path).

3. Add dependencies ("socket.io":"1.3.7") in package.json to import socketIO module on Bluemix.

4. Go to "https://pip.pypa.io/en/stable/installing/" to download a file. Run "python get-pip.py" as the guide to start using pip to download modules.("python setup.py install" is another method.)

5. Run "pip install Pyserial" to import serial module to local environment.

6. Connect PI in terminal, run "sudo pip install -U socketIO-client" in terminal to add socketIO module on Raspberry Pi.
	(Official documentation https://pypi.python.org/pypi/socketIO-client/0.7.0)   
