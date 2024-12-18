import { useParams } from "react-router-dom"


const BlogDetailPage = () => {
  const params =  useParams<{blogId: string}>();
  return (
    <div>
      This is a single blog page {params.blogId}
    </div>
  )
}

export default BlogDetailPage
