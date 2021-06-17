import Arrival from "../Widgets/Arrival";
import BestSellerProducts from "../Widgets/BestSellerProducts";
import Categories from "../Widgets/Categories";
import Continents from "../Widgets/Continents";
import Price from "../Widgets/Price";
import Search from "../Widgets/Search";
import Products from "./__products__/Products";

function ShopLeftSidebarArea({ products = [],showQuickView }) {
  return (
    <section className="shop-area bg-ffffff pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <aside className="widget-area">
              <div className="widget widget_search">
                <Search />
              </div>

              <div className="widget widget_categories">
                <Categories />
              </div>

              <div className="widget widget_price">
                <Price />
              </div>

              <section className="widget widget_continents">
                <Continents />
              </section>

              <div className="widget widget_best-seller-products">
                <BestSellerProducts />
              </div>
            </aside>
          </div>

          <div className="col-lg-8 col-md-12">
            <Products products={products} showQuickView={showQuickView}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopLeftSidebarArea;
