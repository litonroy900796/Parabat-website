import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectItem } from "../Redux/Slice/AddcartSlice";
import Product from "./Product";

export default function Productlist() {
  const [products, setProducts] = useState([]);
  const [createloading, setCreateLoading] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selectData = useSelector(selectItem);
  const fatchdata = async () => {
    setLoading(true);
    let reponsive = await fetch(
      "https://course-api.com/react-store-products"
    ).then((res) => res.json());
    setProducts(reponsive);
    setCreateLoading(createPacination(reponsive));
    setLoading(false);
  };
  useEffect(() => {
    fatchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function createPacination(items, load = 8, offset = 0) {
    let array = [];
    items.forEach((item, index) => {
      if (index >= offset && index < offset + load) {
        array.push(item);
      }
    });
    return array;
  }
  function loadMore() {
    if (createloading.length === products.length) return;
    const newProduct = createPacination(products, 8, createloading.length);
    setCreateLoading([...createloading, ...newProduct]);
  }
  function addbasket(product) {
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
  }

  function exist(id) {
    const find = selectData.filter((item) => item.id === id);
    return !!find.length;
  }
  return (
    <>
      <div className="sm:mx-2 md:px-20 px-5 sm:px-10 pt-20 pb-20 sm:ml-0 ml-6">
        <div className="flex justify-between mb-10 sm:flex-row flex-col ">
          <h1 className="w-fit md:text-4xl sm:text-2xl text-4xl  font-bold ">
            Shop By Product
          </h1>
          <p className="w-[21rem] text-sm text-gray-400">
            We are solving the biggest problems in furniture.You can easily
            search for what product youwant{" "}
          </p>
        </div>
        <div className="flex flex-wrap">
          {loading && (
            <div className="flex justify-center m-auto align-middle mt-10">
              <TailSpin
                height="100"
                width="100"
                color="red"
                ariaLabel="loading"
              />
            </div>
          )}

          {!!createloading.length &&
            createloading?.map((product, index) => (
              <Product
                {...product}
                key={index}
                onclick={() => addbasket(product)}
                exist={exist}
              />
            ))}
        </div>
        {createloading.length !== products.length && (
          <button
            className="bg-black text-white
      py-3 px-5  z-10 block mx-auto mt-10 cursor-pointer "
            onClick={loadMore}
          >
            LoadMore
          </button>
        )}
      </div>
    </>
  );
}
