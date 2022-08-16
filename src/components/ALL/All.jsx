import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import Pagination from './Pagination';
import Posts from "./Post";

const All = () => {
    const [data,setData]=useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    useEffect(() => {
        const getData = async () => {
          let res = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:all`)
          let data = await res.json();
          setData(data.items);
        };
        getData();
      }, []);
      data.sort((a,b)=>{
           return b.stargazers_count - a.stargazers_count
      })
      console.log(data);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
    <div className='main'>
      {/* {data && data.map((e)=>{
        return(
            <a href={e.html_url}>
            <div className='item' key={e.id}>
               <img src={e.owner.avatar_url}/>
               <p>{e.name}</p> 
               <p>{e.language}</p>
               <div className='count'>
                <p>⭐{e.stargazers_count} stars</p>
                <p><img src="https://user-images.githubusercontent.com/17777237/54873012-40fa5b00-4dd6-11e9-98e0-cc436426c720.png"></img>&nbsp;{e.forks_count} forks</p>
               </div>
            </div>
            </a>
        )
      })} */}
      <Posts posts={currentPosts} loading={loading} />
    </div>
    <div className='footer'>
    <Pagination
           postsPerPage={postsPerPage}
           totalPosts={data.length}
           paginate={paginate}
         />
    </div>
    </>
  )
}

export default All