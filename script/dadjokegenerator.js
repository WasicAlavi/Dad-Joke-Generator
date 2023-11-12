const btnEL = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const apiKey="V3oN1dry9KPbowvhR8NQ0Q==dt3foCIlvbqtmlyo";

const option = {
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
        
    jokeEL.innerText="Updating...";

    btnEL.disabled = true;
    btnEL.innerText="Loading..."

    const response= await fetch(apiURL,option);
    const data=await response.json();
    jokeEL.innerText=data[0].joke;

    btnEL.disabled = false;
    btnEL.innerText="Tell me another joke";
        
    } catch (error) {
        console.log(window.navigator.onLine);
        if(!window.navigator.onLine){
        jokeEL.innerText="You are offline";   
        btnEL.disabled = true;  
        } else{
            jokeEL.innerText="An error occured.Try again later."; 
            btnEL.disabled = true;  
        }

    }





}


btnEL.addEventListener("click",getJoke);