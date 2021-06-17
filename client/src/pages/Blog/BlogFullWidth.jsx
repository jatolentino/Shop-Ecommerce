import BlogArea from "../../components/Blog/BlogArea";
import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";

function BlogFullWidth() {
  return (
    <div className="blog-full-width-wrapper">
      <PageTitle title="Blog Full Width" />
      <BlogArea containerClass="container-fluid" />
      <Footer />
    </div>
  );
}

export default BlogFullWidth;
