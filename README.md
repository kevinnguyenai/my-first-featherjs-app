# my-first-featherjs-app

> this is my first featherjs app

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/my-first-featherjs-app; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## TESTING
 [1. Authentication](#1._Authentication)

 [2. Massage Service](#2._Massage_Service)

### 1. Authentication
 - Create New User
 ```
 curl -X POST 'http://localhost:3000/users' -H 'Content-Type: application/json' --data-binary '{ "email": "kevin.nguyen.eng@gmail.com", "password": "123456789"}'
 ```
 you will see result somthing like this
 ```
 {"_id":"5d240d024f43a84c264ec699","email":"kevin.nguyen.eng@gmail.com","createdAt":"2019-07-09T03:41:54.867Z","updatedAt":"2019-07-09T03:41:54.867Z","__v":0}
 ```
 - Authentication New Created User
 ```
 curl 'http://localhost:3000/authentication/' -H 'Content-Type: application/json' --data-binary '{ "strategy": "local", "email": "kevin.nguyen.eng@gmail.com", "password": "123456789" }'
 ```
 you will get a token as below
 ```
 {"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZDI0MGQwMjRmNDNhODRjMjY0ZWM2OTkiLCJpYXQiOjE1NjI2NDM4MDYsImV4cCI6MTU2MjczMDIwNiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiMzU2NjFkNGUtN2IwMS00MWNjLTk3NTktYWI3NmYyNzM1MTRjIn0.fg3rHwiT_xUTtiQsSQvJdIgXv9vdIoMuqg7YEjOhztE"}
 ```
 - Create new messages by authenticated hook 
 ```
 curl 'http://localhost:3000/messages/' -H 'Content-Type: application/json' -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZDI0MGJjZjRmNDNhODRjMjY0ZWM2OTgiLCJpYXQiOjE1NjI2NjQwNDcsImV4cCI6MTU2Mjc1MDQ0NywiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiMThlYThjNmEtOWFlYS00NTVkLThhYzUtZTM1M2UzY2U0NGEzIn0.7bhlL8WiDZ4FGBcQaL-_EmFbD6SM5_oyQRWJBbYZgno'  --data-binary '{ "text": "this is my first messages system"}'
 ```
 you will get a following result like this if ok
 ```
 {"_id":"5d245c9b2265fe726ab3ed6b","text":"this is my first messages system","createdAt":"2019-07-09T09:21:31.502Z","updatedAt":"2019-07-09T09:21:31.502Z","__v":0}
 ```
### 2. Message Service


## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
