import React from 'react'
type BlogCardProps = {
    thumbnail: string;
    children: string;
}
const BlogCard: React.FC<BlogCardProps> = ({children, thumbnail}) => {
  return (
    <div className='flex flex-row md:flex-col gap-2 justify-center items-start'>
      <img src={thumbnail} alt="" className='w-1/2 object-cover md:w-[230px] md:aspect-square aspect-[3/2]'/>
      <p>{children}</p>
      <a href="#" className='underline hidden md:block'>Read more</a>
    </div>
  )
}

export default BlogCard
