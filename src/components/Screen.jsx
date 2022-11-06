import React, { useContext, useEffect, useRef } from 'react'
import './Screen.scss'
import { ValContext } from '../App'



const Screen = () => {
    const foc = useRef(null)
    useEffect(() => {
        foc.current.focus()

    }, [])

    const { inputVal, setInputVal } = useContext(ValContext)
    return (
        <input ref={foc} id='display' value={inputVal} onChange={e => setInputVal(e.target.value)} type="text" />
    )
}

export default Screen