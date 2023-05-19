import { FormularioLogin } from "./sections/loginForm";
import { NavBar } from "./sections/navBar";
import { Cart } from "./sections/cart";

//Componetes de Router
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import TrueHome from "./sections/displayProducts";
import { useEffect, useState } from "react";
import RegisterForm from "./sections/registerForm";
import ElectroCategory from "./components/electroCategory";
import IndumentariaCategoria from "./components/indumentariaCategoria";
import HogarCategoria from "./components/hogarCategoria";
import DeporteCategory from "./components/deporteCategory";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  useEffect(() => {
    let id = localStorage.getItem("sesion");
    if (id) {
      navigate("/home");
    }
    console.log("good");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      {location.pathname === "/" ? null : (
        <header className=" md:h-[90px] xs:h-[110px] w-full  bg-[#232f3e]">
          <NavBar />
        </header>
      )}
      <main className="w-full h-full bg-[#ebebeb] ">
        <Routes>
          <Route
            exact
            path="/"
            element={
              currentForm === "login" ? (
                <FormularioLogin onFormSwitch={toggleForm} />
              ) : (
                <RegisterForm onFormSwitch={toggleForm} />
              )
            }
          />
          <Route path="/home" element={<TrueHome />} />
          <Route path="/catElectro" element={<ElectroCategory />} />
          <Route path="/catIndumen" element={<IndumentariaCategoria />} />
          <Route path="/catHogar" element={<HogarCategoria />} />
          <Route path="/catDeporte" element={<DeporteCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<h1>NO EXISTE TAL RUTA</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
