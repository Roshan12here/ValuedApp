import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container bg-white p-10 rounded-2xl shadow-lg'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-[#002E62]'>
          We Provide You
          <span className='text-[#002E62]'> Super </span>
          <span className='text-[#002E62]'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg text-gray-600'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg text-gray-600'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className='mt-11'>
    <button 
               className='bg-[#002E62] text-white px-6 py-3 rounded-full hover:bg-[#001B40] transition-all duration-300'
>
View Details
      </button>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={"/j1.jpg"}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain drop-shadow-xl'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
