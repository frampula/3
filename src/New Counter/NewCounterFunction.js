import React, { useState } from 'react';

const NewCounterFunction = (props) => {
    const [state, setState] = useState(0)
    const [step, setStep] = useState(1)

    const increment = () => {
        setState(state + step)
    }

    const changeHandler = ({target: {value}}) => {
        setStep(Number(value))
    }

    return (
        <>
            {state}
            <input type='number' value={step} onChange={changeHandler}/>
            <button onClick={increment}>+</button>
        </>
    );
}

export default NewCounterFunction;
