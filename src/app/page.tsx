import Hero from "@/components/Hero/Hero";
import About from "@/components/HomePageMain/About";
import Categories from "@/components/HomePageMain/Categories";
import Footer from "@/components/HomePageMain/Footer";
import Products from "@/components/HomePageMain/Products";

const Home = async () => {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <About/>
      <Footer/>
    </>
  );
};

export default Home;
