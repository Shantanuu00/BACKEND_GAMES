const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
const games = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action-adventure',
      platform: 'Nintendo Switch',
      releaseYear: 2017,
    },
    {
      id: 2,
      title: 'God of War',
      genre: 'Action-adventure',
      platform: 'PlayStation 4',
      releaseYear: 2018,
    },
    {
      id: 3,
      title: 'Cyberpunk 2077',
      genre: 'Role-playing',
      platform: 'PC',
      releaseYear: 2020,
    },
    {
      id: 4,
      title: 'Hollow Knight',
      genre: 'Metroidvania',
      platform: 'PC',
      releaseYear: 2017,
    },
    {
      id: 5,
      title: 'Minecraft',
      genre: 'Sandbox',
      platform: 'Multi-platform',
      releaseYear: 2011,
    },
  ];

app.get("/games",(req,res)=>{
    return res.status(200).json(games);
});
app.get("/games/:id",(req,res)=>{
    let id=parseInt(req.params.id);
    let result=games.find((game)=>game.id===id);
    if(!result){
        return res.status(404).json({message:"Result not found"});
    }
    else{
        return res.status(200).json(result)
    }
});
let PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is listening on the port ${PORT}`);
});




