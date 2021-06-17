import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";
import WishListArea from "../../components/Shop/WishListArea";

function WishList() {
  return (
    <div className="wishlist-wrapper">
      <PageTitle title="Wishlist" />
      <WishListArea />
      <Footer />
    </div>
  );
}

export default WishList;
