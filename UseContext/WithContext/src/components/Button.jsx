import React, {useContext} from 'react'
import { counterContext } from '../context/context'
const Button = ({value}) => {
    const counter = useContext(counterContext)
  return (
    <div>
        <button>Counter Value is <span>{counter}</span></button>
    </div>
  )
}

export default Button