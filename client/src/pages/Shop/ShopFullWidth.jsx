import { useState, useEffect } from "react";
import axios from "axios";
import PageTitle from "../../components/Common/PageTitle";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Footer/Footer";
import ShopFullWidthArea from "../../components/Shop/ShopFullWidthArea";
import QuickView from "../../components/Products/QuickView";

function ShopFullWidth() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_API + "products/")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const showQuickView = (product) => {
    setIsOpen(true);
    setProduct(product);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProduct({});
  };


  return (
    <div className="shop-full-width-wrapper">
      <PageTitle title="Shop Full Width" />
      <ShopFullWidthArea products={products} showQuickView={showQuickView}/>
      <Partner paddingClass=" ptb-50" />
      <Footer />
      <QuickView isOpen={isOpen} closeModal={closeModal} product={product} />
    </div>
  );
}

export default ShopFullWidth;
