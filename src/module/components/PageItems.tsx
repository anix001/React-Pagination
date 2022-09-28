import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from '@mantine/core';
import Posts from '../common/Posts';
import { IPostProps } from '../model/PaginationProps';
// import Pagination from './Pagination';

const PageItems = () => {
    const [postList, setPostList] = useState<IPostProps[]>([]);
    const [loading, setLoading]  = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage, setPostPerPage] = useState<number>(0);

    const fetchPostList = async() => {
      try{
        const response:any = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data:any = response?.data;
        setPostList(data);
        setLoading(false);
      }catch(err:any){
        return Promise.reject(err);
      }
    }

    useEffect(()=>{
        fetchPostList();
       setPostPerPage(10);
    }, []);

    //change page number
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

    //Get current page posts
    const indexOflastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOflastPost - postsPerPage;
    const currentPosts = postList?.slice(indexOfFirstPost, indexOflastPost);

  return (
    <div>
      <h3>Posts</h3>
      <Posts postList={currentPosts} loading={loading}/>
      {/* <Pagination  postsPerPage={postsPerPage} totalPosts={postList?.length}
      paginate={paginate}/> */}
      <Pagination page={currentPage} onChange={setCurrentPage}  total={Math.ceil(postList?.length / postsPerPage)}/>
    </div>
  )
}

export default PageItems