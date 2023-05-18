import BlogList from "components/blog/BlogList";
import CategoriesHeader from "components/blog/CategoriesHeaders";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page} from "redux/actions/blog/blog";
import { get_categories } from "redux/actions/categories/categories";

function Blog({
  get_categories,
  categories,
  get_blog_list,
  get_blog_list_page,
  posts,
  count,
  next,
  previous,
}) {

  useEffect(() => {
    window.scrollTo(0, 0)
    get_categories()
    get_blog_list()

  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Hawk | Blog</title>
        <meta
          name="description"
          content="Software and Digital Market Agency."
        ></meta>
        <meta
          name="keywords"
          content="softtware agency, marketing agency, web development"
        ></meta>
        <meta name="robots" content="all"></meta>
        <link rel="canonical" href="https://www.hawk.com"></link>
        <meta name="author" content="Hawk" />
        <meta name="publisher" content="Hawk" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Hawk | Software Agency" />
        <meta
          property="og:description"
          content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones."
        />
        <meta property="og:url" content="https://www.hawk.com/" />
        <meta
          property="og:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />

        <meta name="twitter:title" content="Hawk | Software Agency" />
        <meta
          name="twitter:description"
          content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones."
        />
        <meta
          name="twitter:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <div className="pt-24">
        <CategoriesHeader categories={categories&&categories}/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl my-10">
            <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_page} count={count&&count}/>
            </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
const mapStateToProps=state=>({
  categories: state.categories.categories,
  posts: state.blog.blog_list,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
})

export default connect(mapStateToProps,{
  get_categories,
  get_blog_list,
  get_blog_list_page
}) (Blog)
