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


##### Note: All the configuration settings for webpack are stored
in a separate file called ***webpack.config.js***.

So, let us **create a new file: webpack.config.js**

&nbsp;
## Entry

Entry is basically the **first file** from which the webpack
**starts its processing**. It is also called as the ***entry*** point
or ***root*** of your app (for webpack).

