import React from 'react'

interface IPaginationProps{
  postsPerPage:number,
  totalPosts: number,
  paginate: (page:number) => void
}

const Pagination = ({postsPerPage, totalPosts, paginate}:IPaginationProps) => {
  const pageNumbers= [];
  
  for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers?.push(i);
  }
  return (
    <nav>
      <ul>
        {
          pageNumbers?.map((page:number, key:number)=>(
            <li key={key}>
              <a onClick={()=> paginate(page)} href="!#">{page}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Pagination