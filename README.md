# [Sample plug-in: Table Row Count Plug-in]
## Purpose of the Sample Plug-in
This sample plug-in is available for educational purposes.  
Use this plug-in to understand how Kintone plug-ins work, and how they are structured.
A non-packaged version written with a single JavaScript file can be found here https://developer.kintone.io/hc/en-us/articles/115003487808

## What the plug-in does
This plug-in counts the number of rows you have in a Table, and places that number in a specified Number field when you save your record.
When a user adds rows to a Table in a record, the number of rows is totaled and entered into a Number field.
The plug-in settings page allows the user to choose which Table and Number field will be used.

## Plug-in directory structure
This sample plug-in is created with the following directory structure.

src/  
├── html/  
│        └──── config.html  
├── css/  
│        ├──── 51-modern-default.css  
│        └──── config.css  
├── js/  
│        ├──── config.js  
│        ├──── desktop.js 

│        └──── kintone-config-helper.js 

├── image/  
│        └──── tower.png  
└── manifest.json  

## How to use
To simply test out the plug-in on your Kintone domain, follow these steps:

1. Download the plug-in zip file  
Reference: https://github.com/kintone/SAMPLE-Table-row-count-plug-in/releases
2. Install the plug-in into your domain  
Reference: https://get.kintone.help/hc/en-us/articles/115001519707-Installing-Viewing-Plug-ins
3. Add the plug-in to a specific Kintone App  
Reference: https://get.kintone.help/hc/en-us/articles/115001511188-Adding-Plug-ins-to-an-App
4. Make sure that a Table and a Number field are placed in the form of your Kintone App. Access the plug-in settings, and enter in the neccessary settings. Save the settings, and update the App.
5. Click the + button on the Record List page to start adding a new record. Enter in as many rows as you would like into the Table and save the record. The Number field will display the number of rows in the Table.

## How to modify
1. Fork to your repo
2. Make changes to files under /src
3. Repackage the plug-in by:  
 i. Zipping the manifest.json file, css directory, html directory, image directory and js directory into one zip file.  
 ii. Drag and dropping the file into the [kintone plug-in packer](https://kintone.github.io/plugin-packer/).

## Pull Request Policy
As this repo exists for educational purposes, we will most likely turn down pull requests that contain updates with new features.  
Please feel free to host plug-ins with new features on your own repository.  
Bug fixes are happily accepted.

## More information
More detailed information on the plug-in can be found here https://developer.kintone.io/hc/en-us/articles/360010196073
