import Hero from "@/components/Hero/Hero";
import Categories from "@/components/HomePageMain/Categories";
import Products from "@/components/HomePageMain/Products";

const Home = async () => {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
