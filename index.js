import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res)=> {
  res.render('index.ejs');
});

app.post('/get-lyrics', async (req, res) =>{
    const artist = req.body.artist;
    const song = req.body.song;

    console.log(artist, song);

    try{
        // Example: https://api.lyrics.ovh/v1/Ariana Grande/No Tears Left To Cry
        // Rihanna We Found Love
        const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        const lyrics = response.data.lyrics;
        res.render('index.ejs', { lyrics: lyrics, artist: artist, song: song });
    }catch(error){
        console.error(error);
        res.render('index.ejs', { lyrics: "Lyrics not found."} );
    }
});






app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});