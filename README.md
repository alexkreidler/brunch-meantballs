# Brunch with MEANtballs

This is a modern MEAN stack skeleton for [Brunch](http://brunch.io), based off of [brunch/es6](https://github.com/brunch/with-es6).

## Installation

Clone this repo manually or use `brunch new dir -s meantballs`

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [nodemon](http://nodemon.org) `npm install -g nodemon`
    * [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm start` - Runs `brunch watch` (to watch & rebuild your files) and `nodemon server/index.js` (to watch and restart the server as you edit) at the same time. Great stuff!
    * `brunch build --production` — builds minified project for production
    * `npm run prod` - same as above; also runs the server (`node server/index.js`)
* Learn:
    * `public/` dir is fully auto-generated and served by the very minimal default [express](http://express.org) server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## ES7

To use proposed JS features not included into ES6, do this:

* `npm install --save-dev babel-preset-stage-0`
* in `brunch-config.js`, add the preset: `presets: ['es2015', 'stage-0']`
