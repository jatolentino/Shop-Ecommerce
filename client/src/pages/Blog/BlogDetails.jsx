import BlogDetailsArea from "../../components/Blog/BlogDetailsArea";
import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";

function BlogDetails() {
  return (
    <div className="blog-details-wrapper">
      <PageTitle title="Blog Details" />
      <BlogDetailsArea />
      <Footer />
    </div>
  );
}

export default BlogDetails;
