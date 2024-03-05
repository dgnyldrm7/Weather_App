const aramaButonu = document.querySelector(".aramaButonu").addEventListener("click", Cekme)

const nem = document.getElementById("nem");
const ruzgar = document.getElementById("rzgHizi");
const placeText = document.getElementById("placeText");

const citynameMain = document.getElementById("cityname");

const derece = document.getElementById("derece");

const icFoto = document.querySelector(".icFoto");



let cityName ="ankara";


const apiKey = "gtxkDzBq7AlfFac8I1egcQ==kcEhfg7bJT3XL49G";
const urlLink= "https://api.api-ninjas.com/v1/weather?city=";


const option = {
    method: 'GET',
    url: urlLink,
    headers:{
        'X-Api-Key' : apiKey,
    }
};


async function Cekme(){

icFoto.src = "images/loading.svg";


let yeniDeger = placeText.value;
cityName = yeniDeger.toLowerCase();

const cekelim = await fetch(urlLink + cityName, option);
if (!cekelim.ok) {
    undefined = "selam";
}

const response = await cekelim.json();

nem.textContent = "%" +response.humidity;
ruzgar.textContent = response.wind_speed+ "km/h";



const Buyutme = str => str.charAt(0).toUpperCase() + str.slice(1);




        citynameMain.textContent = Buyutme(cityName)
        derece.textContent =`${response.temp}°C`;
    
    


//arama sonrası
placeText.value ="";
icFoto.src = "";


}
