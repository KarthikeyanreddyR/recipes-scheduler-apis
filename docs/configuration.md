## Steps to configure project

- `mkdir "project-name"`
- `cd "project-name"`
- `git init`      -- Initialize local git repo
- `npm init -y`       -- Initialize package.json
- `touch README.md`       -- Add readme file
- `touch .gitignore`       -- Add gitignore file
- `mkdir "src"`       -- Add src folder under root folder.
- `cd "src"`
- `touch index.ts`        -- entry point to our application where we define express, graphql, mongodb connection, etc.

## project dependencies
- `npm i express express-graphql graphql mongoose body-parser`        -- Add dependencies
- `npm i -D typescript @types/express @types/mongoose @types/node dotenv rimraf ts-node-dev tslint`       -- Add dev dependencies

## typescript configuration
- `tsc init`      -- Add tsconfig.json file to configure typescript. Modify outDir. Include source files. Exclude node_modules folder
- `touch tslint.json`     -- Add tslint.json file to configure rules for linting

## npm scripts
- open package.json file under root folder.
- create three types of scripts, viz for local, production, and test.
- for local, we will use ts-node-dev package to compile and watch .ts files under `src` folder.
    - `"start:local" : "tsnd --respawn --transpile-only src/index.ts"`
- for production, first clean output directory, compile all .ts files, and start the server. Use `&&` to execute each script sequentially.
    - `"clean" : "rimraf ./dist"`
    - `"build" : "tsc -p ."`
    - `"start" : "npm run clean && npm run build && node dist/index.js"`
- for test,         -- Pending

## Environmental variables configuration
- on root folder, create `.env` file. 
    - `touch .env`
- add `.env` file to `.gitignore` file. we should not commit this file as it contains secure details about database connection, api secret keys, etc.
- add required fields in `.env` file.
    - `PORT=8080`
- Create `config.ts` file under `src` folder.
    - `touch src/config.ts`
- add and export js object which holds the env variables.
    - `export default { port : process.env.PORT }`
- to `start` and `start:local` scripts add `-r dotenv/config`
- `-r dotenv/config` enables preloading of env variables so that we do not have to create, store in cloude or share .env file to anyone.

