import React from 'react'
import { IPostPageProps, IPostProps } from '../model/PaginationProps';

const Posts = ({postList, loading}: IPostPageProps) => {
  loading && <h2>...loading</h2>;
  return (
    <ul>
    {postList?.map((post:IPostProps, key:number)=>(
       <li key={post?.id}>
        {post?.title}
       </li>
    ))

    }
    </ul>
  )
}

export default Posts