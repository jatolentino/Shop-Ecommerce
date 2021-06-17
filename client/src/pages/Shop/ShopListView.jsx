import { useState, useEffect } from "react";
import axios from "axios";
import PageTitle from "../../components/Common/PageTitle";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Footer/Footer";
import ShopListViewArea from "../../components/Shop/ShopListViewArea";
import QuickView from "../../components/Products/QuickView";

function ShopListView() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const showQuickView = (product) => {
    setIsOpen(true);
    setProduct(product);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProduct({});
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_API + "products/")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="shop-list-view-wrapper">
      <PageTitle title="Shop List View" />
      <ShopListViewArea products={products}  showQuickView={showQuickView} />
      <Partner paddingClass=" pbt-50" />
      <Footer />
      <QuickView isOpen={isOpen} closeModal={closeModal} product={product} />
    </div>
  );
}

export default ShopListView;
