# template_react_webpack_com_yarn
Template mínimo para aplicação web com React, Babel e Webpack, usando yarn

## requisito
```
nodejs >= 12.4
yarn >= 1.21.1
```

### para compilar e baixar pacotes de dependências
```
yarn install
```
### para debug do projeto (acesso http://localhost:8080)
```
yarn dev-server
```
### para deploy (saida em /public)
```
yarn build 
```

### para deploy debug (saida em /public)
```
yarn start
```

## iniciar projeto um projeto novo do zero
```
yarn init -y
yarn add react react-dom
```

### uso de webpack
```
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader
yarn add -D html-webpack-plugin html-loader file-loader svg-url-loader css-loader style-loader
```
