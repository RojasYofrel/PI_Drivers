

const { drivers } = require('../../api/db.json');

// Función para filtrar conductores por nombre
function filterDriversByName(name) {
  return drivers.filter(driver => driver.driverRef === name);
}

// Función para obtener todos los conductores
function getAllDrivers() {
  return drivers;
}

// Exporta las funciones del controlador
module.exports = {
  filterDriversByName,
  getAllDrivers,
};
