const apikey="8bf27c24cd9f95a87626eb1248e8efa1";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const  searchbar=document.querySelector(".weather-search input");
const  searchbutton=document.querySelector(".weather-search button");
const weatherfore=document.querySelector(".weather-icon");

async function checkweather(city){
    const response=await fetch(apiurl +city +`&appid=${apikey}`)
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds") {
        weatherfore.src="C:\\Users\\NISHITHA\\OneDrive\\Desktop\\javascript\\cssproj\\weatherforecast\\images\\clouds.png";
        
    }
    else if(data.weather[0].main=="Clear"){
        weatherfore.src="C:\\Users\\NISHITHA\\OneDrive\\Desktop\\javascript\\cssproj\\weatherforecast\\images\\clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherfore.src="C:\\Users\\NISHITHA\\OneDrive\\Desktop\\javascript\\cssproj\\weatherforecast\\images\\rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherfore.src="C:\\Users\\NISHITHA\\OneDrive\Desktop\\javascript\\cssproj\\weatherforecast\\images\\drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherfore.src="C:\\Users\\NISHITHA\\OneDrive\\Desktop\\javascript\\cssproj\\weatherforecast\\images\\mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherfore.src="C:\\Users\\NISHITHA\\OneDrive\\Desktop\\javascript\\cssproj\\weatherforecast\\images\\snow.png";
    }
}

searchbutton.addEventListener("click",()=>{
    checkweather(searchbar.value);
})
   
