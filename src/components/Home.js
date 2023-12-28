import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../Redux/Slice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const data = useSelector(state=>state.blog.blogs)
    const dispatch = useDispatch()
    console.log(data)

    const showToastMessage = () => {
        toast.success("Item Saved Succesfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };

      const handleClick =(itemId)=>{
        dispatch(addToCart(itemId));
        showToastMessage();
      }

  return (
    <div className='blog-container'>
        {data.filter(item=>item.category==="Home").map(item=>(
            <div key={item.id} className="blog-item">
                <img src={item.image} alt={item.name}/>
                <p>{item.text}</p>
                <button onClick={()=>{handleClick(item.id)}}>Add to cart</button>
                <ToastContainer />
            </div>
        ))}
    </div>
  )
}

export default Home