const {Team}= require('../db');
const {getTeamsFromAPI} = require('../controllers/teamController');

const getTeamsHandler = async (req,res)=>{
    try {
        // const teamC = await getTeamsFromAPI();
        // res.status(200).json(teamC)
        console.log('llame el controller');
        const teamsCount = await Team.count();
        console.log(teamsCount);
        if(teamsCount===0){

            const allTeams = await getTeamsFromAPI();
            // console.log(allTeams);
            res.status(200).json(allTeams)
        }else{
            res.status(200).json({message: 'ya estaban cargados en la BDD'});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}


module.exports = {
    getTeamsHandler,
}
