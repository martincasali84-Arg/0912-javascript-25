# clase 02 - JavaScript AWP (Progressive Web App)

## Arrancar un proyecto Vite

```sh
npm create vite@latest ./ -- --template vanilla
```
## Para arrancar el servidor de desarrollo

1. Instalar dependecias

Nota: Si no tengo los node_modules tengo que hacer la Instalacion
```sh
npm i # npm install
```
2. Arrancar el Servidor

```sh
npm run dev
```
## Detener el Servidor

Ctrl + c

## Subir el proyecto a la Nube(GitHub)

1. Crear  un Repo

```sh
git init
```
2. Agregar el Remoto en el repo Local

```sh
git git remote add origin https://github.com/martincasali84-Arg/0912-javascript-25.git
```

3. Hago el add y despues el commit

```sh
git add .
git commit -m "Arranco la PWA"
```

4. Ver el listado de comits

```sh
git log --oneline
```

5. Actualizo el repositorio remoto con los cambios realizado en el repositorio local

```sh
git push -u origin main  #primera vez 
git push
```