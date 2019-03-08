#Welcome to Xenia!

this is a project run by Code for Dayton!

##Local setup guide
###Prereq
1. [Install node](https://nodejs.org/en/)
1. [Install yarn](https://yarnpkg.com/en/)
1. [Generate ssh key and add it to github](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

###Steps to run
1. Using your terminal, clone this repository
```
git clone git@github.com:kyhy/xenia.git
```
1. Navigate to `xenia` repository. For example:
```
cd ~/code/xenia
```
1. Install all dependencies
```
yarn install
```
1. Start the react application (project should automatically open on your default browser)
```
yarn start
```

### Gitsetup
#### Use VS Code as your git editor
* For windows, follow the instructions in this stackoverflow
  * https://stackoverflow.com/questions/30024353/how-to-use-visual-studio-code-as-default-editor-for-git

#### enable rerere
```
git config --global rerere.enabled true
```

[article on git rerere](https://hackernoon.com/fix-conflicts-only-once-with-git-rerere-7d116b2cec67)

###Recommended Tools
* [VS Code](https://code.visualstudio.com/)
* [fzf: a command line fuzzy finder](https://github.com/junegunn/fzf)
* [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

### Useful git commands
#### Create a branch
```
git checkout -b <branch-name>
```
#### Delete a branch
```
git branch -D <branch-name>
```

#### Push a branch
```
git push -u origin <branch-name>
```

#### Update local git and change it to origin/master
```
git fetch && git checkout origin
```
### What if I have a branch conflict?
```
git fetch
git checkout <target-branch>
git rebase -i origin/master
```

