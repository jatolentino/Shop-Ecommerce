function Price() {
  return (
    <>
      <h3 className="widget-title">Price</h3>

      <form className="price-range-content">
        <div className="price-range-bar" id="range-slider"></div>
        <div className="price-range-filter">
          <div className="price-range-filter-item d-flex align-items-center order-1 order-xl-2">
            <h4>Range:</h4>
            <input type="text" id="price-amount" readonly />
          </div>

          <div className="price-range-filter-item price-range-filter-button order-2 order-xl-1">
            <button className="btn btn-red btn-icon">Filter</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Price;
