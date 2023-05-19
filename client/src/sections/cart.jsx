import { useSelector, useDispatch } from "react-redux";
import { removeProductFromCart } from "../reducers/cart/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  //De aca saco todo los products
  const { productsList, totalCount } = useSelector((state) => state.notes);
  //Para eliminar dispacho mi action remove con su ID correspondiente
  const handleRemoveProduct = (productId) =>
    dispatch(removeProductFromCart(productId));
  //Creando un total price
  let totalPrice = 0;

  return (
    <div className="h-auto w-full flex justify-center p-2 ">
      <div className="bg-white  rounded-md flex flex-col text-center lg:w-[50%]">
        <p className="">Tu carrito hasta ahora :</p>
        <div className="flex flex-col ">
          {productsList.map((product) => {
            totalPrice += product.price;
            return (
              <>
                <div
                  className=" h-24 flex flex-row  font-bold  w-full justify-around py-2"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    alt=""
                    className="xs:w-[25%] sm:w-[15%] lg:w-[5%]"
                  />
                  <p className="w-[25%] self-center">{product.name}</p>
                  <p className="w-[25%] self-center">${product.price}</p>
                  <button
                    className="btn btn-danger bg-red-600 rounded-md p-1 self-center"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    Quitar
                  </button>
                </div>
                <hr />
              </>
            );
          })}
        </div>
        <div className="flex justify-around ">
          <div className="flex flex-row p-2 gap-1">
            <h2 className="font-semibold ">Cantidad de productos :</h2>
            <p>{totalCount}</p>
          </div>
          <div className="flex fles-row p-2 pr-2 gap-1">
            <h2 className="font-semibold">Precio total : </h2>
            <p>${totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
