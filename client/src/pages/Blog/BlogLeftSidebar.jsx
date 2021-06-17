import BlogLeftSidebarArea from "../../components/Blog/BlogLeftSidbarArea";
import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";

function BlogLeftSidebar() {
  return (
    <div className="blog-left-sidebar-wrappper">
      <PageTitle title="Blog Left Sidebar" />
      <BlogLeftSidebarArea />
      <Footer />
    </div>
  );
}

export default BlogLeftSidebar;
