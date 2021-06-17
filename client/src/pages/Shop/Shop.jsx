import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/Product/ProductAction";
import PageTitle from "../../components/Common/PageTitle";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Footer/Footer";
import ShopArea from "../../components/Shop/ShopArea";
import QuickView from "../../components/Products/QuickView";
import cartContext from "../../contexts/cart-context";

function Shop({ match }) {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();
  const { products, page, pages } = useSelector(
    (state) => state.productReducer
  );
  const context = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

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
    <div className="shop-wrapper">
      <PageTitle title="Shop" />
      <ShopArea
        products={products}
        addToCart={addToCart}
        pages={pages}
        page={page}
        keyword={keyword ? keyword : ""}
        showQuickView={showQuickView}
      />

      <Partner paddingClass="ptb-50" />
      <Footer />
      <QuickView isOpen={isOpen} closeModal={closeModal} product={product} />
    </div>
  );
}

export default Shop;