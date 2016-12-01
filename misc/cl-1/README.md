## Data Destroyer!
Trivia - 20 points

Description
------------
What command duplicates the sda partition to sdb?
Include the arguments for copying sda to sdb.

Flag
------------

`dd if=/dev/sda of=/dev/sdb`
`dd of=/dev/sdb if=/dev/sda`


Internal description
------------
The dd command does this.
