const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer.'
}

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea.'
}

const argv = require('yargs')
    .command('crear', 'Crear las tareas por realizar!!!', { descripcion })
    .command('listar', 'Lista todas las tareas por realizar!!!')
    .command('actualizar', 'Actualiza una tarea por realizar!!!', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea pendiente o completada', { descripcion })
    .help()
    .argv;



module.exports = {
    argv
}