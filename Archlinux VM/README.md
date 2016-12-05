## Archlinux Virtual Machine
Archlinux VM - 30 points per flag

Description
------------
Download the Archlinux virtual machine, build using the free and open-source program *VirtualBox* and find all 5 flags.

Hint
------------
It looks like the `root` account has a password. What could maybe bypass or reset it?

Internal Description
------------
Reset the root password by editing the grub boot instructions:
* during the grub screen press `e`
* once in the editor find the line that starts with `linux`
* add `init=/bin/bash` to the end of that line
* boot with the special boot instructions with `ctrl + x`
* once in, make the system read/write by running `mount -n -o remount,rw /`
* now that the system is read and write, you can run `passwd`

Flag
------------
* `r3c0v3ry_passw0rd_r3s3t` - Log in to any account
* `h1dd3n_0ne` - `ps aux` or `ps aux | grep 'h1d'`
* `g0lang_1s_c00l` - there's a binary file (/usr/bin/runme4good) so all you have to do is run the command `runme4good` and the flag will be printed out.
* `w0w_such_a_fa1l` - there's a file named todo in the user _ctfuser_s home directory. If you look closely there's a vim swapfile where the system was shutdown duing an edit. If you try to vim `todo` you will be asked if you want to recover the file. Choosing `yes` will reveal the flag.
* `ctf_us3r_c0mmand_h1story` - logging into as `ctfuser` and running the `history` command will show you this flag.
