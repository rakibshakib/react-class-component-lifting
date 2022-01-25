export const toCelicus = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
};

export const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
};

export const coverter = (temperature, convertTo) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convertTo(input);
    const roundedValue = Math.round(output * 1000) / 1000;
    return roundedValue.toString();
};
