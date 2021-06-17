import BlogArea from "../../components/Blog/BlogArea";
import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";
import BlogListViewArea from "../../components/Blog/BlogListViewArea";

function Blog() {
  return (
    <div className="blog-wrapper">
      <PageTitle title="Blog" />
      <BlogListViewArea />
      <Footer />
    </div>
  );
}

export default Blog;
