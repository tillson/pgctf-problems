## Sample in a .Jar
Forensics - 125 points

Description
------------
I lost a flag within my AP Computer Science 2016 answer... Can you find it?

Flag
------------

`flag{java_is_n0t_s3cure}`


Internal description
------------
Opening the file in your favorite java decompiler (JD-GUI, The Unarchiver, etc.) will show the Java class with the flag hidden in it.  Apparently the Atom text editor will even decompile for you.  The flag is ASCII encoded in an array of integers, which can be decoded.
Alternatively, copy pasting the relevant code and printing the value of the character array after conversion from integers will reveal the flag.
