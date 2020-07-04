const argv = require('./config/yargs').argv;
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Tareas por hacer');
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Listar tareas por hacer');
        let listado = getListado();
        for (let tarea of listado) {
            console.log("======= Tareas por hacer =========".cyan);
            console.log(colors.yellow(tarea.descripcion));
            console.log("Estado : ".grey, tarea.completado);
            console.log("==================================".cyan);
        }
        break;
    case 'actualizar':
        let actualizarTarea = actualizar(argv.descripcion, argv.completado);
        console.log(argv.descripcion, argv.completado);
        console.log(actualizarTarea);
        break;
    case 'borrar':
        let borrarTarea = borrar(argv.descripcion);
        console.log(borrarTarea);
        break;
    default:
        console.log('Comando no reconocido!!!');
}