import React, { useState } from "react";
import Addcart from "../components/Addcart";
import CofiSection from "../components/CofiSection";
import Communication from "../components/Communication";
import CustomarList from "../components/CustomarList";
import DreamSection from "../components/DreamSection";
import Hero from "../components/Hero";
import HeroSliderList from "../components/HeroSliderList";
import Productlist from "../components/Productlist";
import SelvingSection from "../components/SelvingSection";
import ShopingCardList from "../components/ShopingCardList";

export default function Home() {
  const [clickable, setClickable] = useState(false);

  function handleclick() {
    if (clickable === false) {
      setClickable(true);
    } else if (clickable === true) {
      setClickable(false);
    }
  }
  return (
    <div>
      <Hero />
      <HeroSliderList />
      <CofiSection />
      <SelvingSection />
      <Productlist />
      <DreamSection />
      <CustomarList />
      <Communication />
      {!clickable && <Addcart click={handleclick} />}
      {clickable && <ShopingCardList click={handleclick} />}
    </div>
  );
}
