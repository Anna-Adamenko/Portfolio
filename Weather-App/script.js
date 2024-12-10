// Geocoding API (Nominatim)
const geocodingApiUrl = "https://nominatim.openstreetmap.org/search?format=json&q=";
const geocodingCityPlzApiUrl = "https://nominatim.openstreetmap.org/search?format=json";
// Beispiel:
// https://nominatim.openstreetmap.org/search?format=json&q=Berlin

// Wetter API (Open-Meteo)
const weatherApiUrl = "https://api.open-meteo.com/v1/forecast?current_weather=true&";
// Beispiel (Koordinaten für Berlin):
// https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=52.52&longitude=13.41

class WeatherData {
    constructor(city, temperature, weatherCode) {
        this.city = city;
        this.temperature = temperature;
        this.weatherCode = weatherCode;
    }

}

class LocationData {
    constructor(latitude, longitude, displayName) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.displayName = displayName;
    }
}

const cityInput = document.getElementById("cityInput");
const zipInput = document.getElementById("zipInput");


// Funktion zum Abrufen der Ortsdaten
async function getCoordinates(city, zip) {
    const query = [];
    if (city) query.push(`city=${city}`);
    if (zip) query.push(`postalcode=${zip}`);
    const url = `${geocodingCityPlzApiUrl}&${query.join("&")}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.length === 0) throw new Error("Ort nicht gefunden.");

    const {lat, lon, display_name} = data[0];
    return new LocationData(lat, lon, display_name);
}


// Funktion zum Abrufen der Wetterdaten
async function fetchWeatherData(locationData) {
    const url = `${weatherApiUrl}latitude=${locationData.latitude}&longitude=${locationData.longitude}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.current_weather) throw new Error("Wetterdaten konnten nicht geladen werden.");

    const {temperature, weathercode} = data.current_weather;
    return new WeatherData(locationData.displayName, temperature, weathercode);
}


// Funktion zur Anzeige der Wetterdaten
function updateWeatherData(weatherData) {
    const weatherDisplay = document.getElementById("weatherDisplay");
    const weatherHTML = `
        <h2>${weatherData.city}</h2>
        ${getWeatherIcon(weatherData.weatherCode)}
        <p>${weatherData.temperature}°C</p>
        <p>${getWeatherDescription(weatherData.weatherCode)}</p>
    `;
    weatherDisplay.innerHTML = weatherHTML; // Update weather display
    weatherDisplay.style.display = "block";
}

function displayError(message) {
    const weatherDisplay = document.getElementById("weatherDisplay");
    weatherDisplay.innerHTML = `<p style="color: #A52A2A; font-weight: bold;">Versuchen Sie noch mal! ${message}</p>`;
}


// Abfrage des Wettericons zu einem Wettercode
function getWeatherIcon(weathercode) {
    let iconName;
    switch (weathercode) {
        case 0:
            iconName = "clear-day.svg";
            break;
        case 1:
        case 2:
        case 3:
            iconName = "partly-cloudy-day.svg";
            break;
        case 45:
        case 48:
            iconName = "fog.svg";
            break;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
            iconName = "rain.svg";
            break;
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            iconName = "snow.svg";
            break;
        case 95:
        case 96:
        case 99:
            iconName = "thunderstorms.svg";
            break;
        default:
            iconName = "unknown.svg"; // Füge ein Icon für unbekannte Wettercodes hinzu
    }
    return `<img src="icons/${iconName}" alt="Wetter Icon">`;
}

// Abfrage der Wetterbeschreibung zu einem Wettercode
function getWeatherDescription(weathercode) {
    const weatherDescriptions = {
        0: "Klarer Himmel",
        1: "Leicht bewölkt",
        2: "Teilweise bewölkt",
        3: "Bewölkt",
        45: "Nebel",
        48: "Ablagerungsnebel",
        51: "Leichter Nieselregen",
        53: "Mäßiger Nieselregen",
        55: "Starker Nieselregen",
        56: "Leichter gefrierender Nieselregen",
        57: "Starker gefrierender Nieselregen",
        61: "Leichter Regen",
        63: "Mäßiger Regen",
        65: "Starker Regen",
        66: "Leichter gefrierender Regen",
        67: "Starker gefrierender Regen",
        71: "Leichter Schneefall",
        73: "Mäßiger Schneefall",
        75: "Starker Schneefall",
        77: "Schneeregen",
        80: "Leichte Regenschauer",
        81: "Mäßige Regenschauer",
        82: "Starke Regenschauer",
        85: "Leichte Schneeschauer",
        86: "Starke Schneeschauer",
        95: "Gewitter",
        96: "Gewitter mit Hagel",
        99: "Gewitter mit starkem Hagel"
    };
    return weatherDescriptions[weathercode] || "Unbekannt";
}


// Eventlistener für die Formularabsendung
document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
        const locationData = await getCoordinates(cityInput.value, zipInput.value);
        const weatherData = await fetchWeatherData(locationData);
        updateWeatherData(weatherData);
    } catch (error) {
        displayError(error.message);
    }
});