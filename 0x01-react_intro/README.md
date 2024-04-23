# 0x01. React Intro

## Description
This project covers a series of tasks building a React application, using create-react-app, and later configuring Webpack, Babel, and setting up testing with Jest and Enzyme.

#### Requirements:
- Your `package.json` should have the two following scripts:
    ```json
    "start": "webpack-dev-server --mode development --config config/webpack.config.js",
    "test": "jest"
    ```
- Running the first script should start your dev server and build without any error.
- Running the second script should start your test suites and pass for each test.
- A `README.md` file, at the root of the folder of the project, is mandatory.
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All your files should end with a new line.

## Tasks

### 0. Basic Application
#### Repo:
- **File:**
  - task_0/dashboard/src/
  - task_0/dashboard/src/App.css
  - task_0/dashboard/src/App.js

#### Steps:
1. Create a basic app named dashboard using create-react-app in your task_0 directory.
2. Add favicon and Holberton logo to the `src/` directory under `dashboard/`.
    - [Holberton Logo](https://assets.holbertonschool.com/holberton-logo-light-1.png)
    - [Favicon](https://assets.holbertonschool.com/favicon.ico)
3. Remove the unused files:
    - service-worker
    - index.css
    - App.test.js
4. Modify `App.js`:
    - Create a function `App` that returns:
        - a header `div` with a class named `App-header` containing the Holberton logo and a `h1` with the text "School dashboard".
        - a body `div` with a class named `App-body` containing at least one paragraph with the text "Login to access the full dashboard".
        - a footer `div` with a class named `App-footer` containing at least one paragraph with the text "Copyright 2020 - Holberton School".
5. Modify `App.css` to match the screenshot provided.

### 1. Basic Application
#### Repo:
- **File:**
  - task_0/dashboards/src/
  - task_0/dashboard/src/App.css
  - task_0/dashboard/src/App.js

### 2. Embedding Expressions, Functions
#### Repo:
- **File:**
  - task_1/dashboard/src/
  - task_1/dashboard/src/utils.js
  - task_1/dashboard/src/App.js
  - task_1/dashboard/src/Notifications.css
  - task_1/dashboard/src/Notifications.js
  - task_1/dashboard/src/index.js

#### Steps:
1. Using the code from the previous task:
2. In `task_1/dashboard/src/utils.js`:
    - Create a function named `getFullYear` that returns the current year.
    - Create a function named `getFooterCopy`:
        - It accepts one argument, `isIndex` (boolean).
        - When true, the function should return "Holberton School".
        - When false, the function should return "Holberton School main dashboard".
3. Modify the footer returned in `task_1/dashboard/src/App.js` to use these two functions.
4. In `task_1/dashboard/src/Notifications.js`:
    - Create a `Notifications` element:
        - Import React.
        - Export a function.
        - The function should return a `div` with the class `Notifications`.
        - The `div` should contain a `paragraph` with the text "Here is the list of notifications".
    - Import the file `Notifications.css`.
5. In `task_1/dashboard/src/Notifications.css`:
    - Style the `Notifications` class:
        - Add a border and some padding around the div.
6. Render the `Notifications` element:
    - Modify `task_1/dashboard/src/index.js` to render the new element (`Notifications`) in a `div` named `root-notifications`.

### 3. Modify the App
#### Repo:
- **File:** task_2/dashboard/src/App.js

#### Steps:
1. Using your code from the previous task, in `task_2/dashboard/src/App.js`:
    - Under the paragraph that says "Login to access the full dashboard":
        - Add a label and input for email.
        - Add a label and input for password.
        - When the user clicks on a label, it should select the corresponding input.
        - Add one button element with the text "OK".

### 4. Modify the Notifications
#### Repo:
- **File:**
  - task_2/dashboard/src/utils.js
  - task_2/dashboard/src/Notifications.js
  - task_2/dashboard/src/Notifications.css

#### Steps:
1. In `task_2/dashboard/src/utils.js`:
    - Create a function named `getLatestNotification` that returns the following string: `<strong>Urgent requirement</strong> - complete by EOD`.
2. In `task_2/dashboard/src/Notifications.js`:
    - In the `Notifications` div:
        - Add a button element with inline styling (without using the CSS file):
            - Show button on the right side of the notifications box.
            - Aria-label is "Close".
            - When the user clicks on the button, it logs to the console "Close button has been clicked".
            - In the button element, add a children img element that will import the `close-icon.png` image.
        - After the paragraph, add an unordered list:
            - The first one has a default priority and says "New course available".
            - The second one has an urgent priority and says "New resume available".
            - Add the priority to the first and second items of the list using a data attribute.
            - The last item correctly displays the content of `getLatestNotification` using dangerouslySetInnerHTML.
3. In `task_2/dashboard/src/Notifications.css`:
    - Style the notification priorities using their data attribute: set the color of default items to blue, and the color of urgent items to red.

### 5. Create basic tests with four tests
#### Repo:
- **File:** task_3/dashboard/src/utils.test.js

#### Steps:
1. In `task_3/dashboard/src/utils.test.js`:
    - Write a test to check that the function `getFullYear` returns the correct year.
    - Write a test to check that `getFooterCopy` returns the correct string when the argument is true or false.
    - Write a test checking the returned string for `getLatestNotification`.

### 6. Install Enzyme
#### Repo:
- **File:** task_3/dashboard/src/setupTests.js

#### Steps:
1. Install Enzyme with npm.
2. Create a file named `setupTests.js` and configure the adapter for Enzyme.

### 7. Create React tests
#### Repo:
- **File:**
  - task_3/dashboard/src/App.test.js
  - task_3/dashboard/src/Notifications.test.js

#### Steps:
1. In `task_3/dashboard/src/App.test.js`, create four tests:
    - Test that `App` renders without crashing.
    - Verify that `App` renders a `div` with the class `App-header`.
    - Verify that `App` renders a `div` with the class `App-body`.
    - Verify that `App` renders a `div` with the class `App-footer`.
2. In `task_3/dashboard/src/Notifications.test.js`, create three tests:
    - Test that `Notifications` renders without crashing.
    - Verify that `Notifications` renders three list items.
    - Verify that `Notifications` renders the text "Here is the list of notifications".

### 8. Deploy to a GitHub page
#### Repo:
- **File:** task_4/

### 9. Create a project using Webpack
#### Repo:
- **File:**
  - task_5/dashboard/config/webpack.config.js
  - task_5/dashboard/dist/index.html
  - task_5/dashboard/src/index.js

#### Steps:
1. Without reusing create-react-app or the code from the previous exercise, start a brand new npm project.
2. Reusing what you learned during the Webpack module:
    - Set up a system to output a `bundle.js` file in a `dist` folder.
    - Set up a dev server with hot reloading.
    - Create a `src` folder that will contain your Javascript.
    - Set up a simple html file in the `dist` folder that will import the bundle file in the body tag.
    - Install and configure the various plugins to support:
        - Inline source map.
        - Style loader.
        - CSS loader.
        - Image webpack loader.

### 10. Install Babel
#### Repo:
- **File:**
  - task_5/dashboard/.babelrc
  - task_5/dashboard/config/webpack.config.js

#### Steps:
1. Install Babel, and in `task_5/dashboard/.babelrc`, add the presets for `preset-env` and `preset-react`.
2. Add a `babel-loader` to the Webpack configuration so you can support `js` and `jsx` files.
3. Import the files that you wrote in the previous task. All the Javascript and React code should be within the `src` folder.
4. At this point, running `webpack-dev-server` should correctly execute your code, and you should be able to see the dashboard like in the last task.

### 11. Reorganize the files
#### Repo:
- **GitHub repository:** alx-react
- **Directory:** 0x01-react_intro
- **File:**
  - task_5/dashboard/src/App/App.css
  - task_5/dashboard/src/App/App.js
  - task_5/dashboard/src/App/App.test.js
  - task_5/dashboard/src/Notifications/Notifications.css
  - task_5/dashboard/src/Notifications/Notifications.js
  - task_5/dashboard/src/Notifications/Notifications.test.js
  - task_5/dashboard/src/utils/utils.js
  - task_5/dashboard/src/utils/utils.test.js
  - task_5/dashboard/config/webpack.config.js
  - task_5/dashboard/src/assets/holberton-logo.jpg
  - task_5/dashboard/dist/favicon.ico

#### Steps:
1. Let’s reorganize the files in our project:
    - Every file related to the App, should be within an `App` folder.
    - Every file related to the Notifications, should be within a `Notifications` folder.
    - Every file related to the utils functions, should be within a `utils` folder.
    - Every asset file should be within the `assets` folder.
    - Webpack config file should be within a `config` folder if it isn’t already.
    - Set up the `favicon.ico` in the `dist` folder.

### 12. Testing
#### Repo:
- **File:**
  - task_5/dashboard/config/setupTests.js
  - task_5/dashboard/package.json

#### Steps:
1. Install Jest and Enzyme to run your test suites.
2. Move the `setupTests.js` file to `config` folder if you have not already.
