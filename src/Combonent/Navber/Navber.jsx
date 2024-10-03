import img1 from "../../img/image-removebg-preview (1).png";
import { Link } from "react-router-dom";

export default function Navber() {
  return (
    <nav className="navbar navbar-expand-lg fixed  text-light w-100" id="up">
      <div className="container">
        <div className="w-25">
          <Link
            className="navbar-brand text-light d-flex justify-content-center"
            to=""
          >
            <img src={img1} alt="vanilla" className="w-25" />
          </Link>
        </div>
        <div className=" navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
            <li className="nav-item">
              <Link
                className="nav-link active text-light fs-5"
                aria-current="page"
                to="Home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5" to="About">
                homewear
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5" to="products">
                Pajamas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5" to="Pajamas">
                Tops
              </Link>
            </li>
            <li className="nav-item Link">
              <Link className="nav-link text-light fs-5 " to="Socks">
                Bridal Collection
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5" to="Panties">
                Robes
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
}
