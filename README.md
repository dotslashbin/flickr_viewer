## Flikr Viewer
This is a simple application that simply displays a series of images from Flickr's public API feed. It may also search feeds based using keywords to match image tags. 

Please note that this is a non-production grade application. I simply followed what was required, as I did not have the luxury of time to spend for this test. I would estimate the total work was about 4 hours, since I've been juggling this with baby sitting amongst other responsibilities. 

## What's inside
- api folder contains a nodejs application as a server to the application
- client folder contains angular (version 7) application that functions as a client

Server ( NodeJS Application ): 
- Package dependencies: babel, babel-preset, axios, cors and express

Client ( AngularJS Application ):
- Basic angular packages with: rxjs and @angular/material

## Requirements
- Browser ( preferrably Chrome )
- docker
- docker-compose
- Optinoal: Unix ( mac / linux ) environment

## How to run it
1. Make sure that you have no other applications using port 9000 and 4200. (I've configured these ports to be used in this application).
2. clone the repository
3. go to the repository folder
4. run "make"
5. OPTINAL: if you are not in a unix environment
- run the command "docker-compose up -d --build"

## How to end it 
- simply run "make down" or docker-compose down" (if you are not in a unix environment)
