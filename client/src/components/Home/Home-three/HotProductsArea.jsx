import { Link } from "react-router-dom";
import { Image } from "cloudinary-react"
import hotProducts1 from "../../../assets/img/hot-products/hot-products-1.jpg";
import hotProducts2 from "../../../assets/img/hot-products/hot-products-2.jpg";

function HotProductsArea({ 
  products,
  addToCart,
  showQuickView
}) {
  return (
    <section className="hot-products-area pb-20">
      <div className="container">
        <div className="section-title">
          <h2>Hot products</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="single-hot-featured">
              <img src={hotProducts1} alt="image" />

              <div className="featured-content">
                <span>Featured</span>
                <h3>Best deal on the camera collection</h3>
                <div className="tag">30% Off</div>

                <div className="featured-btn">
                  <a href="#" className="featured-btn-one">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="row">
              { products && products.slice(0, 4).map(product => {
                return (
                  <div className="col-lg-3 col-sm-6" key={product._id}>
                    <div className="single-hot-products">
                      <div className="hot-products-image">
                        <Link to={`/products-details/${product._id}`}>
                          <Image
                            key={product._id}
                            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                            publicId={product.image_public_id}
                            width="300"
                            crop="scale"
                          />
                        </Link>
                        <div className="tag">New</div>
                        <ul className="hot-action">
                          <li>
                            <span className="addtocart-icon-wrap" onClick={() => addToCart(product)}>
                              <i className="flaticon-shopping-cart"></i>
                            </span>
                          </li>
                          <li>
                            <a href="#">
                              <i className="flaticon-heart"></i>
                            </a>
                          </li>
                          <li>
                            <span className="quickview-icon-wrap quick-icon" onClick={() => showQuickView(product)}>
                              <i className="flaticon-view"></i>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="hot-products-content">
                        <h3>
                          <Link to="/products-details/60447200e3108c0a9086757c">{product.name}</Link>
                        </h3>
                        <span>${product.price}</span>
                      </div>
                    </div>
                  </div>
                )
              }) }   
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotProductsArea;
