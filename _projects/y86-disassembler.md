---
stack:
- C
- Y86-64 Assembly
dates: Jan - Mar 2018
github: https://github.com/kristenkwong/y86-disassembler
link: ""
enddate: 2019-1-25
title: Y86 Disassembler
summary: Disassembler written in C, which reads a binary .mem file and interprets machine code data as Y86-64 Assembly instructions. Supports printing to stdout as well as external file, and parsing file from a given offset.
banner: ""
readmore: false
---

# Y86-64 Disassembler

Disassembler written in C, which reads a binary .mem file and interprets machine code data as Y86-64 Assembly instructions. Supports printing to stdout as well as external file, and parsing file from a given offset.

## Sample Output

Given input: [bigtest.mem](/assets/files/bigtest.mem)

```
Opened A1TestFiles/bigtest.mem, starting offset 0x0
Saving output to standard output
    .quad   0xa                              # 0a00000000000000
    .quad   0x7789                           # 8977000000000000
    halt    
.pos 0x100
    rrmovq  %rax, %rax                       # 2000
    rrmovq  %rax, %rcx                       # 2001
    rrmovq  %rax, %rdx                       # 2002
    rrmovq  %rax, %rbx                       # 2003
    rrmovq  %rax, %rsi                       # 2006
    rrmovq  %rax, %rdi                       # 2007
    rrmovq  %rax, %rsp                       # 2004
    rrmovq  %rax, %rbp                       # 2005
    rrmovq  %rcx, %rsi                       # 2016
    rrmovq  %rdx, %rsi                       # 2026
    rrmovq  %rbx, %rsi                       # 2036
    rrmovq  %rsi, %rsi                       # 2066
    rrmovq  %rdi, %rsi                       # 2076
    rrmovq  %rsp, %rsi                       # 2046
    rrmovq  %rbp, %rsi                       # 2056
    irmovq  $0xdeadbeef, %rax                # 30f0efbeadde00000000
    irmovq  $0xdeadbeef, %rcx                # 30f1efbeadde00000000
    irmovq  $0xdeadbeef, %rdx                # 30f2efbeadde00000000
    irmovq  $0xdeadbeef, %rbx                # 30f3efbeadde00000000
    irmovq  $0xdeadbeef, %rsi                # 30f6efbeadde00000000
    irmovq  $0xdeadbeef, %rdi                # 30f7efbeadde00000000
    irmovq  $0xdeadbeef, %rsp                # 30f4efbeadde00000000
    irmovq  $0xdeadbeef, %rbp                # 30f5efbeadde00000000
    halt    
.pos 0x500
    rmmovq  %rax, 0xbeefdeadfeed(%rax)       # 4000edfeaddeefbe0000
    rmmovq  %rax, 0xbeefdead(%rcx)           # 4001addeefbe00000000
    rmmovq  %rax, 0xbeefdead(%rdx)           # 4002addeefbe00000000
    rmmovq  %rax, 0xbeefdeadfeed(%rbx)       # 4003edfeaddeefbe0000
    rmmovq  %rax, 0xbeefdead(%rsi)           # 4006addeefbe00000000
    rmmovq  %rax, 0xbeefdead(%rdi)           # 4007addeefbe00000000
    rmmovq  %rax, 0xbeefdeadfeed(%rsp)       # 4004edfeaddeefbe0000
    rmmovq  %rax, 0xbeefdeadfed(%rbp)        # 4005eddfeafdee0b0000
    rmmovq  %rax, 0xbeefdead(%rax)           # 4000addeefbe00000000
    rmmovq  %rcx, 0xbeefdead(%rax)           # 4010addeefbe00000000
    rmmovq  %rdx, 0xbeefdead(%rax)           # 4020addeefbe00000000
    rmmovq  %rbx, 0xbeefdead(%rax)           # 4030addeefbe00000000
    rmmovq  %rsi, 0xbeefdead77778889(%rax)   # 406089887777addeefbe
    rmmovq  %rdi, 0xbeefdead(%rax)           # 4070addeefbe00000000
    rmmovq  %rsp, 0xbeefdead(%rax)           # 4040addeefbe00000000
    rmmovq  %rbp, 0xbeefdead(%rax)           # 4050addeefbe00000000
    mrmovq  0xbeefdead(%rax), %rax           # 5000addeefbe00000000
    mrmovq  0xbeefdead(%rcx), %rax           # 5001addeefbe00000000
    mrmovq  0xbeefdead(%rdx), %rax           # 5002addeefbe00000000
    mrmovq  0xbeefdead(%rbx), %rax           # 5003addeefbe00000000
    mrmovq  0xbeefdead(%rsi), %rax           # 5006addeefbe00000000
    mrmovq  0xbeefdead(%rdi), %rax           # 5007addeefbe00000000
    mrmovq  0xbeefdead(%rsp), %rax           # 5004addeefbe00000000
    mrmovq  0xbeefdead(%rbp), %rax           # 5005addeefbe00000000
    mrmovq  0xbeefdead(%rax), %rax           # 5000addeefbe00000000
    mrmovq  0xbeefdead(%rax), %rcx           # 5010addeefbe00000000
    mrmovq  0xbeefdead(%rax), %rdx           # 5020addeefbe00000000
    mrmovq  0xbeefdead(%rax), %rbx           # 5030addeefbe00000000
    mrmovq  0xbeefdead(%rax), %rsi           # 5060addeefbe00000000
    mrmovq  0xbeefdead(%rax), %rdi           # 5070addeefbe00000000
    mrmovq  0xbeefdead(%rax), %rsp           # 5040addeefbe00000000
    mrmovq  0xbeefdead(%rax), %rbp           # 5050addeefbe00000000
    halt    
.pos 0x800
    addq    %rax, %rax                       # 6000
    addq    %rax, %rcx                       # 6001
    addq    %rax, %rdx                       # 6002
    addq    %rax, %rbx                       # 6003
    addq    %rax, %rsi                       # 6006
    addq    %rax, %rdi                       # 6007
    addq    %rax, %rsp                       # 6004
    addq    %rax, %rbp                       # 6005
    addq    %rcx, %rsi                       # 6016
    addq    %rdx, %rsi                       # 6026
    addq    %rbx, %rsi                       # 6036
    addq    %rsi, %rsi                       # 6066
    addq    %rdi, %rsi                       # 6076
    addq    %rsp, %rsi                       # 6046
    addq    %rbp, %rsi                       # 6056
    addq    %rcx, %rax                       # 6010
    addq    %rcx, %r8                        # 6018
    addq    %rdx, %r9                        # 6029
    addq    %rbx, %r10                       # 603a
    addq    %rsi, %r11                       # 606b
    addq    %rdi, %r12                       # 607c
    addq    %rsp, %r13                       # 604d
    addq    %rbp, %r14                       # 605e
    addq    %r14, %rbp                       # 60e5
    addq    %r12, %r8                        # 60c8
    addq    %r12, %r9                        # 60c9
    addq    %r11, %r10                       # 60ba
    addq    %r10, %r11                       # 60ab
    addq    %r9, %r12                        # 609c
    addq    %r8, %r13                        # 608d
    addq    %rsp, %r14                       # 604e
    subq    %rcx, %rsi                       # 6116
    andq    %rdx, %rsi                       # 6226
    xorq    %rbx, %rsi                       # 6336
    jmp     0xdaddad                         # 70adddda0000000000
    jle     0xdaddad                         # 71adddda0000000000
    jl      0xdaddda                         # 72daddda0000000000
    je      0xdaddad                         # 73adddda0000000000
    jne     0xdaddad                         # 74adddda0000000000
    jge     0xdaddad                         # 75adddda0000000000
    jg      0xdaddad                         # 76adddda0000000000
    cmovl   %rax, %rax                       # 2200
    cmovl   %rax, %rcx                       # 2201
    cmovl   %rax, %rdx                       # 2202
    cmovl   %rax, %rbx                       # 2203
    cmovl   %rax, %rsi                       # 2206
    cmovl   %rax, %rdi                       # 2207
    cmovl   %rax, %rsp                       # 2204
    cmovl   %rax, %rbp                       # 2205
    ret                                      # 90
    cmovl   %rcx, %rsi                       # 2216
    cmovl   %rdx, %rsi                       # 2226
    cmovl   %rbx, %rsi                       # 2236
    cmovl   %rsi, %rsi                       # 2266
    cmovl   %rdi, %rsi                       # 2276
    cmovl   %rsp, %rsi                       # 2246
    cmovl   %rbp, %rsi                       # 2256
    call    0x1234567890123456               # 805634129078563412
    cmovle  %rcx, %rsi                       # 2116
    cmovl   %rdx, %rsi                       # 2226
    cmovne  %rbx, %rsi                       # 2436
    cmovge  %rsi, %rsi                       # 2566
    cmovg   %rdi, %rsi                       # 2676
    pushq   %rax                             # a00f
    pushq   %rcx                             # a01f
    pushq   %rdx                             # a02f
    pushq   %rbx                             # a03f
    pushq   %rsi                             # a06f
    pushq   %rdi                             # a07f
    pushq   %rsp                             # a04f
    pushq   %rbp                             # a05f
    popq    %rax                             # b00f
    popq    %rcx                             # b01f
    popq    %rdx                             # b02f
    popq    %rbx                             # b03f
    popq    %rsi                             # b06f
    popq    %rdi                             # b07f
    popq    %rsp                             # b04f
    popq    %rbp                             # b05f
```