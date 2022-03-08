const argv = require('yargs')
                    .option('n',{
                            alias: 'num',
                            type: 'number',
                            demandOption: true,
                            describe:'Es el numero en el que se basara la tabla de multiplicar'

                    })
                    .check((argv, options)=>{

                        if(isNaN(argv.num)){
                            throw 'La base debe de ser un numero:';
                        }
                        return true;
                    })
                    .option('l',{
                        alias:'listar',
                        type:'boolean',
                        default:false,
                        describe:'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias:'hasta',
                        type:'number',
                        default:10,
                        describe:'Es el numero que define hasta donde se va a multiplicar'
                    })
                    .argv;




module.exports =   argv;