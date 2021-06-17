import BlogListViewArea from "../../components/Blog/BlogListViewArea";
import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";

function BlogRightSidebar() {
  return (
    <div className="blog-right-sidebar-wrapper">
      <PageTitle title="Blog Right Sidebar" />
      <BlogListViewArea />
      <Footer />
    </div>
  );
}

export default BlogRightSidebar;
