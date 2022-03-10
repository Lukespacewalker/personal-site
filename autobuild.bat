@echo off
@echo "Building website"
call yarn run build:win
@echo "Copy website to staging area"
xcopy "public\*" "..\lukespacewalker.github.io\" /s /e /y
cd ..
cd "lukespacewalker.github.io"
@echo "Download lastest information from GitHub"
call git fetch
call git pull --rebase
@echo "Pushing Website"
@echo on
call git add -A
call git commit -m "Update Website"
call git push
@echo off
cd ..
cd "Personal Site"
@echo "Done"