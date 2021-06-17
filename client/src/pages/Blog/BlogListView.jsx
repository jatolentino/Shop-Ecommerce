import BlogListViewArea from "../../components/Blog/BlogListViewArea";
import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";

function BlogListView() {
  return (
    <div className="blog-list-view-wrapper">
      <PageTitle title="Blog List View" />
      <BlogListViewArea />
      <Footer />
    </div>
  );
}

export default BlogListView;
