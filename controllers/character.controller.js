import axios from "axios";
const getCharacters = async (req, res)=>{
    try {
        const page = req.query.page || 1
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const respArray = response.data.results;
        const result =[]
        respArray.filter((x)=>{
            const {id,name , status, species, image} = x;
            result.push( {id,name , status, species,  image})
            }
        )

        res.status(200).json({"result":result});
    } catch (error) {
        console.error('Error fetching data from Rick and Morty API:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
}

const getCharactersById = async (req,res)=>{
    try {
        const characterId = req.params.id;
        if(!characterId)    res.status(401).json({ error: 'Invalid CharacterId' });
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
        const {name , status, species, gender, origin, location, image} = response.data;
        res.status(200).json({"result": {name , status, species, gender, origin, location, image}});
        
    } catch (error) {
        console.error('Error fetching data from Rick and Morty API:', error.message);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
}

export {
    getCharacters,
    getCharactersById 
}