const fs = require('fs');   
const colors = require('colors');
const crearArchivo = async(num = 5, listar=false, hasta=10) =>{


    try {
        

 
    let salida = '';

    for(let i =1; i<=hasta; i++){
    
    let resul =num*i;
    salida += `${num} X ${i} = ${resul}\n`;
    
    }
    
    if(listar ){
            
        console.log('================='.random);
        console.log(`Tabla del ${num}:`.random);
        console.log('================='.random);
        
        console.log(salida.random);
    }
    
    fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);
    
    return `Tabla-${num}.txt`;



    } catch (error) {
        
        throw error;
    }
       
    

};

module.exports = {
     crearArchivo
}