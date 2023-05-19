//Si quiero leer el STORE necesito :
import { useSelector, useDispatch } from "react-redux";
import { unsetUser } from "../reducers/user/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

export const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const current = useLocation();
  //Mi funcion de deslogeo
  const handleLogout = () => {
    dispatch(unsetUser());
    navigate("/");
    localStorage.removeItem("sesion");
  };
  //
  const handleToCart = () => {
    if (current.pathname === "/home") {
      navigate("/cart");
    } else if (current.pathname === "/catIndumen") {
      navigate("/cart");
    } else if (current.pathname === "/catElectro") {
      navigate("/cart");
    } else if (current.pathname === "/catDeporte") {
      navigate("/cart");
    } else if (current.pathname === "/catHogar") {
      navigate("/cart");
    } else {
      navigate("/home");
    }
  };
  const handleToElectro = () => {
    if (current.pathname === "/home") {
      navigate("/catElectro");
    } else if (current.pathname === "/cart") {
      navigate("/catElectro");
    } else if (current.pathname === "/catDeporte") {
      navigate("/catElectro");
    } else if (current.pathname === "/catHogar") {
      navigate("/catElectro");
    } else if (current.pathname === "/catIndumen") {
      navigate("/catElectro");
    } else {
      navigate("/home");
    }
  };
  const handleToDeporte = () => {
    if (current.pathname === "/home") {
      navigate("/catDeporte");
    } else if (current.pathname === "/cart") {
      navigate("/catDeporte");
    } else if (current.pathname === "/catElectro") {
      navigate("/catDeporte");
    } else if (current.pathname === "/catHogar") {
      navigate("/catDeporte");
    } else if (current.pathname === "/catIndumen") {
      navigate("/catDeporte");
    } else {
      navigate("/home");
    }
  };
  const handleToHogar = () => {
    if (current.pathname === "/home") {
      navigate("/catHogar");
    } else if (current.pathname === "/cart") {
      navigate("/catHogar");
    } else if (current.pathname === "/catElectro") {
      navigate("/catHogar");
    } else if (current.pathname === "/catDeporte") {
      navigate("/catHogar");
    } else if (current.pathname === "/catIndumen") {
      navigate("/catHogar");
    } else {
      navigate("/home");
    }
  };
  const handleToIndumentaria = () => {
    if (current.pathname === "/home") {
      navigate("/catIndumen");
    } else if (current.pathname === "/cart") {
      navigate("/catIndumen");
    } else if (current.pathname === "/catElectro") {
      navigate("/catIndumen");
    } else if (current.pathname === "/catDeporte") {
      navigate("/catIndumen");
    } else if (current.pathname === "/catHogar") {
      navigate("/catIndumen");
    } else {
      navigate("/home");
    }
  };
  const goHome = () => {
    navigate("/home");
  };
  return (
    <>
      <nav className="h-fit flex flex-col  text-white  bg-casiFondo dark:bg-light z-50 w-full ">
        <article className="flex xs:items-center xs:justify-center sm:justify-around mt-1 lg:mt-3 align-middle text-center items-center">
          <h2 className="text-white text-2xl xl:text-4xl font-bold hidden sm:flex">
            Shopping Cart
          </h2>
          <div className="flex flex-row xs:gap-2 gap-5 xs:mb-2 lg:gap-6 flex-wrap xs:p-2 lg:p-0">
            <button
              onClick={handleToElectro}
              className={`text-white xs:text-base sm:text-lg hover:outline-1 hover:outline duration-200 p-1 ${
                current.pathname === "/catElectro" ? "text-red-500" : ""
              }`}
            >
              Electro
            </button>
            <button
              onClick={handleToDeporte}
              className={`text-white xs:text-base sm:text-lg hover:outline-1 hover:outline duration-200  p-1 ${
                current.pathname === "/catDeporte" ? "text-red-500" : ""
              }`}
            >
              Sports
            </button>
            <button
              onClick={handleToHogar}
              className={`text-white xs:text-base sm:text-lg hover:outline-1 hover:outline duration-200  p-1 ${
                current.pathname === "/catHogar" ? "text-red-500" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={handleToIndumentaria}
              className={`text-white xs:text-base sm:text-lg hover:outline-1 hover:outline duration-200  p-1 ${
                current.pathname === "/catIndumen" ? "text-red-500" : ""
              }`}
            >
              Clothes
            </button>
            <button
              onClick={goHome}
              className={`text-white xs:text-base sm:text-lg hover:outline-1 hover:outline duration-200  p-1 ${
                current.pathname === "/home" ? "text-red-500" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={handleToCart}
              className="text-white rounded-md text-lg  p-1 hover:outline-1 hover:outline duration-200"
            >
              {current.pathname === "/home" ||
              current.pathname === "/catElectro" ||
              current.pathname === "/catDeporte" ||
              current.pathname === "/catHogar" ||
              current.pathname === "/catIndumen" ? (
                <FiShoppingCart />
              ) : (
                <IoReturnUpBackSharp />
              )}
            </button>
          </div>
          <div className="flex flex-col justify-center align-middle text-center items-center">
            <p className="text-white text-base lg:text-lg">
              Welcome {user.fullName}
            </p>
            <button
              className="btn btn-primary text-white  rounded-md p-1 text-lg"
              onClick={handleLogout}
            >
              <BiLogOut />
            </button>
          </div>
        </article>
      </nav>
    </>
  );
};
