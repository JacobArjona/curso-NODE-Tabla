// Hacer la tabla del 5 
const {crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors');


console.clear();

// console.log(process.argv);

console.log('base: yargs', argv.num);
// const [ , , arg3 = 'num=5'] = process.argv;
// const [, num] = arg3.split('=');

// console.log(num);
// let num =10;

 crearArchivo(argv.num , argv.l, argv.h)
     .then( nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
          .catch(err => console.log(err));


// num=8 -l => lista la tabla de multiplicar  