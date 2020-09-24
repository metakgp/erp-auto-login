# Thank You

We are grateful that you considered contributing to ERP-auto-login. Please follow the below guidelines for contribution.

Follow the golder rule:

> Code, Document, Raise Issues and Review like you have to explain everything to a new developer without saying a word.

## First Time

The first thing to do always is to install the extension and note how it works. One of the best ways to do this is to launch the application and go through the files that it launches sequentially.

NOTE - For testing the development version, it is recommended to disable the original extension as it might cause confusion and log into the ERP even when development version might not be working properly.

Also take a note of the coding style and dependencies that the project follows.

A helpful resource for this project is https://developer.chrome.com/extensions/faq

## Choosing issues

It is recommended to go through the issue tabs once you run the program and look for the easy issues.

If an issue is not assigned; follow through the comments, ask queries about it and then start working on it.

## Creating issues

If you face any reproducable problem while launching the game or any feature you think should be there, file an issue in the github repository.

It is expected that you will follow the below guidelines while creating issues:

https://wiredcraft.com/blog/how-we-write-our-github-issues [*[archive]*](http://archive.is/24BSK)

## Sending a PR

While sending a PR, always remember not to send one from your master branch; it'll lead to commit issues and mismatch. 

It is highly recommended to follow the below guidelines while writing commits and sending PRs:

- https://blog.github.com/2015-01-21-how-to-write-the-perfect-pull-request/ [*[archive]*](http://archive.is/BbIbh)
- https://code.likeagirl.io/useful-tips-for-writing-better-git-commit-messages-808770609503 [*[archive]*](http://archive.is/W1h2O)

## Submitting In Firefox Addon and Chrome Extension Store

- Chrome extension is submitted by @athityakumar from his personal account.
- Firefox addon is submitted using Metakgp official Mozilla Developer account by creating an `.xpi` file.

### How to make Firefox Addon Package (.xpi) file

A xpi file is simply a zip file. The following steps show how to make the extension into a .xpi file: 

1. Open a terminal **inside** the the folder *erp-auto-login* (after cloning it). 

2. Enter this command to compress the files into a .zip file, while excluding the unnecessary files -
   
   `zip -r  erp-auto-login_ff.zip * -x "*.git*" "instruction_images/*"`

3. Now enter the following command to rename the .zip file to a .xpi file -

    `mv erp-auto-login_ff.zip erp-auto-login_ff.xpi`

4.  You have successfully packed the extension into a xpi file :)

## Communication

Please join the [gitter channel](https://gitter.im/erp-auto-login/Lobby) for communication regarding the project.
