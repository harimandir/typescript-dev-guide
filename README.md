# Typescript: The Complete Developer's Guide [2020] Coursework

## Prerequisites

Install npm

## Setup

Install dependencies in each project folder before first use

`npm i`

## Included projects

Commands below are to be run in their project folders

### fetchjson

Fetch JSON from placeholder API and output to console

- Compile a TypeScript file to a JavaScript file

`npx tsc index.ts`

- Compile and run a TypeScript file in Node.js REPL

`npx ts-node index.ts`

### features

Demonstration of basic TypeScript language features and syntax

- File output can be seen using ts-node

`npx ts-node annotations/functions.ts`

### maps

Display randomized User and Company markers on Google Maps

- Bundle TypeScript source in an html file and serve with Parcel

`npx parcel index.html`

Load the page at `http://localhost:1234`

### sort

Sort arrays, strings, and linked lists using a single algorithm

- Compile the src to the build folder

`npx tsc`

- Run the TypeScript compiler in watch mode while editing src files

`npx tsc -w`

- Launch the build output in the console

`npx node build/index.js`

- Better yet, use `nodemon` and `concurrently` to do both at the same time

`npm start`

### stats

Load, parse, analyze, and report CSV data

- Outputs football match data analysis from a CSV file to console and html files

`npm start`

- Writes to console, `stats/wins.html`, and `stats/goals.html`

### web

Homegrown web framework

`npx parcel index.html`

### server

Express server with TypeScript

`npm start`
