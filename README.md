# Getting Started - Zoho React Widget

## How to install this project in Windows

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

### `npm build`

**Note: To make sure this works properly don't delete any of the files in root**

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for Zoho.

**Note: In the 'dist' folder you will find the .zip file that you can upload to your CRM!**


## How to install the widget in your CRM

To install the widget in your app you have to open your Settings and go to:

Widgets>New Widget

If you want to access to the widget from a button, you must select that option and then host your code in Zoho and upload the .zip file you'll find in the 'dist' folder. Then, in the route field complete with '/index.html'

To associate the widget to a button, you should go to ' Settings>Customization>Modules and Fields ' and select the module where you want to install the widget.

In that module, choose 'Links and buttons' and create a New Button.

Select the option 'LIST VIEW UTILITIES MENU' and Create from the widget we install before.
