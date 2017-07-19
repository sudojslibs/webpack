# Webpack

## What is Webpack?
**Webpack** is a ***module bundler*** for modern JavaScript applications.

<img align="center" src="http://i.imgur.com/GxQpArh.png" alt="Webpack">

&nbsp;

Webpack basically (at the time of processing your application), 
**bundles all your modules** (which are individual functionalities) 
into a **small number** of modules - ***often*** only 1 - which then is loaded
by the browser.

It is highly configurable, but to get started we only need to 
understand the 4 basic concepts of it: 
1. ***entry***
2. ***output***
3. ***loader***
4. ***plugins***


###### Note: All the configuration settings for webpack are stored in a separate file called ***webpack.config.js***.

So, let us **create a new file: webpack.config.js**

&nbsp;
## Entry

Entry is basically the **first file** from which the webpack
**starts its processing**. It is also called as the ***entry*** point
or ***root*** of your app (for webpack).

The simplest example is seen below:

***webpack.config.js***

    module.exports = {
      entry: './path/to/my/entry/file.js'
    };

Now, let us create the directory-structure for our project. 
1. ***src***: contains all the **dynamic js files**.
2. ***static***: contains the **static assets**. For instance: index.html
  and bundle.js. The browser will **only load the static files**.

&nbsp;
## Output

Once all your files are bundled up, you need to tell webpack 
where to **store the bundled file**. This is done via ***output***. 

***webpack.config.js***

    const path = require('path');
    
    module.exports = {
      entry: './src/js/app.js',
      output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'bundle.js'
      }
    };

To use **path** node module, we need to install it first.
 
    npm init -y
    npm i --save path
    
The 1st line will **create a package.json** file with default settings (-y flag).      
The 2nd line will **install the path node module** locally in the project.

Now, we will **create** another js file and make the 1st 
file **dependent** on the 2nd one.   

Now is the time to use webpack. But before using it, we need to 
install it.   

**For PC**:

    npm i --global --save webpack
     
  
   
**For Linux**: 
   
    sudo npm i --global --save webpack
    
  
&nbsp;
    
Now, just run:        

    webpack
    
    
in your terminal and booom!    
Check your console!


&nbsp;
## Loaders

The **goal** is to have all of the assets in your project be 
**webpack's concern** and **not the browser's**.  

Webpack treats **every file** (.css, .html, .scss, .jpg, etc.) as a **module**.
However, **webpack itself only understands JavaScript**.  

At a high level, loaders have two purposes in your webpack config. They work to:  
1. Identify which file or files should be transformed by a certain Loader. (test property)
2. Transform those files so that they can be added to your dependency graph (and eventually your bundle). (use property)


***webpack.config.js***
    
    const path = require('path');
    
    const config = {
      entry: './src/js/app.js',
      output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          { test: /\.txt$/, use: 'raw-loader' }
        ]
      }
    };
    
    module.exports = config;
    
    
The configuration above has defined a rules property for a single module with two required properties: test and use. 
This tells webpack's compiler the following:

> "Hey webpack compiler, when you come across a path that resolves to a '.txt' file 
***inside of a require()/import statement***, use the raw-loader to transform it 
before you add it to the bundle."
    
###### Please Note: It is important to remember that when defining rules in your webpack config, you are defining them under module.rules and not rules. For your benefit, webpack will 'yell at you' if this is done incorrectly.

&nbsp;
## Plugins

While **Loaders only** execute transformations on a **per-file basis**, 
**plugins** are most commonly used to perform actions and 
custom functionality on **"compilations" or "chunks"** of your bundled modules. 

**Q.** How to use plugins?  
**A.** In order to use a plugin, you just need to **require()** it and 
add it to the plugins array.

**More....**  
Most plugins are **customizable** via options. 
Since you can use a **plugin multiple times** in a config for **different purposes**, 
you need to create an **instance** of it by calling it with **new**. 
 

***webpack.config.js***

    const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
    const webpack = require('webpack'); //to access built-in plugins
    const path = require('path');
    
    const config = {
       entry: './src/js/app.js',
       output: {
         path: path.resolve(__dirname, 'static'),
         filename: 'bundle.js'
       },
      module: {
        rules: [
          { test: /\.txt$/, use: 'raw-loader' }
        ]
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
      ]
    };
    
    module.exports = config;

