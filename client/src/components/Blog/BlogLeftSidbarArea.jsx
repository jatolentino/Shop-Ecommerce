import Categories from "../Widgets/Categories";
import PopularPosts from "../Widgets/PopularPosts";
import PopularTags from "../Widgets/PopularTags";
import Search from "../Widgets/Search";
import Blogs from "./__blogs__/Blogs";

function BlogLeftSidebarArea() {
  return (
    <section className="blog-area bg-color bg-ffffff pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <aside className="widget-area">
              <div className="widget widget_search">
                <Search />
              </div>

              <div className="widget widget_categories">
                <Categories />
              </div>

              <div className="widget widget_ejon_posts_thumb">
                <PopularPosts />
              </div>

              <div className="widget widget_tag_cloud">
                <PopularTags />
              </div>
            </aside>
          </div>

          <div className="col-lg-7 col-md-12">
            <Blogs />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogLeftSidebarArea;
