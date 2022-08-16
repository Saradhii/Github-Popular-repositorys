import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import Posts from '../ALL/Post';
import Pagination from '../ALL/Pagination';

const JavaScript = () => {
  const [data,setData]=useState([]);
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
      const getData = async () => {
        let res = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${id}`)
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

export default JavaScript