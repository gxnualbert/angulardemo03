angular使用外部js文件，参考：https://www.truecodex.com/course/angular-6/how-to-use-external-js-files-and-javascript-code-in-angular

首先，要安装jQuery
npm install jquery

然后，在angular.json文件中，添加css样式文件和script：
"scripts": [
              "./src/assets/js/main.js",
              "./src/assets/js/jquery.js"
            ]
            
  "styles": [
              "src/styles.scss",
              "./src/assets/css/edit.css",
              "./src/assets/css/jquery.imageLabel.min.css"

            ],

这里，main.js是我的一个自定义文件，里面有一个函数imageLabel。后面需要在ts文件中调用这个js函数

在ts文件中，声明js
declare const imageLabel: any;
import * as $ from 'jquery';
然后再ts调用即可：
 imageLabel({}）





# Angulardemo03

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
