## 🎥 Preview site :arrow_right: [clickHere](https://szymonrojek.github.io/react-excercises/#/)

## I have used:

- React Router v6
- context
- Higher Order Component (HOC)
- custom hooks
- local storage

## Project description:

This is a responsive nav bar application written in React.js - you can log in to the app by typing a special phrase "amigos". If the phrase is correct the navigation bar will appear so you can switch between pages.

I have used the Higher-Order-Component to display some data for the user. It is a function that takes a component and returns a new component. The component transforms props into UI, and a higher-order component converts a component into another component.

Also, I have decided to use a React Context API - it helps to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.

At the end, I have added a few custom hooks in the app, which allowed me to separate the logic from view.

## Available Scripts:

**1.** Install packages in the directory:

```
npm install
```

**2.** To start development and server

```
npm start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

**3.** Build version

```
npm run build
```

Builds the app for production to thpm se build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

**4.** Gh-pages deploy

```
npm run deploy
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
