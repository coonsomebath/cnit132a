# Notes on commands used (eg git, powershell, etc.)

## Creating a new repository from the command line
```powershell
New-Item README.md -Type file

New-Item gitignore.txt
ren gitignore.txt .gitignore

New-Item .gitignore -Type file
```
Note: ```ren``` == ```Rename-Item```

```powershell
git init

git add README.md .gitignore
git commit -m "first commit"

git add -A
git commit -m "first commit"

git branch -M main
git remote add origin https://github.com/coonsomebath/cnit132a.git
git push -u origin main
```
+ ```-A``` == ```--all```.
+ ```-M``` == ```--move --force```.
+ ```-u``` == ```--set-upstream```. 
    + This sets "origin main" as default remote branch for current local branch. 
    + You can ```git push -u origin nameOfBranch``` once for each branch you have and then subsequently, you only need to issue ```git push``` or ```git pull``` there after. This is because the command links/maps the local & remote repos so it's no longer necessary to explicitly specify which branch you are referring to.
    + use ```git branch -vv``` to check the mapping btwn local & remote branches. If needed, run ```git push -u origin <branch-name>``` to map whatever branch you're currently checking out.

## Push an existing repository from the command line
```powershell
git remote add origin https://github.com/coonsomebath/cnit132a.git
git branch -M main
git push -u origin main
```
+ ```git branch -M main``` the flag is a shortcut for ```--move --force```. We are renaming the local default branch name to main from master. In Oct. 2020, GitHub decided to use more politically correct nomenclature.
