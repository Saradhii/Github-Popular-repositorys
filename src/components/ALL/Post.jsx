import React from 'react'

const Post = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
      }
  return (
    <>
    {posts.map(e => (
        <>
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
        </>
      ))}
    </>
  )
}

export default Post