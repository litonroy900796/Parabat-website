import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Provider } from "react-redux";
import Pages from "./Pages/Index";
import { store } from "./Redux/Store";
function App() {
  // const [clickable, setClickable] = useState(false);

  // function handleclick() {
  //   if (clickable === false) {
  //     setClickable(true);
  //   } else if (clickable === true) {
  //     setClickable(false);
  //   }
  // }
  return (
    <>
      <Provider store={store}>
        <div className="w-full relative">
          <div className=" z-0 opacity-[1] max-w-6xl  mx-auto bg-[#FFFFFF] m-auto rounded-lg shadow-black pb-10 ">
            <Pages />
          </div>
          {/* {!clickable && <Addcart click={handleclick} />}
          {clickable && <ShopingCardList click={handleclick} />} */}
        </div>
      </Provider>
    </>
  );
}

export default App;
