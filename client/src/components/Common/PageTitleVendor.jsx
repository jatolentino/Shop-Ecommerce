import { Link } from "react-router-dom";

function PageTitleVendor({ title }) {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content" >
          <h2>{title}
          <Link to="/add-product" className="default-btn" style={{fontSize: '14px',left: '20px',WebkitTransition: 'translateY(+35%)', transform: 'translateY(+35%)'}} >
              Add +
          </Link>
          </h2>

          <ul style={{WebkitTransition: 'translateY(+0%)', transform: 'translateY(+0%)'}}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageTitleVendor;
