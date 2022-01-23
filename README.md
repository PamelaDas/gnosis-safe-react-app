# Gnosis Safe React Application #

## Introduction ##

This repository contains the following two folders:
* **build-1**: The production build of https://github.com/gnosis/safe-react.git repository where static files are served from the "`/app`" folder.
* **build-2**: The production build of https://github.com/gnosis/safe-react.git repository where static files are served directly from the "`/`" root folder.

## Prerequisites ##

* `serve` NPM module ( requires `Node.js`) or `Apache` Web server

## Running Gnosis Safe React Application ##

* Download https://github.com/sreenivas-reddy/gnosis-safe-react-app/archive/refs/heads/main.zip
* Extract the archive at a location of your choice
* `cd gnosis-safe-react-app-main`
* Launching the Gnosis Safe React Appliation using `serve` NPM module:
    * `npm install -g serve`
    * `serve -s build-2`
    * Navigate to http://localhost:3000
```
   ┌────────────────────────────────────────────────────┐
   │                                                    │
   │   Serving!                                         │
   │                                                    │
   │   - Local:            http://localhost:3000        │
   │   - On Your Network:  http://172.30.110.170:3000   │
   │                                                    │
   │   Copied local address to clipboard!               │
   │                                                    │
   └────────────────────────────────────────────────────┘
```
* Launching the Gnosis Safe React Appliation using `Apache` Web server:
    * Copy the contents of `gnosis-safe-react-app-main/build-2` folder to the document root folder of `Apache` Web server and access the application at port `80`

