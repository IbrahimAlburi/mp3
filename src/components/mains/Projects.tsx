import { useState } from "react";

function useCalculator(a: number, b: number) {
    const addition = () => a + b;
    const subtraction = () => a - b;
    const multiplication = () => a * b;
    const division = () => (b !== 0 ? a / b : "Error: Division by zero");
    const power = () => {
        let result = 1;
        const exp = Math.floor(Math.abs(b));
        for (let i = 0; i < exp; i++) {
            result *= a;
        }
        return b < 0 ? 1 / result : result;
    };
    return { addition, subtraction, multiplication, division, power };
}

export default function Projects() {
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber, setSecondNumber] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    const { addition, subtraction, multiplication, division, power } = useCalculator(a, b);

    const handleOperation = (op: () => number | string) => {
        if (firstNumber === "" || secondNumber === "") {
            setOutput("Please enter both numbers");
            return;
        }
        if (isNaN(a) || isNaN(b)) {
            setOutput("Please enter valid numbers");
            return;
        }
        setOutput(String(op()));
    };

    const clearCalc = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOutput("");
    };

    return (
        <main>

            <h2>Shape Smoothing</h2>

            <img src="/All_Steps.png" alt="Shape smoothing"/>

            <p>
                This project demonstrates an algorithmic approach to smoothing hand-drawn shapes. The light gray line
                represents the original drawing. Step one exaggerates features
                using Dijkstra's Algorithm. Red points highlight important corners detected using epsilon calculations.
                The final green layer applies corner cutting while preserving
                striking features, resulting in a smooth and visually pleasing shape.
            </p>

            <h2>claculator</h2>
            <div id="calculator">
                <label htmlFor="first-number">First Number</label>
                <input
                    type="text"
                    id="first-number"
                    placeholder="First number"
                    value={firstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)}
                />
                <label htmlFor="second-number">Second Number</label>
                <input
                    type="text"
                    id="second-number"
                    placeholder="Second number"
                    value={secondNumber}
                    onChange={(e) => setSecondNumber(e.target.value)}
                />

                <div id="calc-buttons">
                    <button onClick={() => handleOperation(addition)}>+</button>
                    <button onClick={() => handleOperation(subtraction)}>-</button>
                    <button onClick={() => handleOperation(multiplication)}>*</button>
                    <button onClick={() => handleOperation(division)}>/</button>
                    <button onClick={() => handleOperation(power)}>**</button>
                    <button onClick={clearCalc}>Clear</button>
                </div>

                <h3 id="output">{output}</h3>
            </div>

        </main>
    );
}