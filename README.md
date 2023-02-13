# React Functional

### Create react app
1. npm create vite@latest my-react-app -- --template react
2. npm install
3. npm run dev

### Install SCSS
1. npm add -D sass

### Setup Folder Structure
```
web-frontend
	src
		_actions
		_reducers
		assets
		views
			admin
			global
			layouts
				admin.layout.jsx
				user.layout.jsx
			user
		
		index.scss
		main.jsx
```
PS: in index.html root file change the path in script type module to /web-frontend/src/main.jsx.


### Install REDUX-TOOLKIT
[REDUX TOOLKIT LINK](https://redux-toolkit.js.org/tutorials/quick-start)
1. npm install @reduxjs/toolkit react-redux
2. Create a store.ts file in root of src folder
3. import the store and provider in main.js
4. Setup the provider to render in ReactDOM

### Install REACT ROUTER
[REDUX TOOLKIT LINK](https://reactrouter.com/en/main/start/overview)
1. npm install react-router-dom
2. import routes, router and BrowserRouter in react douter dom.
3. Setup the layout routes.
