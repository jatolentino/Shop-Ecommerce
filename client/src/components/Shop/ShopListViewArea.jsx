import Search from "../Widgets/Search";
import Categories from "../Widgets/Categories";
import Price from "../Widgets/Price";
import Continents from "../Widgets/Continents";
import BestSellerProducts from "../Widgets/BestSellerProducts";
import Arrival from "../Widgets/Arrival";
import Products from "./__products__/Products";

function ShopListViewArea({ products = [],  showQuickView }) {
  return (
    <section className="shop-area pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Products products={products} showQuickView={showQuickView} />
          </div>

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
        </div>
      </div>
    </section>
  );
}

export default ShopListViewArea;
