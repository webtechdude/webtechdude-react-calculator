import React, { useContext, useEffect } from 'react'
import './Buttons.scss'
import { ValContext } from '../App'


const Buttons = () => {
    const { inputVal, setInputVal } = useContext(ValContext)
    useEffect(() => {
        console.log(inputVal)
    }, [inputVal])


    return (
        <div className='button_container grid'>
            <button className='grid-item operator del' onClick={() => setInputVal(inputVal.slice(0, -1))}>DEL</button>
            <button className='grid-item operator ac' onClick={() => { setInputVal("") }}>AC</button>
            <button className='grid-item operator' onClick={() => setInputVal(e => e + "-")}>-</button>
            <button className='grid-item operator' onClick={() => setInputVal(e => e + "+")}>+</button>
            <button className='grid-item' onClick={() => setInputVal(e => e + '9')}>9</button>
            <button className='grid-item' onClick={() => setInputVal(e => e + '8')}>8</button>
            <button className='grid-item' onClick={() => setInputVal(e => e + '7')}>7</button>
            <button className='grid-item operator' onClick={() => setInputVal(e => e + '*')}>&times;</button>
            <button className='grid-item' onClick={() => setInputVal(e => e + '6')}>6</button>
            <button className='grid-item' onClick={() => setInputVal(e => e + '5')}>5</button>
            <button className='grid-item' onClick={() => setInputVal(e => e + '4')}>4</button>
            <button className='grid-item operator' onClick={() => setInputVal(e => e + '/')}>&divide;</button >
            <button className='grid-item' onClick={() => setInputVal(e => e + '3')}>3</button>
            <button className='grid-item' onClick={() => setInputVal(e => e + '2')}>2</button>
            <button className='grid-item' onClick={() => setInputVal(e => e + '1')}>1</button>
            <button className='grid-item operator' onClick={() => setInputVal(e => -e)}>+/-</button>
            <button className='grid-item zero' onClick={val => setInputVal(e => e + '0')}>0</button>
            <button className='grid-item dot' onClick={() => setInputVal(e => e + ".")}>.</button>
            <button className='grid-item operator equal' onClick={() => { setInputVal(e => eval(e).toString()) }}> = </button>
        </div >
    )
}

export default Buttons