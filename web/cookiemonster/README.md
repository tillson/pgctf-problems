## Cookiemonster
Web - 60 points

Description
------------
We enumerated the ECorp network and found this website, but it says access denied. There's no login form either...

Internal description
------------
Solving this problem requires a knowledge of browser cookies and how to modify them.
When first visting the page, the user will be greeted with "Access Denied" (due to the userType cookie being 0).  Changing the cookie (EditThisCookie, Charles Proxy, Burp Suite, Postman) and sending another GET request to the page will reveal the flag.

Additional Info
------------
This problem is on the misc-web-server under the subdirectory /cookiemonster/

Flag
------------

`flag{b0nsoir_3lli0t}`
