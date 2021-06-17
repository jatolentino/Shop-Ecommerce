import "./vendors.scss"
import Sidebar from "../../../components/Ecommerce/Sidebar/Sidebar"
import Navbar from "../../../components/Ecommerce/Navbar/Navbar"
import VendorsTable  from "../../../components/Ecommerce/VendorsTable/VendorsTable"

const Vendors = () => {
  return (
    <div className="vendors">
      <Sidebar colorMenuVendors={true}/>
      <div className="listContainer">
        <Navbar/>
        <VendorsTable />
      </div>
    </div>
  )
}

export default Vendors