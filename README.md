# GitHub Projects File Viewer
GitHub file viewer is a one stop Angular client applcation browse all your GitHub projects files with an options of description and output views.
It use GitHub project pages as hosting web pages.

## How To Use It
1. Fork this repository into your own GitHub accout.
2. Add a file called *'projects.yml'* to the root of this repository and add all your  GitHub's repositories you wish to browse under this application.
   the projects.yml looks like as follow:
   ````yaml
   projects:
    - repo: repository_1
      user: your_git_hub_user_name
    - repo: repository_1  
      user: your_git_hub_user_name
    .
    .
    .  
   ````
3. Then for with each GitHub repository you wish to add to this viewer you must prepare a file called 'project.list' which is a list of all your file in the repostiry. 
Here is an example of a script generate the such file under JavaScript / TypeScript repository.
````
#!/bin/bash

find . | sed -e 's/^\.\///g' | grep -v node_modules > project.list.all
rm -f project.list

for f in `cat project.list.all`
do
	git ls-files --error-unmatch $f > /dev/null 2>&1
	if [ $? -eq 0 ] 
	then
		if [ -f $f ]; then
			echo $f >> project.list
		fi
	fi 
done

rm -f project.list.all
````
The lines in the project.list should looks like that:
````
tslint.json
angular.json
index.html
src/styles.css
src/tslint.json
src/tsconfig.spec.json
src/browserslist
.
.
.
````
4. Edit the files src/environments/environment.ts and environment.prod.ts and change you GitHub username.
5. See the next section "Development and Building" of how to deploy the application

>All the above is done only once, after the initial setup you can the deployment is pretty much an easy process.

# Development and Building

## Development server
1. Make sure you have Angular and TypeScript installed
2. Run **`npm install`**
  
## For testing in development enviroment
Run **`ng serve`** for a dev server. Navigate to `http://localhost:4200/` and check the application works fine.

## Building and Deploy

Run the following command to cretae `dist/github` directory. 
```bash
npm run build --prod --base-href /angular-github/
```

>Now is the tricky part, the application is using project site [**`GitHub Pages`**](https://pages.github.com/) 
You have to turn it on on GitHub pages under project setting menu.
So the **`master`** branch is include the code the the **`gh-pages`** branch include the pages GitHub pages served to browser.
So all the files from ./dist/github directory need copy, adding and commit into **gh-pages** branch.

* On other terminal clone the project to gh-pages branch - **`git clone -b gh-pages git@github.com:<username>/angular-github.git`**
* Run - ````git rm -rf *```` to remove all files from the gh-pages branch.
* Copy all build files from <master-branch>/dist/github/* directory of the master branch to your gh-pages branch root directory.
* Run - ````git add --all```` to add the build files into you gh-pages branch.
* Commit and push.
* 
* Got to https://<username>.github.io/angular-github/ and Enjoy!.










