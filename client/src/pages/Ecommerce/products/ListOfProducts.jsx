import "./listofproducts.scss"
import Sidebar from "../../../components/Ecommerce/Sidebar/Sidebar"
import Navbar from "../../../components/Ecommerce/Navbar/Navbar"
import Datatable from "../../../components/Ecommerce/ProductsTable/ProductsTable"

const ListOfProducts = () => {
  return (
    <div className="listofproducts">
      <Sidebar colorMenuProducts={true} colorMenuDashboard={false} dropTheMenu={true}/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default ListOfProducts