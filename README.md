## Flikr Viewer
This is a simple application that simply displays a series of images from Flickr's public API feed. It may also search feeds based using keywords to match image tags. 

Please note that this is a non-production grade application. I simply followed what was required, as I did not have the luxury of time to spend for this test. I would estimate the total work was about 4 hours, since I've been juggling this with baby sitting amongst other responsibilities. 

## Points for improvement
As mentioned above, this is app is not for production, therefore I only spent minimal time on this. Should this be a real project, here are the things that I will have in place: 

Server
- Security layer (authenticatoin ro something else) on routes, so that only the flickr routes will have some restrictions, while the index will contain the routes that should be publicly available.
- Middleware to clean and/or filter inputs
- Defined status codes that will help dev understand what the errors are, on a domain level
- Models to define the data ( if there is a need to store them )

Client
- A full web template on material installed
- Components to be defined in a more complex and reusable manner 
- Redux implementation
- Services will be calling dispatches to actions 
- Actions will contain the implementatoin and responsibility for making API calls
- Redux Saga to listen to such events

Overall
- Environment variables to be defined in the docker definitions
- use of .env will be imposed on both client and server

## What's inside
- api folder contains a nodejs application as a server to the application
- client folder contains angular (version 7) application that functions as a client
- A simple folder structure is in place for the purpose of separation of concerns
- common/ReturnStatements.js: a class that represents a strcuture of return object to be returned on each API call. This resides in the common folder, along with future classess that are to be accessible throughout the applicatoin. 
- api/routes/flickrRoutes.js: provides the routing defintions for the endpoints. There is an index file in thsi folder that is to contain any endponit that is to be readily available to the public.
- services/FlickrService.js: contains the implementation for fetching data from flickr API feed.
- config/index.js: contains config variables.

Server ( NodeJS Application ): 
- Package dependencies: babel, babel-preset, axios, cors and express
- src/common/URLS.js: contains common variable definitions
- src/app/flikrview: the component that runs the core of the applicatoin
- interfaces/ReturnObjects.ts: contains an interface that is readily availble througout the app to use.

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
