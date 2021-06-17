import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

function SpecialOffer({ products }) {
  return (
    <section className="offer-products-area pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Special Offer</h2>
        </div>

        <div className="row justify-content-center">
          {products &&
            products.slice(0, 3).map((product) => {
              return (
                <div className="col-lg-4 col-md-6" key={product._id}>
                  <div className="single-offer-products">
                    <div className="offer-products-image">
                      <Link to={`/products-details/${product._id}`}>
                        <Image
                          key={product._id}
                          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                          publicId={product.image_public_id}
                          width="400"
                          height="342"
                          crop="scale"
                        />
                      </Link>
                      <div className="tag">-20%</div>
                    </div>

                    <div className="offer-products-content">
                      <span>Gadget</span>
                      <h3>
                        <Link to={`/products-details/${product._id}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <div className="price">
                        <span className="new-price">${product.price}</span>
                        <span className="old-price">${(product.price/0.8).toFixed(2)}</span>
                      </div>
                      <ul className="rating">
                        <li>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
