const log4js = require('log4js');

const logger = log4js.getLogger("app");
logger.level = "info";

logger.debug("Iniciando la app en modo de pruebas.");
logger.info("Usuario ha iniciado sesión - *");
logger.warn("Falta el archivo config de la app");
logger.error("No se pudo ejecutar la acción");
logger.fatal("No se pudo iniciar la app");

function sumar(x, y){
    return x + y;
}

let variable_mal_escrita = 0;
module.exports = sumar;