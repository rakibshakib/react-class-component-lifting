const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

const InputField = ({ scale, temperature, handleChangeTemp }) => {
    return (
        <div className="filedSet">
            <fieldset>
                <legend>Enter Your temperature in {scaleNames[scale]}:</legend>
                <input
                    type="number"
                    value={temperature}
                    onChange={(e) => handleChangeTemp(e, scale)}
                    placeholder="Please enter a temperature in number 😃"
                />
            </fieldset>
        </div>
    );
};

export default InputField;
