const express = require("express")
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Oficial Website from Dragon Ball Z');
});


const { characters } = require('./data/characters');

router.get('/api/data/characters', (req, res) => {
    res.send(characters);
});

//const x = [':id', ':name'];

//Si lo quieres llamar por ID *Quitar el codigo de comentario*

/*
    router.get('/api/data/characters/:id' , (req, res) => {
        const character = characters.find(c => 
            [ c.id === parseInt(req.params.id), c.name === String(req.params.name)]);
        if(!character) return res.status(404).send('Character Not Found');
        else res.send(character);
    });

*/
    router.get('/api/data/characters/:name', (req, res) => {
        const character = characters.find(c => c.name === String(req.params.name));
        if(!character) return res.status(404).send('Character Not Found');
        else res.send(character);
    });



router.post('/api/data/characters', (req, res) => {
    const character = {
        id: characters.length + 1,
        name: req.body.name,
        planet: req.body.planet,
        main_ability: req.body.main_ability,
        transformation: (req.body.transformation === 'true'),
        imageUrl: req.body.imageUrl 
    }; 

    characters.push(character); 
    res.send(character);
});


router.delete('/api/data/characters/:name', (req, res) => {
    const character = characters.find(c => c.name === String(req.params.name));
    if(!characters) return res.status(404).send('Character Not Found');

    const index = characters.indexOf(character);
    characters.splice(index, 1);
    res.send(character);
});

app.use('/', router);

module.exports = { router };

