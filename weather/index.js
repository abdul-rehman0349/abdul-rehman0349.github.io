async function weather() {
    const city = document.getElementById("city").value;
    const apikey = "185f07b93eb9cfc189d94bf2b7772c17";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherinfo = `
                <p style="font-size: 38px">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" style="width: 15%; vertical-align: middle;">
                ${data.main.temp} °C</p>
                <p style="font-size: 36px; text-align="center";>${data.name}, ${data.sys.country}</p>
                <p>Feels like: ${data.main.feels_like}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Pressure: ${data.main.pressure} hPa</p>
                <p>Wind speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("result").innerHTML = weatherinfo;
        } else {
            document.getElementById("result").innerText = "City Not Found OR  Make sure the spelligs are correct";
        }
    } catch (error) {
        document.getElementById("result").innerText = "Error Fetching Data";
    }
}
document.getElementById("city").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        weather();
    }
});

