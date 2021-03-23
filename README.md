## Installation

- Clone the code from repository
- Open folder in terminal
- Run command `npm install` - it will install all dependencies
- `npm install` is a global command-line utility that you use to create new projects.
- Register on https://www.currencyconverterapi.com and paste your KEY in `/src/curApi/app.js` for normal application usage

## Available Scripts

In the project directory, you can run:

- `npm start`
  Runs the app in the development mode.
  Open http://localhost:3000 to view it in the browser.
  The page will reload if you make edits.
  You will also see any lint errors in the console.

- `npm test`
  Launches the test runner in the interactive watch mode.
  See the section about running tests for more information.

- `npm run build`
  Builds the app for production to the build folder.
  It correctly bundles React in production mode and optimizes the build for the best performance.
  The build is minified and the filenames include the hashes.
  Your app is ready to be deployed!
  See the section about deployment for more information.

- `npm run eject`
  Note: this is a one-way operation. Once you eject, you can’t go back!
  If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
  Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
  You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. Howe

## Folder Structure

After creation, your project should look like this:

```
expenses-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    Components/
      Body/
        Buttons/
          AddComponent/
            AddComponent.jsx
            AddComponentContainer.jsx
            AddComponentCWrapper.jsx
          TotalSpent/
            TotalSpent.jsx
            TotalSpentContainer.jsx
        Table/
          SimpleTableContainer.jsx
          Table.jsx
        Body.jsx
        BodyContainer.jsx
        BodyCWrapper.jsx
      Head/
    curApi/
      app.js
    redux/
      expenses-reducer.js
      store.js
    App.js
    App.test.js
    reportWebVitals.js
    setupTests.js
    index.css
    index.js
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.
ver we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
