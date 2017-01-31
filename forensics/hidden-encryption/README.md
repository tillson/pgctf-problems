## Hidden Encryption
Forensics - 25 points

Description
------------
I found this in a TCP stream on my network but I don't know what it means:

`data:application/zip;base64,UEsDBAoAAAAAALCTgUkAAAAAAAAAAAAAAAAEABwAemlwL1VUCQADXLJAWIayQFh1eAsAAQT1AQAABBQAAABQSwMECgAJAAAAWpOBSekL5gEqAAAAHgAAABEAHAB6aXAvY2FudHRvdWNodGhpc1VUCQADvLFAWLyxQFh1eAsAAQT1AQAABBQAAACloWY4Fg7b44dFcex3R14yLLlXmbqSQe2AD7EoBRG+X8MuO0cC4BxL399QSwcI6QvmASoAAAAeAAAAUEsBAh4DCgAAAAAAsJOBSQAAAAAAAAAAAAAAAAQAGAAAAAAAAAAQAO1BAAAAAHppcC9VVAUAA1yyQFh1eAsAAQT1AQAABBQAAABQSwECHgMKAAkAAABak4FJ6QvmASoAAAAeAAAAEQAYAAAAAAABAAAApIE+AAAAemlwL2NhbnR0b3VjaHRoaXNVVAUAA7yxQFh1eAsAAQT1AQAABBQAAABQSwUGAAAAAAIAAgChAAAAwwAAAAAA`

Can you help me find out what that is?

Hint
------------
Think OWASP.

Internal Description
------------
Put the stream into your web browser, and a ZIP file will be downloaded. Run unzip on the file, and you'll be presented with a password field. The password (put there to encrypt the file making it invisible to the `strings` command) is `123456`. This can be found in an OWASP top 10 most common passwords list.

Flag
------------
`flag{3z_data_4_y0u}`
