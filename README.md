<p align="center"><img src="https://i.imgur.com/kxYsRSa.png" width="400"></p>

# Getting Started - Zoho React Widget

## New features! Clone this repository from the template

Now you can create new repositories based on this project by clicking on the "Use this template" button at the top of this repository page or by [clicking here.](https://github.com/DaianaArena/react-zoho-widget-boilerplate/generate)

### How to clone this repository from the template:

1. Give your new repository a name and description.
2. Choose the owner for the new repository.
3. Click "Create repository from template".

### Once you have created your new repository from the template, you can clone it to your local machine using the following steps:

1. Copy the URL of your new repository.
2. Open your terminal or Git Bash.
3. Navigate to the directory where you want to clone the repository.
4. Run the following command: git clone <repository-url> (replace <repository-url> with the URL you copied in step 1).
5. Press enter and the repository will be cloned to your local machine.

**_That's it! You now have a local copy of the repository and can start working on it._**

## How to install this project in Windows from scratch

To install the project on your Windows computer, download the .zip file from the repository, unzip it and open it in your code editor.

Then, in root run this command:

```
npm install
```


## How to run the app in the development mode.

Run this command:

```
npm start
```

It will open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.


## How to create a package file to upload on Zoho CRM

```
npm run build
```

**Note: To make sure this works properly don't delete any of the files in root**

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for Zoho.

**Note: In the 'dist' folder you will find the .zip file that you can upload to your CRM!**

## How to test the widget in your CRM

To test the widget in your CRM you have to open your Settings and go to:

`Widgets>New Widget` Then you select the external host and paste your localhost server (you can get it from the npm start command)

## How to install the widget in your CRM

To install the widget in your app you have to open your Settings and go to:

`Widgets>New Widget`

If you want to access to the widget from a button, you must select that option and then host your code in Zoho and upload the .zip file you'll find in the 'dist' folder. Then, in the route field complete with `'/index.html'`

To associate the widget to a button, you should go to `Settings>Customization>Modules and Fields` and select the module where you want to install the widget.

In that module, choose `Links and buttons` and create a New Button.

Select the option 'LIST VIEW UTILITIES MENU' and Create from the widget we install before.


## FAQs
### Installing zoho CLI (zet pack)
https://www.zoho.com/es-xl/crm/developer/docs/widgets/install-cli.html#Related_Topics

### How to use zet pack with react
You cannot use the 'zet pack' command to pack the React project directly. Kindly follow the below step by step guide to achieve this,

1. Add the following line (with double quotes) just inside first curly bracket of package.json file,  in the react project folder.
    "homepage": "./",
2. Run the command ' npm run build ' to get the build folder in react project.
3. Copy all the files and folder in the build folder thus created with the above command.
4. Create new widget project using the command ' zet init '
5. Go to the app folder in the widget project, delete widget.html file in the folder and paste everything copied before.
6. Now zip the widget project using ' zet pack '
7. Use the zip file in the dist folder to host internally.

For more information and demo video use the below given github link.
Github link : github link
