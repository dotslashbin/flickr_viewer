## Introduction
To whom it may concern, 
 
First of all, thank you for giving me this chance. I enjoyed it. 
 
I would like to apologize for things that are lacking, as I see that there is so much I could do if this was a real project. I did not have the luxury of time in doing this as I was juggling babysitting and other responsibilities to other potential companies.  I simply did what is required, with minimal implementation in the interest of time.
 
I would be very happy to discuss what I could do, if this was a real project and will be open share my experiences with my past and recent projects. 
 
Please do not hesitate to contact me.
 
 
## Flickr Viewer
This is a simple application that simply displays a series of images from Flickr's public API feed. It may also search feeds based using keywords to match image tags. 
 
Please note that this is a non-production grade application. I simply followed what was required, as I did not have the luxury of time to spend on this test. I would estimate the total work was about 4 hours since I've been juggling this with babysitting amongst other responsibilities. 
 
## Points for improvement
As mentioned above, this app is not for production, therefore I only spent minimal time on this. Should this be a real project, here are the things that I will have in place: 
 
Server
- Security layer (authentication or something else) on routes, so that only the Flickr routes will have some restrictions, while the index will contain the routes that should be publicly available.
- Middleware to clean and/or filter inputs
- Defined status codes that will help dev understand what the errors are, on a domain level
- Models to define the data ( if there is a need to store them )
 
Client
- A full web template on material installed
- Components to be defined in a more complex and reusable manner 
- Redux implementation
- Services will be calling dispatches to actions 
- Actions will contain the implementation and responsibility for making API calls
- Redux Saga to listen to such events
 
Overall
- Environment variables to be defined in the docker definitions
- use of .env will be imposed on both client and server
 
## What's inside
- api folder contains a nodejs application as a server to the application
- client folder contains angular (version 7) application that functions as a client
- A simple folder structure is in place for the purpose of separation of concerns
- common/ReturnStatements.js: a class that represents a structure of return object to be returned on each API call. This resides in the common folder, along with future classes that are to be accessible throughout the application. 
- api/routes/flickrRoutes.js: provides the routing definitions for the endpoints. There is an index file in this folder that is to contain any endpoints that are to be readily available to the public.
- services/FlickrService.js: contains the implementation for fetching data from Flickr API feed.
- config/index.js: contains config variables.
 
Server ( NodeJS Application ): 
- Package dependencies: babel, babel-preset, Axios, cors and express
- src/common/URLS.js: contains common variable definitions
- src/app/flikrview: the component that runs the core of the application
- interfaces/ReturnObjects.ts: contains an interface that is readily available throughout the app to use.
 
Client ( AngularJS Application ):
- Basic angular packages with: rxjs and @angular/material
 
## Requirements
- Browser ( preferably Chrome )
- docker
- docker-compose
- Optional: Unix ( mac / linux ) environment
 
## How to run it
1. Make sure that you have no other applications using port 9000 and 4200. (I've configured these ports to be used in this application).
2. clone the repository
3. go to the repository folder
4. run "make"
5. Optional: if you are not in a Unix environment
- run the command "docker-compose up -d --build"
 
## How to end it 
- simply run "make down" or docker-compose down" (if you are not in a Unix environment)
 

