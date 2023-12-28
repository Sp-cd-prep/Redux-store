import React from 'react'
import {useSelector} from 'react-redux'

const AddToCart = () => {

    const cartItems = useSelector(state=>state.blog.cart)
    // console.log(data)

  return (
    <div className='blog-container'>
        <h1>Saved Items</h1>
        {cartItems.map(item=>(
            <div key={item.id} className="blog-item">
                <img src={item.image} alt={item.name}/>
                <p>{item.text}</p>
            </div>
        ))}
    </div>
  )
}

export default AddToCart