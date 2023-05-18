import BlogCardHorizontal from "./BlogCardHorizontal";
import SmallSetPagination from "components/pagination/SmallSetPagination";

function BlogList({ posts, get_blog_list_page, count }) {
  return (
    <div className="overflow-hidden px-8 bg-white">
      <ul className="divide-y space-y-8 gap-8 divide-gray-200">
        {posts &&
          posts.map((posts, index) => (
            <BlogCardHorizontal data={posts} key={index} index={index} />
          ))}
      </ul>
      <SmallSetPagination
        list_page={get_blog_list_page}
        list={posts}
        count={count}
      />
    </div>
  );
}
export default BlogList;
