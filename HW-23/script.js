function WeatherMap() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Lutsk&units=metric&lang=ua&APPID=5d066958a60d315387d9492393935c19")
        .then((response) => {
            return response.json();
        })
        .then(addMap);

    function addMap(data) {
        const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "Пʼятниця", "Субота"];
        let day = new Date();
        document.body.innerHTML = ` <main class="mainBox">
             <div class="main__innerBox">
                <img class ="image" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather image" />
                <div>
                    <p class="temp"><i class="fa-solid fa-temperature-three-quarters" style="color: #ffffff;"></i>${data.main.temp_min}<sup>&deg;</sup>  ${data.main.temp_max}<sup>&deg;</sup></p>
                    <p class="city">${data.name} (${data.sys.country})</p>
                </div>
            </div>
            <div class="main__innerBox">
                <p class="wind"><i class="fa-solid fa-wind fa-lg" style="color: #dedede;"></i> Вітер ${data.wind.speed}м/s</p>
                <p class="wind"><i class="fa-solid fa-droplet fa-lg" style="color: #dedede;"></i> Вологість ${data.main.humidity}% </p>
            </div>
            <div class="main__innerBox">
                <p class="day">${daysOfWeek[day.getDay()]}</p>
                <p class="time">${day.getHours()} <span class="twoDots">:</span> <span class = "min"></span></p>
            </div>
        </main>`;

        let min = document.querySelector(".min");
        if (`${day.getMinutes()}`.length < 2) {
            min.innerHTML = `0${day.getMinutes()}`;
        } else {
            min.innerHTML = `${day.getMinutes()}`;
        }
    }
}
WeatherMap();
