# CustomSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

It was designed as an example of how you can use the Cireson Service Manager Portal to build custom functionality, and extend the existing functionality of Service Manager.

This search currently provides an example of how to build a custom search page, in this case targeting searches against the Analyst Action Log Comments.

## Development server

Run `ng build --watch --output-path=../../Inetpub/CiresonPortal/CustomSpace/CustomSearch` using the Angular CLI from the repository source folder to recompile the code and output it into your Portal Custom Space. This will also watch the code while running and recompile anytime changes are made to the source code.

NOTE: The command above assumes the source code / project is in the `c:\Source\CustomSearch` folder on the same server as the Portal installation. You may need to change the output-path command to suit your needs.

## Installation

To install the example, run the SQL script that is in the _install folder against the ServiceManagement database. 

Then copy the views folder from the _install directory into your CustomSpace folders root (it may ask to overwrite the existing folder, but it won't overwrite the files in the folder).

Next, you need to create a navigation node in the Portal to point to the new custom page. You can do this through the Navigation settings page. On the navigation settings page click `New Link` at the top. Enter a Title for your navigation node (we used `Custom Search`), and in the link section put `/View/CustomSearch/#/` and make sure `Open In Same Window` is selected. You may select an icon of your choice (we used `search`). Last, mark the node as visible and either `Public` or provide an Active Directory group that you would like the navigation node to be available to.

Finally, copy the CustomSearch folder from the _install directory to your CustomSpace folders root. This will install the latest compiled version of the code.

If you'd like to install the latest source version of the code you can compile it yourself using the Angular CLI

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
