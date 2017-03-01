// import _ from 'lodash';
// 
// 
// function component () {
//   var element = document.createElement('div');
// 
//   /* lodash is required for the next line to work */
//   element.innerHTML = _.join(['Hello','webpack'], ' ');
// 
//   return element;
// }
// 
// document.body.appendChild(component());
import styles from './file.css'

// src/app.js
const root = document.querySelector('#root')
root.innerHTML = `<p id="${styles.root}">Hello webpack & World</p>`

