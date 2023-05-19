import Axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/user/userSlice";
//Este ref me permite pasar una referencia de un elemento, como un QuerySelector del document
import { useRef } from "react";
//Router dom
import { useNavigate } from "react-router-dom";

export const FormularioLogin = (props) => {
  //Router!
  const navigate = useNavigate();
  //Dispatch!
  const dispatch = useDispatch();
  //UseRef!
  const emailField = useRef(null);
  const passwordField = useRef(null);

  //PETICION API
  const handleSubmit = (evento) => {
    evento.preventDefault();
    Axios.get("https://shooping-cart-9je7.vercel.app/api/usuarios").then(
      (response) => {
        //Esta constante me trae todos los usuarios de mi API
        const users = response.data.users;
        //aca busco el usuario que necesito si es que coincide su mail con mi data
        const userValidEmail = users.find(
          (user) => user.email === emailField.current.value
        );
        const userValidPassword = users.find(
          (user) => user.password === passwordField.current.value
        );
        //Si tengo usuario entonces entro
        if (userValidEmail && userValidPassword) {
          //Si coincide mi password con lo que tengo actualmente en el input, ingreso
          if (userValidEmail.password === passwordField.current.value) {
            dispatch(
              setUser({
                email: userValidEmail.email,
                fullName: `${userValidEmail.first_name} ${userValidEmail.last_name}`,
                token: Date.now(),
              })
            );
            //Si accede a esto le mando a la siguiente ruta:
            navigate("/home");
            localStorage.setItem("sesion", "1");
          } else {
            alert("Contrasena incorrecta");
          }
        } else {
          alert("Datos incorrectos");
        }
      }
    );
  };
  return (
    <div className="bg-fondoNuevo w-full h-full">
      <div className="absolute left-4 top-3 w-36 h-24m-0 p-0 ">
        <h1 className="font-bold text-5xl hover:animate-pulse hover:text-nuevoBoton text-nuevoBoton2 font-marca">
          #AKCS
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center h-screen w-screen items-center">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h1 className="text-center text-3xl font-bold text-slate-50 mb-6">
              LOG IN
            </h1>

            <div className="w-3/4 mb-6">
              <input
                placeholder="admin@admin.com"
                type="email"
                required=""
                className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                ref={emailField}
              />
            </div>
            <div className="w-3/4 mb-6">
              <input
                placeholder="admin"
                required=""
                type="password"
                className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                ref={passwordField}
              />
            </div>
            <div className="w-3/4 mt-4">
              <button
                type="submit"
                className="py-4 bg-blue-500 w-full rounded text-slate-200 font-bold hover:bg-blue-700"
              >
                LOGIN
              </button>
            </div>
            <button
              onClick={() => props.onFormSwitch("register")}
              className="text-slate-300 underline cursor-pointer"
            >
              Don't have an account? Register here
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
