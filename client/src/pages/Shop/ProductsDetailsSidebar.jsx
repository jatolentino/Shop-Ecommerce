import PageTitle from "../../components/Common/PageTitle";
import ProductsDetailsSidebarArea from "../../components/Shop/ProductsDetailsSidebarArea";
import Footer from "../../components/Footer/Footer";
import NewArrivals from "../../components/Common/NewArrivals";

function ProductsDetailsSidebar() {
  return (
    <div className="prod-details-sidebar-wrap">
      <PageTitle title="Products Details Sidebar" />
      <ProductsDetailsSidebarArea />
      <NewArrivals paddingClass=" pt-50 pb-20" title="Related Products" />
      <Footer />
    </div>
  );
}

export default ProductsDetailsSidebar;
