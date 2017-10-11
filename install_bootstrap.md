#Install Bootstrap
###Steps
1. Type `npm install --save bootstrap` into your terminal while in your **project's** directory. The `--save` marks the package as a production dependency. 
2. Go to `src/.angular-cli.json` and find the "styles" array. The default value in this array should be "styles.css". Add the line `"../node_modules/bootstrap/dist/css/bootstrap.min.css"` to the front of the "styles" array.