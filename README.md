# nodejs
just for practice

install node.js on your system
- https://nodejs.org/en/
- api documentation - https://nodejs.org/dist/latest-v18.x/docs/api/

once installed check the setup by running below command
 - node -v

npm - node package manager
- https://www.npmjs.com/package/package
- an online repository for the publishing of open-source Node. js projects; second
- a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management

check version of npm(node package manager) by running below command
 - npm -v
initialize npm from the root of the project by running below command
 - npm init - this will create a configuration file which we can use to manage all the dependencies from the npm
to install npm package run below command
 - npm install <package-name> OR npm i <package-name> - this installs latest version of the package
 - npm install <package-name>@<package-version> - to install package with a specific version
 - npm install <package-name>@<package-version> -g - installs the module globally

node_modules 
- folder that contains code for all the dependencies we install
- shouldn't be edit manually
- gets updated eveytime we install any package
- npm maintains this derectory
- can be recreated based on the contents of package.json and package-lock.json

package.json 
- it records important metadata about the node project which is required before publishing to npm
- defines functional attributes of a project that npm uses to install dependencies
- run scripts
- identify the entry point to our package. 

package-lock.json 
- this file contains extra information making npm faster and secure. 
- It lists out exact versions of all our dependencies as well as where they were fetched from
- maintained by npm

nodemon
- npm package that restarts the node application whenever it observes the changes in the file present in the working directory of your project.

