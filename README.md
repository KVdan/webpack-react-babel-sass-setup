# webpack-react-babel-sass-setup

 A boliplate for Webpack, React, Sass project.
 
 ## Some npm scripts
 
 ### compile Sass files to CSS files
 
`"sass": "sass src/Sass:src/Css --watch --no-source-map"`

### watch all files within dependency graph for change

`"dev": "webpack --mode=development --watch"`

### webpack-dev-server provides a rudimentary web server and the ability to use live reloading

`"start": "webpack serve --mode=development  --open"`

### create a production build (I need to add webpack.prod.js config file later)

`"build": "webpack --mode=production"`
