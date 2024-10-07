import React, { useEffect, useState } from 'react'

const List = ({counter}) => {
    const [item, setItem] = useState([])

    useEffect(()=>{
        setItem(counter())
        console.log("items change just now");
    },[counter])
  return (
    <div>
        <h2>All Number</h2>
        {item.map((ls, index)=><p key={index}>{ls}</p>)}
    </div>
  )
}
export default List