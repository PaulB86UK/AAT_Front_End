Checkpoints:
* 27/02/2022: Installed npx and yarn:
--> npm install --g yarn (yarn as global)
Then created a react app using the following command:
npx create-react-app front_end --template typescript
Next Step is to do cd frontend after the folder is created and then run yarn in the terminal which will install all necesary packages. 
Then install usedapp: yarn add @usedapp/core this help allow not to reinvent the wheel
Need to deploy the main project to kovan

Definitions
tsx its typescript extension
yarn.lock is automatic created/ 
-App.test.tsx to test the front-end
-App.tsx place to write code
-yarn start launchs the website

export const Header = () => {
    
}
This means Header is a function = () and => {} what the function is going to do


*28/02/22

Add the Dap Provider Part to the App.tsx file and do the modifications listed in the video, add dap provider etc.
-add the material ui library with yarn add @material-ui/core , also can do npm install @material-ui/core

const networkName = chainId ? helperConfig[chainId] : "dev" This means that if the chainID exists use helperConfig[chainId] otherwise use "dev"

-->yarn add ethers command


Pending Steps

-Change the Manifest learn how
-Also check the robots.txt
