import Axios from "axios";
import { useState } from "react";

export const RegisterForm = (props) => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function handleSubmitRegister(e) {
    e.preventDefault();
    Axios.post("https://shooping-cart-9je7.vercel.app//api/usuarios", {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    }).then((res) => {
      props.onFormSwitch("login");
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <>
      <div className="bg-fondoNuevo w-full h-full flex flex-col">
        <div className="absolute left-4 top-3 w-36 h-24m-0 p-0 ">
          <h1 className="font-bold text-5xl hover:animate-pulse hover:text-nuevoBoton text-nuevoBoton2 font-marca">
            #AKCS
          </h1>
        </div>
        <form
          onSubmit={(e) => handleSubmitRegister(e)}
          className="w-full h-full"
        >
          <div className="flex justify-center h-screen w-screen items-center">
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <h1 className="text-center text-3xl font-bold text-slate-50 mb-6">
                REGISTER
              </h1>

              <div className="w-3/4 mb-6">
                <input
                  onChange={(e) => handle(e)}
                  id="first_name"
                  value={data.first_name}
                  placeholder="First Name"
                  type="text"
                  required=""
                  className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                />
              </div>
              <div className="w-3/4 mb-6">
                <input
                  onChange={(e) => handle(e)}
                  id="last_name"
                  value={data.last_name}
                  placeholder="Last Name"
                  type="text"
                  required=""
                  className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                />
              </div>
              <div className="w-3/4 mb-6">
                <input
                  onChange={(e) => handle(e)}
                  id="email"
                  value={data.email}
                  placeholder="Email"
                  type="email"
                  required=""
                  className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                />
              </div>
              <div className="w-3/4 mb-6">
                <input
                  onChange={(e) => handle(e)}
                  id="password"
                  value={data.password}
                  placeholder="Password"
                  required=""
                  type="password"
                  className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                />
              </div>
              <div className="w-3/4 mt-4">
                <button className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700">
                  REGISTER
                </button>
              </div>
              <button
                onClick={() => props.onFormSwitch("login")}
                className="text-slate-300 underline cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
