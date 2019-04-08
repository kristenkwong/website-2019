---
stack:
- C
dates: Mar - Apr 2019
github: ""
link: ""
enddate: 2019-4-3
title: Simple FTP Server
summary: Minimal single client FTP server written in C using the Unix Socket API, implemented according to <a href="https://www.ietf.org/rfc/rfc959.txt">RFC 959</a>. Supports Image and ASCII type file transfers in Stream mode, and file system navigation features such as cd and directory listing.
banner: ""
readmore: false
---

# Simple FTP Server

1. Listens for connections.
2. Accepts connection from the client.
3. Responds with 220 to await login. The program accepts the user `cs317` with no password.
4. Once logged in, the server accepts FTP commands until the connection is closed by the client, or `QUIT` command is sent.
5. When connection is closed, server awaits new connections.
The server only handles one client at a time.

## Commands implemented

According to <a href="https://www.ietf.org/rfc/rfc959.txt">RFC 959</a>.
- USER
- QUIT
- CWD
- CDUP
- TYPE
- MODE
- STRU
- RETR
- PASV
- NLST