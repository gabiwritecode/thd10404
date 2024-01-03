checkWindowSize();

function checkWindowSize() {
 
  const navbarContainer = document.querySelector('.upperHeader');
if(window.innerWidth <= 800){

  window.addEventListener('scroll',function(){
    const header = document.querySelector('.container');
    const title = document.querySelector('.header-title');
    const subtitle = this.document.querySelector('.header-subtitle');
    const btn = this.document.querySelector('.header-btn');
    const menuIcon = this.document.querySelector('#menu-icon')
    const scrollY = this.window.scrollY;
  
    if(scrollY>300){
      header.style.height = '80px'
      title.style.display = 'none'
      subtitle.style.display = 'none'
      btn.style.visibility= 'hidden'
      header.style.marginBottom ='200px'
      menuIcon.style.filter ='opacity(1)'
  
  
    }else{
      header.style.height = '400px'
      title.style.display = 'block'
      subtitle.style.display = 'block'
      btn.style.visibility= 'visible'
      menuIcon.style.filter ='opacity(0)'
    }
  })
  
  

  
  const header = document.querySelector('.container');


      header.addEventListener('click',function(e){
        
        
        if(e.target.tagName ==="I"){
          
          if(navbarContainer.style.transform === `translateX(-600px)`){
            navbarContainer.style.transform ='translateX(-55px)'
          }else{
            navbarContainer.style.transform = 'translateX(-600px)'
          }}

      })

  }else if(window.innerWidth > 800){
    const navbarContainer = document.querySelector('.upperHeader');
    navbarContainer.style.transform = 'translateX(0)';
    
    
  } }


 


document.addEventListener('resize', function () {
  checkWindowSize();
});






// 天氣卡片
const apiKey="e394429aba8ac8b8f3c8e5e4fd503fba";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon=document.querySelector('.js-weather-icon1')
checkWeather1('Toledo')
checkWeather2('Madrid')
checkWeather3('Segovia')
async function checkWeather1(city){
  const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);
  if (response.status==404){
    document.querySelector('.card').style.display='none';}
    else{
  let data = await response.json();

 
  document.querySelector('.city1').innerHTML=data.name;
  document.querySelector('.temp1').innerHTML=Math.round(data.main.temp) + "°C";
  document.querySelector('.humidity1').innerHTML=data.main.humidity+"%";
  document.querySelector('.wind1').innerHTML=data.wind.speed+"km/h";

  if(data.weather[0].main=='Clouds'){
    weatherIcon.src='./weather-app-img/images/clouds.png'
  }else if(data.weather[0].main=='Clear'){
    weatherIcon.src='./weather-app-img/images/clear.png'
  }else if(data.weather[0].main=='Rain'){
    weatherIcon.src='./weather-app-img/images/rain.png'
  }else if(data.weather[0].main=='Drizzle'){
    weatherIcon.src='./weather-app-img/images/drizzle.png'
  }else if(data.weather[0].main=='Mist'){
    weatherIcon.src='./weather-app-img/images/mist.png'
  }else if(data.weather[0].main=='Snow'){
    weatherIcon.src='./weather-app-img/images/snow.png'
  }

  document.querySelector('.weather').style.display='block'
}}

async function checkWeather2(city){
  const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);
  if (response.status==404){
    document.querySelector('.card').style.display='none';}
    else{
  let data = await response.json();

 
  document.querySelector('.city2').innerHTML=data.name;
  document.querySelector('.temp2').innerHTML=Math.round(data.main.temp) + "°C";
  document.querySelector('.humidity2').innerHTML=data.main.humidity+"%";
  document.querySelector('.wind2').innerHTML=data.wind.speed+"km/h";

  if(data.weather[0].main=='Clouds'){
    weatherIcon.src='./weather-app-img/images/clouds.png'
  }else if(data.weather[0].main=='Clear'){
    weatherIcon.src='./weather-app-img/images/clear.png'
  }else if(data.weather[0].main=='Rain'){
    weatherIcon.src='./weather-app-img/images/rain.png'
  }else if(data.weather[0].main=='Drizzle'){
    weatherIcon.src='./weather-app-img/images/drizzle.png'
  }else if(data.weather[0].main=='Mist'){
    weatherIcon.src='./weather-app-img/images/mist.png'
  }else if(data.weather[0].main=='Snow'){
    weatherIcon.src='./weather-app-img/images/snow.png'
  }

  document.querySelector('.weather').style.display='block'
}}

async function checkWeather3(city){
  const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);
  if (response.status==404){
    document.querySelector('.card').style.display='none';}
    else{
  let data = await response.json();

 
  document.querySelector('.city3').innerHTML=data.name;
  document.querySelector('.temp3').innerHTML=Math.round(data.main.temp) + "°C";
  document.querySelector('.humidity3').innerHTML=data.main.humidity+"%";
  document.querySelector('.wind3').innerHTML=data.wind.speed+"km/h";

  if(data.weather[0].main=='Clouds'){
    weatherIcon.src='./weather-app-img/images/clouds.png'
  }else if(data.weather[0].main=='Clear'){
    weatherIcon.src='./weather-app-img/images/clear.png'
  }else if(data.weather[0].main=='Rain'){
    weatherIcon.src='./weather-app-img/images/rain.png'
  }else if(data.weather[0].main=='Drizzle'){
    weatherIcon.src='./weather-app-img/images/drizzle.png'
  }else if(data.weather[0].main=='Mist'){
    weatherIcon.src='./weather-app-img/images/mist.png'
  }else if(data.weather[0].main=='Snow'){
    weatherIcon.src='./weather-app-img/images/snow.png'
  }

  document.querySelector('.weather').style.display='block'
}}






