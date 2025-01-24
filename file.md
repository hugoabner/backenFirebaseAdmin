# CREAR PROYECTO TYPESCRIPT CON EXPRESS

# PASO 1   install
````
ejecutar el comando                =>     "npm init -y, cors, express, nodemon" 
los types de typescript            =>     "npm install -D typescript @types/node @types/express ts-node-dev"
crear el archivo tsconfig          =>     "npx tsc --init"
````
# PASO 2   configuraciones
````
configurar el package.json 
---------------------
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx tsc && node dist/index.js",
    "dev": "nodemon"
}
----------------------
crear un archivo nodemon.json
-----------------------------
{
	"watch": [
		"src"
	],
	"ext": "ts",
	"exec": "npx tsc && node dist/index.js"
}
----------------------------
crear la carpeta src, index.ts
│
├── tsconfig.json
├── src/
│   └── index.ts
|__ nodemon.json
|__ package.json
-----------------------------

````
# Instalar REFLECT para utilizar los metadatos
````
npm install reflect-metadata --save
````