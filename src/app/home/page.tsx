import { Navbar } from "../components/navbar";
import { ProductList } from "../components/productList";
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-2/4">
        <Image src={"/wallpaper.jpg"} width={1500} height={100} alt="jhow jumping" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      </div>
      <ProductList />
    </>
  );
};

export default Home;