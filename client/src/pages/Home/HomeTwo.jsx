import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Support from "../../components/Common/Support";
import BestSellers from "../../components/Common/BestSellers";
import Collection from "../../components/Common/Collection";
import Footer from "../../components/Footer/Footer";
import Partner from "../../components/Common/Partner";
import LatestNews from "../../components/Common/LatestNews";
import NewArrivals from "../../components/Common/NewArrivals";
import Category from "../../components/Home/Home-two/Category";
import SpecialProducts from "../../components/Common/SpecialProducts";
import Testimonial from "../../components/Common/Testimonial";
import SpecialOffer from "../../components/Common/SpecialOffer";
import Banner from "../../components/Home/Home-two/Banner";
import FeaturedArea from "../../components/Home/Home-two/FeaturedArea";
import QuickView from "../../components/Products/QuickView";
import Preloader from "../../components/Common/Preloader";

import cartContext from "../../contexts/cart-context";

function HomeTwo() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setisLoading] = useState(true);
  const context = useContext(cartContext);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_API + "products/")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);

  const showQuickView = (product) => {
    setIsOpen(true);
    setProduct(product);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProduct({});
  };

  const addToCart = (product) => {
    let currentItem = {
      _id: product._id,
      name: product.name,
      price: product.price,
      type: product.type,
      total_in_stock: product.total_in_stock,
      image_public_id: product.image_public_id,
      quantity,
    };
    context.addItemToCart(currentItem);
  };

  return (
    <>
      {isLoading === true ? (
        <Preloader />
      ) : (
        <div className="home-two-wrapper">
          <div className="main-slider-with-category">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <Category />
                </div>
                <div className="col-lg-9 col-md-12">
                  <Banner />
                </div>
              </div>
            </div>
          </div>
          <Support paddingClass="ptb-50" />
          <FeaturedArea />
          <BestSellers
            paddingClass="pb-20"
            products={products}
            addToCart={addToCart}
            showQuickView={showQuickView}
          />
          <Collection />

          <SpecialOffer
            paddingClass=" pt-50 pb-50"
            products={products}
            addToCart={addToCart}
            showQuickView={showQuickView}
          />

          <NewArrivals
            paddingClass="pb-20"
            products={products}
            addToCart={addToCart}
            showQuickView={showQuickView}
          />
          <SpecialProducts
            paddingClass="pb-50"
            products={products}
            addToCart={addToCart}
            showQuickView={showQuickView}
          />
          <Testimonial />
          <LatestNews paddingClass="pt-50 pb-20" />
          <Partner paddingClass=" ptb-50" />
          <Footer />
          <QuickView
            isOpen={isOpen}
            closeModal={closeModal}
            product={product}
          />
        </div>
      )}
    </>
  );
}

export default HomeTwo;
