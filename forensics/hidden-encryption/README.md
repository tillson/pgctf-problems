## Hidden Encryption
Forensics - 25 points

Description
------------
I found this in a TCP stream on my network but I don't know what it means:

`data:application/zip;base64,UEsDBAoAAAAAALCTgUkAAAAAAAAAAAAAAAAEABwAemlwL1VUCQADXLJAWIayQFh1eAsAAQT1AQAABBQAAABQSwMECgAJAAAAWpOBSekL5gEqAAAAHgAAABEAHAB6aXAvY2FudHRvdWNodGhpc1VUCQADvLFAWLyxQFh1eAsAAQT1AQAABBQAAACloWY4Fg7b44dFcex3R14yLLlXmbqSQe2AD7EoBRG+X8MuO0cC4BxL399QSwcI6QvmASoAAAAeAAAAUEsBAh4DCgAAAAAAsJOBSQAAAAAAAAAAAAAAAAQAGAAAAAAAAAAQAO1BAAAAAHppcC9VVAUAA1yyQFh1eAsAAQT1AQAABBQAAABQSwECHgMKAAkAAABak4FJ6QvmASoAAAAeAAAAEQAYAAAAAAABAAAApIE+AAAAemlwL2NhbnR0b3VjaHRoaXNVVAUAA7yxQFh1eAsAAQT1AQAABBQAAABQSwUGAAAAAAIAAgChAAAAwwAAAAAA`

Can you help me find out what that is?

Hint
------------
*No Hint*

Internal Description
------------
Put the stream into your web browser, and run the `strings` command on the file to find the zip password.

Flag
------------
`flag{3z_data_4_y0u}`
