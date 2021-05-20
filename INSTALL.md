## install

`npm run boostrap`

lerna will go into all packages folder and intall node/npm packages (both dev and normal dependencies).

## run
`npm run start`

## view in the browser

`localhost:9000/`

## Adding a new MFe (with hot-reload)

1. go into packages folder
2. copy clone project
3. change folder name to your desired name.
4. From that new folder, access package.json
5. change name from @example/footer - to folder name.
6. visit src folder and change example-[name].js
7. visit webpack.config and update projectName [footer]
8. update port number from 9004 to the next available (you will see taken ports in the step 9 and 10 below).
9. visit packages/root-config/index.ejs
10. update import maps (systemjs-importmap) with your new project
11. ensure both production and isLocal systemjs-importmap are updated.
12. Update single-spa-layout with the placeholder for your module (more info: https://single-spa.js.org/docs/layout-overview).

useful tutorial (Creating single-spa React application):
https://medium.com/litslink/how-to-create-react-micro-frontends-from-scratch-using-single-spa-framework-in-examples-592c7f63bedf
