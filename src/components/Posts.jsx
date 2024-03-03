import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../REDUX/redux-toolkite/fetch/postSlice';

function Posts() {
    const {isLoading , posts , error} = useSelector(state => state.posts)
 
    const dispatch = useDispatch();

    useEffect(()=>{
         dispatch(fetchPosts())
    } ,[])
     

    console.log(posts)

  return (
    <div>
         {
            posts && posts.map(p => (
                 <h2>{p.title}</h2>
            ))
         }
    </div>
  )
}

export default Posts