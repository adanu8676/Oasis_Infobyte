function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        result = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        result = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
    }

    document.getElementById('result').innerText = result;
}
