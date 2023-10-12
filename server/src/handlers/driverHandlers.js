// const driverController = require('../controllers/driverController');

// const getDriversHandler = async (req, res) => {
//   try {
//     const { name } = req.query;

//     if (name) {
//       const filteredDrivers = driverController.filterDriversByName(name);
//       if (filteredDrivers.length === 0) {
//         res.status(404).json({ message: "No se encontraron conductores con el nombre proporcionado." });
//       } else {
//         res.status(200).json(filteredDrivers);
//       }
//     } else {
//       const allDrivers = driverController.getAllDrivers();
//       res.status(200).json(allDrivers);
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Ocurrió un error al procesar la solicitud." });
//   }
// };

const {getAllDrivers,detailDriver,detailDriverFromDB} = require('../controllers/driverController');

// Ruta para obtener todos los conductores
const getDriversHandler = async (req, res) => {
  try {
    const allDrivers = await getAllDrivers();
    res.status(200).json(allDrivers);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener conductores desde la API.' });
  }
};
  


const getDetailHandlerFromDB = async (req, res) => {
  try {
    const id = req.params.id;
    const driverDetail = await detailDriverFromDB(id);

    if (driverDetail === null) {
      res.status(404).json({ message: 'Conductor no encontrado en la base de datos.' });
    } else {
      const detail = {
        id: driverDetail.id,
        name: `${driverDetail.name.forename} ${driverDetail.name.surname}`,
        team: driverDetail.teams,
      }
    res.status(200).json(detail); 
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener detalles del conductor desde la base de datos.' });
  }
};

const getDetailHandler = async (req, res) => {
  try {
    const id = req.params.id; // Debes obtener el parámetro 'id' de 'req.params'
    const driverDetail = await detailDriver(id); // Llama a la función para obtener los detalles
    const detail = {
        id: driverDetail.id,
        name: `${driverDetail.name.forename} ${driverDetail.name.surname}`,
        team: driverDetail.teams,
    }
    res.status(200).json(detail); // Devuelve los detalles del conductor como JSON
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener detalles del conductor desde la API.' });
  }
};


const postDriverHandler =(req,res )=>{
    res.status(200).send('POST | /drivers');
}

module.exports = {
    getDriversHandler,
    getDetailHandler,
    postDriverHandler,
    getDetailHandlerFromDB
};