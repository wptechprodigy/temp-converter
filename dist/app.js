const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function convertCelciusToFahrenheitAndKelvin() {
  const celciusTemp = parseFloat(celciusInput.value);
  const fahrenheitTemp = (celciusTemp * (9/5)) + 32; // (0°C × 9/5) + 32 = 32°F
  const kelvinTemp = celciusTemp + 273.15; // 0°C + 273.15 = 273.15K
  
  fahrenheitInput.value = roundNum(fahrenheitTemp);
  kelvinInput.value = roundNum(kelvinTemp);
}

function convertFahrenheitToCelciusAndKelvin() {
  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  const celciusTemp = (fahrenheitTemp - 32) * (5/9); // (32°F − 32) × 5/9 = 0°C
  const kelvinTemp = ((fahrenheitTemp - 32) * (5/9)) + 273.15; // (32°F − 32) × 5/9 + 273.15 = 273.15K
  
  celciusInput.value = roundNum(celciusTemp);
  kelvinInput.value = roundNum(kelvinTemp);
}

function convertKelvinToCelciusAndFahrenheit() {
  const kelvinTemp = parseFloat(kelvinInput.value);
  const fahrenheitTemp = ((kelvinTemp - 273.15) * (9/5)) + 32; // (0K − 273.15) × 9/5 + 32 = -459.7°F
  const celciusTemp = kelvinTemp - 273.15; // 0°C + 273.15 = 273.15K

  celciusInput.value = roundNum(celciusTemp);
  fahrenheitInput.value = roundNum(fahrenheitTemp);
}

function main() {
  celciusInput.addEventListener('input', convertCelciusToFahrenheitAndKelvin);
  fahrenheitInput.addEventListener('input', convertFahrenheitToCelciusAndKelvin);
  kelvinInput.addEventListener('input', convertKelvinToCelciusAndFahrenheit);
}

main();
