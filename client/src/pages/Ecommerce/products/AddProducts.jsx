import "./addproducts.scss"
import Sidebar from "../../../components/Ecommerce/Sidebar/Sidebar";
import Navbar from "../../../components/Ecommerce/Navbar/Navbar"
import ProductForm from "./ProductForm"

const AddProducts = () => {
  return (
    <div className="addproducts">
        <Sidebar dropTheMenu={true} colorMenuProducts={true}/>
        <div className="listContainer">
            <Navbar/>
            <ProductForm/>
      </div>
    </div>
  )
}

export default AddProducts