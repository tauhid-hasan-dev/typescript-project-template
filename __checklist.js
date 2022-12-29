//type "tsc --init" command to initialize a tsconfig.json
//set the target to es5 - like this "target": "es5",
//then the ts compiler will compile the ts code to js(es2015)
//now change the root directory to the src
//all the ts file will be in the src file "rootDir": "./src",
//then create a output folder for the js file which will be automatically converted by tsc compiler
//and set the outdir to output "outDir": "./output",
//then use "tsc -w" command to automate the typscript code to javascript code.