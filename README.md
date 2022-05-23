# U Pack
A package for all your needs across the projects.

<br>

## Installation
This part needs to be completed.

<br>

## How to use
Simply add `u-pack` inside the project's `package.json` file like so:

```json
{
  "dependencies": {
    "u-pack": "https://github.com/hesan-aminiloo/brok"
  }
}
```
then run `npm install` or `yarn` to install the package.

After installation to use this package import it like so:
```js
// Import whatever module you need
import { auth, components, utils } from 'u-pack';

// Use it
auth.loginWithUsernameAndPassword(user, pass);
```

<br>

## Features
  - [ ] Error Wrapper
  - [ ] Logger
  - [ ] Event tracker
  - [ ] Call to server
  - [ ] Cache layer
  - [ ] Auth
  - [ ] Shared components

<br>

## U Auth
This will be the auth module to handle all the auth stuff. Including the login, register, forgot password, etc. In the form of several API calls.

<br>

## U Cache
This is a potential solution for caching data on the client side. It is not a full solution, but we can use it as a starting point. So implementin this would a good idea.

<br>

## U Tracker
This is an event tracker for the application. It is used to track the events and the user interactions with the application.

<br>

### Todos
  - [ ] 🚚 Git remote
  - [ ] 📄 Installation Documentation (README.md)
  - [ ] 💻 Implement
  - [ ] 📦 Change the package git address