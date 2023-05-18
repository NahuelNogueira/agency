import SmallSetPaginationSearch from 'components/pagination/SmallSetPaginationSearch'
import BlogCardSearch from '../BlogCardSearch'

function BlogList({posts,get_blog_list_page,count,term}){
    return(
        <div className="overflow-hidden px-8 bg-white">
      <ul className="divide-y space-y-8 gap-8 divide-gray-200">
        {posts&&posts.map((posts,index) => (
            <BlogCardSearch data={posts} key={index} index={index}/>
        ))}
      </ul>
      <SmallSetPaginationSearch list_page={get_blog_list_page} list={posts} term={term} count={count}/>
    </div>
    )
}
export default BlogList