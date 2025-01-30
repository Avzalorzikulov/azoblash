import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import Cards from "../../components/Cards/Cards";
import Blog from "../../components/Blog/Blog";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Cards />
      <Blog />
      <Footer />
    </div>
  );
}
