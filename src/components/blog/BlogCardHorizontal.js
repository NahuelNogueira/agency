import { useEffect } from "react"
import { Link } from "react-router-dom"
import moment from "moment"

function BlogCardHorizontal({data, index}){
    useEffect(()=>{

    },[])

    return(
        <li>
            <Link to={`/blog/${data.slug}`} 
                onMouseEnter={() => {
                    const img = document.getElementById(index);
                    img.classList.add('object-scale-down');
                    const title = document.getElementById(`title`+data.id);
                    title.classList.add('text-cyan-500');
                }}
                onMouseLeave={() => {
                    const img = document.getElementById(index);
                    img.classList.remove('object-scale-down');
                    const title = document.getElementById(`title`+data.id);
                    title.classList.remove('text-cyan-500');
                }}
            className="block relative hover:shadow-card rounded-lg transition duration-300 ease-in-out">
              <div className="flex items-center my-8 ">
                <div className="lg:flex min-w-0 lg:flex-1 items-center">
                  <figure className="lg:flex-shrink-0">
                    <img 
                    id={index}
                    className="lg:h-80 lg:w-80 w-full object-cover rounded-lg" src={data.thumbnail} alt="" />
                  </figure>
                  <div className="min-w-0 flex-1 px-8 p-4">
                    <p id={`title`+data.id} className="lg:mt-0 lg:absolute lg:top-4 leading  8 text-3xl pb-4 font-bold transition duration-300 ease-in-out">{data.title.length > 100 ? data.title.slice(0,99): data.title}</p>
                    <div className="lg:absolute lg:top-28">
                      <span className="hover:text-cyan-500 mt-2 font=medium text-sm"><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> &middot;
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
export default BlogCardHorizontal

