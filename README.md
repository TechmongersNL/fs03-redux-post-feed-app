# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup
- Git clone this repo
- Run `npm install` to install all the dependencies listed in package.json
- Run `npm run start` to start the local development server

## Kyna
This repo follows the The Post Feed project section in the Redux Kyna course, module 3, but with some modified examples matching Tessa's lecture

## Update diagram with thunks
![Thunks diagram](thunks.png)

## Other Redux Intro repo:
https://github.com/TechmongersNL/fs03-redux

## Authentication vs Authorization
Authentication is used to identify some client
- Checking in at the front desk and showing your id

Authorization is used to check if a client has access rights to some resource 
- The keycard that you get that allows you to enter your room but no one else's. You don't have to keep checking in, and it's reprogrammable and there's some expiration date so it's fine if you lose it
- JWT tokens: JSON web token
- JWT token will be passed in to future requests with Authorization header
