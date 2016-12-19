#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void debug_shell(){
    system("/bin/sh -i");
}

void validate(char *input){
    char buf[16];
    int secret = 0;
    strcpy(buf, input);

    if (secret == 0xc0deface){
        debug_shell();
    }else{
        printf("The secret is %x\n", secret);
    }
}

int main(int argc, char **argv){
    if (argc > 1)
        validate(argv[1]);
    return 0;
}
