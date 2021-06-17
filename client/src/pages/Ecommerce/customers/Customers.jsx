import "./customers.scss"
import Sidebar from "../../../components/Ecommerce/Sidebar/Sidebar"
import Navbar from "../../../components/Ecommerce/Navbar/Navbar"
import CustomersTable  from "../../../components/Ecommerce/CustomersTable/CustomersTable"

const Customers = () => {
  return (
    <div className="customers">
      <Sidebar colorMenuCustomers={true}/>
      <div className="listContainer">
        <Navbar/>
        <CustomersTable />
      </div>
    </div>
  )
}

export default Customers