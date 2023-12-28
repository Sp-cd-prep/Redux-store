import React from 'react'
import {useSelector} from 'react-redux'

const Food = () => {

    const data = useSelector(state=>state.blog)
    // console.log(data)

  return (
    <div className='blog-container'>
        {data.filter(item=>item.category==="Food").map(item=>(
            <div key={item.id} className="blog-item">
                <img src={item.image} alt={item.name}/>
                <p>{item.text}</p>
            </div>
        ))}
    </div>
  )
}

export default Food