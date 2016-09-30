## ECorp Internal
Web - 40 points

Description
------------
We found an ECorp internal server, but we can't seem to figure out how to get past the login...


Internal description
------------
The key to this problem is knowing how to read javascript.  
The btoa() function is used on the user input to convert it to base64, and the encoded user input is checked against the string literal 'aHVudGVyMg==', which translates to 'hunter2'.
This is meant to be an easy problem, so encourage those who ask for help to try and figure out what each javascript function does.

Flag
------------

`flag{b0nsoir_3lli0t}`
