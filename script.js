

const cargarJuegos = async ()=>{

  try{
    const resp = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=42', {
      method: 'GET',     
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
      
  });
    const data = await resp.json();
    console.log(data);
    console.log("hola");
  } catch(error){
    console.log("aca estoy:")
    console.log(error);
  }

}

cargarJuegos();