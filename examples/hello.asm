section .data
    hello_msg db "Hello", 0

section .text
    global _start

_start:
    ; Call hello function
    call hello
    ; Exit program
    mov eax, 1
    xor ebx, ebx
    int 0x80

hello:
    ; Print hello_msg
    mov eax, 4
    mov ebx, 1
    mov ecx, hello_msg
    mov edx, 5
    int 0x80
    ret