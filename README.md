# Gnosis Safe React Application #

## Intruduction ##

This repository contains the following two folders:
* **build-1**: The production build of https://github.com/gnosis/safe-react.git repository where static files are served from the "`/app`" folder.
* **build-2**: The production build of https://github.com/gnosis/safe-react.git repository where static files are served directly from the "`/`" root folder.

## Prerequisutes ##

* `Node v14.17.0` or later
* `serve` NPM module

## Running Gnosis Safe React Application ##

* Download https://github.com/sreenivas-reddy/gnosis-safe-react-app/archive/refs/heads/main.zip
* Extract the archive at a location of your choice
* `cd gnosis-safe-react-app-main`
* `npm install -g serve`
* `serve -s build-2`
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
* Navigate to http://localhost:3000