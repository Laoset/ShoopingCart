import { useState, useEffect } from "react";
import Axios from "axios";
import {
  addProductToCart,
  removeProductFromCart,
} from "../reducers/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ElectroCategory = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  //Leer mi estado global y ver que productos tengo en mi carro
  const { productsList } = useSelector((state) => state.notes);

  const handlerRemove = (productId) => {
    //Busco el producto que se necesita en mi array de products
    const product = products.find((product) => product.id === productId);
    //Si el producto esta en el carro:
    if (productsList.find((pdt) => pdt.id === productId)) {
      //Hago dispatch de mi action de remover
      dispatch(removeProductFromCart(productId));
    } //Y lo despacho al store
    else {
      dispatch(addProductToCart(product));
    }
  };

  useEffect(() => {
    Axios.get(
      "https://shooping-cart-9je7.vercel.app/api/productos/category/Electronicos"
    ).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <section className="w-full h-full px-6 flex flex-col p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 lg:gap-6 h-full my-2">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white flex flex-col justify-center items-center border-gray-100 border-solid border-2 w-full h-72 rounded-lg hover:scale-110 duration-200"
            >
              <div className="h-28 p-1 w-30">
                <img
                  className="h-28 w-40 rounded-md"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="h-28 text-base pt-1">
                <h4 className="text-black">{product.name}</h4>
                <p className="text-black py-1">
                  <b className="font-normal">Price: $</b>
                  {product.price}
                </p>
                <p className="text-black">
                  <b className="font-normal">Category:</b> {product.category}
                </p>
              </div>
              <div className="p-1">
                <button
                  className={`${
                    productsList.find((pdt) => pdt.id === product.id)
                      ? "bg-red-700"
                      : "bg-green-600"
                  } text-white rounded-md p-1`}
                  onClick={() => handlerRemove(product.id)}
                >
                  {productsList.find((pdt) => pdt.id === product.id)
                    ? "Remove"
                    : "Add"}{" "}
                  to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ElectroCategory;
