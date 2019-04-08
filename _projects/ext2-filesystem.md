---
stack:
- C
dates: Mar - Apr 2019
github: ""
link: ""
enddate: 2019-4-5
title: ext2 Linux file system
summary: FUSE-based file system that mounts onto Linux OS to allow commands such as ls, cat, stat, and readlink. Images of file systems are read and computed to find relevant information such as size, block size, volume name, inodes, and block groups. Path resolution is also implemented by traversing directory entries in block groups.
banner: ""
readmore: false
---

# ext2 Linux file system

FUSE-based file system that mounts onto Linux OS to allow commands such as ls, cat, stat, and readlink. Images of file systems are read and computed to find relevant information such as size, block size, volume name, inodes, and block groups. Path resolution is also implemented by traversing directory entries in block groups.

Program runs on Linux environments, using the package `libfuse-dev`. 

## Part 1: File System Information

Relevant files: 
- `ext2.c`
- `ext2test.c`
- `ext2.h`

Reads image files into a `volume` struct, including the superblock and group descriptor table, filling in the relevant fields according to the Internal Layout <a href="https://www.nongnu.org/ext2-doc/ext2.html">documentation</a> of ext2fs.

## Part 2: Inodes and Path Resolution

Relevant files: 
- `ext2.c`
- `ext2test.c`
- `ext2.h`

Functions related to reading inodes, file blocks, and file content implemented. In addition, functions to return the block number containing the data according to a particular index is implemented. Because an inode contains direct blocks, single-, double-, and triple- indirect blocks, calculations must be done to find this index.

`find_file_from_path` splits the path into components using `strtok`, and for each component recursively searches entries for the next component in order to find the inode for the final file.

## Part 3: Virtual File System

Relevant files:
- `ext2fs.c`

Functions to read metadata of a file, read directories, open and read files, and read a symbolic (soft) link. Uses functions from part 2 as helpers.