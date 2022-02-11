# Quasar App (TodoApp)

A Quasar Framework app

### Windows OS Software installation

- Install Git bash – installation steps can be found  [here](https://phoenixnap.com/kb/how-to-install-git-windows)

- Install nodeJs – installation process can be found [here](https://www.guru99.com/download-install-node-js.html)

- Install an IDE (VS Code in our case) - installation steps can be found [here](https://code.visualstudio.com/docs/setup/windows)


### Linux OS Software installation

   - Install Git – installation steps can be found [here](https://www.atlassian.com/git/tutorials/install-git#linux)

   - Install nodeJs – installation process can be found [here](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)

   - Install an IDE (VS Code in our case) - installation steps can be found [here](https://code.visualstudio.com/docs/setup/linux)


### Installation of Quasar framework    

- launch the IDE

- Open your preferred terminal application
    - For Windows, you can use git bash

- Change directory to where you want your computer you want have the project saved. 

    - For instance, if you want your work to be on your desktop, type: `cd Desktop/`

- Create a folder on your desktop: `mkdir <folderName>`

- Change directory to the folder: `cd <folderName>/`

- Install npm (Node Package Manager) by typing `npm install` to have all the node modules installed

- Install Quasar by typing:  `npm install @quasar/cli`. If you want quasar to be installed globally add -g before the @quasar/cli; `npm install -g @quasar/cli`

- Create a quasar project by typing `quasar create <projectName>`

- After quasar framework, give the right answers to the prompts that shows up.


### Starting the app in developement mode
### Change directory to the quasar project you created: `cd <projectName>`
- Web: `npx quasar dev` to run the application in your browser
- Mac Os: `npx quasar dev -m electron` to create the Mac version of the App.
- Windows OS: `npx quasar build electron` to create the windows execution file of  the app
- Android | IOS: steps can be found [here](https://quasar.dev/quasar-cli/developing-cordova-apps/preparation)


### Function Requirements of TodoApp
#### REQ-001:  
- `REQ-001.1` - Users should be able to create an account with the right format.
        
- `REQ-001.2` - Users should be able to create an account through their social handles and email; Facebook & Twitter 

- `REQ-001.3` - Users should be able to log in with their correct credentials

- `REQ-001.4` - Users should be able to login in through the social media account used in signing up as well as email

- `REQ-001.5` - Users should be able to edit their profile

### REQ-002:
- `REQ-002.1` – Users must be able to create/add tasks.

- `REQ-002.2` – Users must be able to mark tasks as complete, incomplete and in progress

- `REQ-002.3` - Users must be able to sort tasks

- `REQ-002.4` – Users must be able to edit task

- `REQ-002.5` – Users must be able to delete a single task

- `REQ-002.6` – Users must be able to delete multiple tasks

- `REQ-002.7` – Users must be to pick a date (start date and required end date of task)
    
### REQ-003:
- `REQ-003.1` - All tasks created should be stored and be made accessible to users
- `REQ-003.2` - All CRUD actions performed by users should match the details stored

### REQ-004
- `REQ-004.1` – Users should be able to see the total number of tasks completed

- `REQ-004.2` – Users should be able to see the total number of tasks not completed

- `REQ-004.3` – Users should be able to see the total number of tasks still in progress

- `REQ-004.4` – Users should be able to see a chart indicating tasks that are complete, incomplete and still in progress



### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).





