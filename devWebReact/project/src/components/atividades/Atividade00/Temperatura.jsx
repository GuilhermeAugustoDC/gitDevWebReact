const Temperatura = () => {

    const celsiusParaFahrenheit = (celsius) => (9 * celsius + 160) / 5
    const fahrenheitParaCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9)

    const kelvin = (kelvin) => {

        const celsius = kelvin - 273
        const fahrenheit = (kelvin - 273) * 9 / 5 + 32

        return {celsius, fahrenheit}
    }

    const c = 30
    const f = 67
    const k = 0

    return (
        <>
            <h1>{c}° Celsius em Fahrenheit é: {celsiusParaFahrenheit(c)}</h1>
            <h1>{c}° Fahrenheit em Celsius é: {fahrenheitParaCelsius(f)}</h1>
            <h1>{c}° Kelvin é: {kelvin(k)}</h1>
        </>
    )
}
export default Temperatura