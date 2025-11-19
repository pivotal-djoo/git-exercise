# Git Exercise

### Starting from [dev branch](https://github.com/pivotal-djoo/git-exercise/tree/dev):

```mermaid
flowchart LR
    1 --> 2
    2 --> 3
    3 --> 4
    4 --> Main([Main Branch])
    2 --> 6A
    6A --> X
    X --> 6B
    6B --> 5
    5 --> Dev([Dev Branch])
```

- Drop commit X
- Reorder commit 5 to occur before 6A and 6B
- Squash 6A and 6B and reword this commit to 6
- Rebase dev onto main and fast-forward main so it contains all commits in order

### Goal:

```mermaid
flowchart LR
    1 --> 2
    2 --> 3
    3 --> 4
    4 --> 5
    5 --> 6
    6 --> Main([Main Branch])
```
