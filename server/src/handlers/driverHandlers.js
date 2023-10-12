const{ drivers} = require('../../api/db.json');


const driverController = require('../controllers/driverController');

const getDriversHandler = async (req, res) => {
  try {
    const { name } = req.query;

    if (name) {
      // Llama a tu controlador con el nombre como argumento
      const filteredDrivers = driverController.filterDriversByName(name);
      if (filteredDrivers.length === 0) {
        res.status(404).json({ message: "No se encontraron conductores con el nombre proporcionado." });
      } else {
        res.status(200).json(filteredDrivers);
      }
    } else {
      // Llama a tu controlador para obtener todos los conductores
      const allDrivers = driverController.getAllDrivers();
      res.status(200).json(allDrivers);
    }
  } catch (error) {
    res.status(500).json({ message: "Ocurrió un error al procesar la solicitud." });
  }
};

  

const getDetailHandler = (req,res )=>{
    const {idDriver} =req.params;
    res.status(200).send(`Informacion del driver ${idDriver}`);
}

const postDriverHandler =(req,res )=>{
    res.status(200).send('POST | /drivers');
}

module.exports = {
    getDriversHandler,
    getDetailHandler,
    postDriverHandler
};