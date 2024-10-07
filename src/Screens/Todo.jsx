import React, { useState, useCallback, useMemo } from 'react'
import List from './List'

const Todo =()=> {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const counter = useCallback(()=>{
        return [number, number+1, number+2, number+3]
    }, [number])

    const theme = {
        backgroundColor:dark?'#333':'#fff',
        color:dark?'#fff':'#333'
    }

console.log('I just re-render')
   

const slowfunction =(number)=>{
    for(let i=1; i <=1000000000; i++);

    return 2 * number
}

let doublenumber = useMemo(()=>{

  return  slowfunction(number)
},[number])

  return (
    <div style={theme}>

<input type="number" className='form-control' value={number} onChange={(event)=>setNumber(parseInt(event.target.value))} />


<button type='button' className='btn btn-primary' onClick={()=>setDark(!dark)}>Change color</button>

{doublenumber}
<List counter={counter} />

    </div>
  )
}

export default Todo;