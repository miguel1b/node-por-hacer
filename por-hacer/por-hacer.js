const fs = require('fs');

let portafolioTareas = [];


let guardarDB = () => {
    let data = JSON.stringify(portafolioTareas);

    return new Promise((resolve, reject) => {
        fs.writeFile('db/data.json', data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve('Se registró existosamente!!!');
            }
        });
    })
}

let leeDB = () => {
    try {
        portafolioTareas = require('../db/data.json');
        console.log("leer DB : ", portafolioTareas);
    } catch (error) {
        portafolioTareas = [];
    }
}

let crear = (descripcion) => {

    leeDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    portafolioTareas.push(porHacer);
    guardarDB();
    return portafolioTareas;
}

let getListado = () => {
    leeDB();
    return portafolioTareas;
}

let actualizar = (discripcion, completado) => {
    leeDB();
    let index = portafolioTareas.findIndex(item => item.descripcion == discripcion);
    if (index) {
        portafolioTareas[index].completado = completado;
        guardarDB();
        return `${discripcion} ha sido actualizado : ${completado}!!!`
    } else {
        return 'Ningún registro actualizado';
    }
}

let borrar = (descripcion) => {
    leeDB();
    let borrarDB = portafolioTareas.filter(item => item.descripcion !== descripcion);
    if (portafolioTareas.length !== borrarDB.length) {
        portafolioTareas = borrarDB;
        guardarDB();
        return `Eliminado: ${descripcion}`
    } else {
        return 'Ningún registro eliminado!!!';
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}