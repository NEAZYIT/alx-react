# 0x07. React Redux action creator+normalizr

## Description
This project focuses on implementing React Redux action creators and normalizing nested JSON data.

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- Files interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
- A `README.md` file at the root of the project folder
- Push all files including `package.json` and `.babelrc`
- All functions must be exported

## Provided Files
- `notifications.json`
- `login-success.json`

## Tasks

### 0. Read data from a JSON
- Reuse the latest dashboard project from React course 0x06-React_state
- Place `notifications.json` into the root directory of the project
- Create `notifications.js` file in a `schema` folder
  - Import JSON data from `notifications.json`
  - Create function `getAllNotificationsByUser(userId)` to return a list of context objects based on userId
- Create `notifications.test.js` file in `schema` directory
  - Add a test for the `getAllNotificationsByUser` function
  
### 1. Normalize a nested JSON
- Copy dashboard from the previous task into a `task_1` directory
- Modify `notifications.js` to set up a schema using Normalizr
- Create tests to verify normalized data

### 2. Filter a normalized Schema
- Modify `getAllNotificationsByUser` to use normalized data
- Only one loop should be used
- No modification in the test, all tests should pass

### 3. Create actions for the course list
- Copy `dashboard` from `task_2` to `task_3` directory
- Create action types: `SELECT_COURSE` and `UNSELECT_COURSE`
- Create action creators for the types
- Write tests for action creators

### 4. Create actions for the UI
- Copy `dashboard` from `task_3` to `task_4` directory
- Create action types: `LOGIN`, `LOGOUT`, `DISPLAY_NOTIFICATION_DRAWER`, `HIDE_NOTIFICATION_DRAWER`
- Create action creators for the types
- Write tests for action creators

### 5. Create actions for the notification list
- Copy `dashboard` from `task_4` to `task_5` directory
- Create action types: `MARK_AS_READ`, `SET_TYPE_FILTER`
- Create action creators for the types
- Write tests for action creators

### 6. Bound the actions
- Modify course, notification, and UI actions creators to be bound

### 7. Async Action Creators
- Set up Redux and Redux Thunk
- Simulate API
- Create async action creators for login
- Write tests for async action creators

## Resources
- Read or watch:
  - [Normalizr](https://github.com/paularmstrong/normalizr)
  - [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/)
  - [Redux Getting started and core concepts](https://redux.js.org/introduction/getting-started)
  - [Redux Actions](https://redux.js.org/basics/actions)
  - [Async Actions](https://redux.js.org/advanced/async-actions)
  - [Writing tests for Redux](https://redux.js.org/recipes/writing-tests/)
  
## Learning Objectives
By the end of this project, you should be able to explain:
- Normalizr’s purpose and how to use it
- Schemas and normalization of nested JSON
- Core concepts of Redux
- Redux actions
- Redux action creators
- Async actions in Redux
- How to write tests for Redux

## Author
[NEAZYIT](https://github.com/NEAZYIT)