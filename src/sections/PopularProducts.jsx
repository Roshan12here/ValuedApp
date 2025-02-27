import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col  justify-center items-center text-center'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-[#004493]'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
<div className="mt-6">
    <PopularProductCard />
</div>
    </section>
  );
};

export default PopularProducts;
