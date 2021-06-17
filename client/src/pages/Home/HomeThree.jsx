import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Support from "../../components/Common/Support";
import NewArrivals from "../../components/Common/NewArrivals";
import Collection from "../../components/Common/Collection";
import BestSellers from "../../components/Common/BestSellers";
import SpecialProducts from "../../components/Common/SpecialProducts";
import Testimonial from "../../components/Common/Testimonial";
import LatestNews from "../../components/Common/LatestNews";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Home/Home-three/Banner";
import OfferProductsArea from "../../components/Home/Home-three/OfferProductsArea";
import HotProductsArea from "../../components/Home/Home-three/HotProductsArea";
import FeaturedArea from "../../components/Home/Home-three/FeaturedArea";
import QuickView from "../../components/Products/QuickView";
import Preloader from "../../components/Common/Preloader";

import cartContext from "../../contexts/cart-context";

function HomeThree() {
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
        <div className="home-three-wrapper">
          <div className="main-slider-with-categories">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <Banner />
                </div>
                <div className="col-lg-4 col-md-12">
                  <FeaturedArea />
                </div>
              </div>
            </div>
          </div>
          <Support paddingClass="pt-20 pb-50" />
          <NewArrivals
            paddingClass="pb-20"
            products={products}
            addToCart={addToCart}
            showQuickView={showQuickView}
          />
          <Collection />

          <div className="pb-20">
            <OfferProductsArea
              products={products}
              addToCart={addToCart}
              showQuickView={showQuickView}
            />
          </div>

          <BestSellers
            paddingClass="pb-20"
            products={products}
            addToCart={addToCart}
            showQuickView={showQuickView}
          />
          <HotProductsArea
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

export default HomeThree;
