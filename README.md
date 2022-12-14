# nodejs

install node.js on your system
- https://nodejs.org/en/
- api documentation - https://nodejs.org/dist/latest-v18.x/docs/api/

once installed check the setup by running below command
 - node -v

npm - node package manager
- https://www.npmjs.com/package/package
- an online repository for the publishing of open-source Node. js projects
- a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management

check version of npm by running below command
 - npm -v

initialize npm from the root of the project by running below command
 - npm init - this will create a configuration file which we can use to manage all the dependencies from the npm

to install npm package run below command
 - npm install package-name OR npm i package-name - this installs latest version of the package
 - npm install package-name@package-version - to install package with a specific version
 - npm install package-name@package-version -g - installs the module globally

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

# Getting input from users
  when we run the below command 
  - node app.js sometext
  here 'sometext' can be fetched in code by using process.args
  process - is a global object that can be accessed inside any module without requiring it
  argv - argument vector - is an array that contains all the arguments provided

  - node app.js sometext1 sometext2
  both sometext1 and sometext2 will be accessible in array argv

  - example : running the below command -
    node app.js add --title="This is my title"
  returns the below output -
    [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\tyache01\\Downloads\\git\\nodejs\\notes-app\\app.js',
    'add',
    '--title=This is my title'
    ]

  - nodejs doesn't provide any argument parsing. It only allows us to access just the raw arguments.

  - yargs - npm package - parses the raw arguments so that they can be easily accesed.
