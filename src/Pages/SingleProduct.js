import React, { useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { TailSpin } from "react-loader-spinner";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  addItem,
  decreaseItem,
  increaseItem,
  selectItem,
} from "../Redux/Slice/AddcartSlice";
export default function SingleProduct() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectData = useSelector(selectItem);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetch(
        `https://course-api.com/react-store-single-product?id=${id}`
      ).then((res) => res.json());
      setProduct(data);
      setLoading(false);
    })();
  }, [id]);

  useEffect(() => {
    if (product) {
      setImage(product?.images[0]?.url);
    }
  }, [product]);
  function exist(id) {
    const find = selectData.filter((item) => item.id === id);
    return !!find.length;
  }
  function addbasket() {
    dispatch(
      addItem({
        ...product,
        image: image,
        quantity: 1,
      })
    );
  }
  function increaseItemQuantity(id) {
    dispatch(increaseItem(id));
  }
  function decreaseItemQuantity(id) {
    dispatch(decreaseItem(id));
  }

  const { name, company, price, description, colors, reviews } = product || {};
  return (
    <>
      {loading ? (
        <div className="flex justify-center align-ceneter pb-4 pt-4 ">
          <TailSpin height="100" width="100" color="red" ariaLabel="loading" />
        </div>
      ) : (
        <div className="md:px-20 px-5 sm:px-10">
          <h1>
            <Link to="/">
              <span>Home</span>
            </Link>
            <span>/{name}</span>
          </h1>
          <div className="w-full flex flex-wrap space-x-4 pb-4">
            <div className="w-full md:w-1/2 ">
              <div>
                <InnerImageZoom
                  src={image}
                  zoomSrc={image}
                  className="w-full h-[26rem] object-cover"
                  zoomType="hover"
                />
              </div>
              <div className="flex gap-4 flex-wrap pt-6 ">
                {product?.images.map((img, index) => (
                  <img
                    src={img.thumbnails.large.url}
                    alt="imgage"
                    key={index}
                    className="w-24 h-20 rounded-sm cursor-pointer"
                    onClick={() => setImage(img.thumbnails.large.url)}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold capitalize ">{name}</h1>
              <span className="text-xl  capitalize ">{company}</span>
              <div className="flex flex-col ">
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={4}
                  edit={false}
                />
                <span>reviews({reviews})</span>
              </div>
              <h1 className="text-[#F87171] text-md font-semibold">
                ${price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h1>
              <div>
                <div className="space-y-2">
                  <span className="text-gray-700">Color</span>
                  <div className="flex align-middle space-x-4">
                    {colors?.map((color) => (
                      <div
                        style={{ backgroundColor: color }}
                        className="border-2 border-gray-300 w-8 h-8 rounded-full text-center"
                      >
                        <span className="bg-red-300"></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-2 space-y-2 pb-3">
                <span>Quantity</span>
                <h2>
                  <button
                    onClick={() => decreaseItemQuantity(id)}
                    className="bg-[#90624D] cursor-pointer text-white text-center text-md px-2 rounded-sm "
                  >
                    -
                  </button>
                  {"  "}
                  {selectData.map((item) => item.quantity)}
                  {"  "}
                  <button
                    onClick={() => increaseItemQuantity(id)}
                    className="bg-[#90624D] text-white cursor-pointer rounded-sm text-center text-md px-2"
                  >
                    +
                  </button>
                </h2>
              </div>
              {exist(id) ? (
                <button className="bg-black text-white px-8 py-2 text-md rounded-md capitalize">
                  Allready carted
                </button>
              ) : (
                <button
                  onClick={addbasket}
                  className="bg-black text-white px-8 py-2 text-md rounded-md capitalize"
                >
                  add to cart
                </button>
              )}
            </div>
          </div>
          <div>
            <span className="text-xl font-semibold border-b-2 border-gray-200 ">
              Description
            </span>
            <p className="text-gray-600 mt-2 mb-4 ">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
