import tsmlogo from "./assets/tsmlogo.png";

function Header() {
  return (
    <nav className="navbar bg-light mb-3 p-0">
      <div className="container">
        <a className="navbar-brand" href="/" />
        <div className="d-flex">
          {/* <img src={tsmlogo} alt="logo" className='mr-2' /> */}
          <div>TSM</div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
