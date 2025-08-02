fetch("https://pokeapi.co/api/v2/pokemon/pikachu/spongebob")
    .then((response) => {
      // console.log(response)
      // res=response.json();
      if(!response.ok) {
        throw new Error(`HTTP error! Status:`); // Check if the response is OK
      }
        return response.json(); // Return the parsed JSON data
    })
    .then((data) => {
        console.log("Data :"+data); // Log the data
    })
    .catch((error) => {
        console.error(error); // Log any errors
    });