import { useEffect } from "react"
import { Link } from "react-router-dom"
import moment from "moment"

function BlogCardSearch({data, index}){
    useEffect(()=>{

    },[])

    return(
        <li>
            <Link to={`/blog/${data.slug}`}  
                onMouseEnter={() => {
                    const title = document.getElementById(`title`+data.id);
                    title.classList.add('text-orange-500');
                }}
                onMouseLeave={() => {
                    const title = document.getElementById(`title`+data.id);
                    title.classList.remove('text-orange-500');
                }}
            className="block transition duration-300 ease-in-out">
              <div className="flex items-center my-8 ">
                <div className="lg:flex min-w-0 lg:flex-1 items-center">
                  <div className="min-w-0 flex-1 px-8 p-4">
                    <p id={`title`+data.id} className="leading  8 text-3xl pb-4 font-bold transition duration-300 ease-in-out">{data.title.length > 100 ? data.title.slice(0,99): data.title}</p>
                    <div className="">
                      <span className="hover:text-orange-500 mt-2 font=medium text-sm"><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> &middot;
                      <span className="mt-2 font-medium text-sm mx-1">{moment(data.published).format('LL')}</span> &middot;
                      <span className="mt-2 font-medium text-sm mx-1">{data.time_read} min read</span>
                      <p className="mt-4 text-lg font-regular text-gray--600 leading-8">{data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
    )
}
export default BlogCardSearch