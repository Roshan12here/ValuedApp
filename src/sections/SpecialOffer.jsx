import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container bg-white p-10 rounded-2xl shadow-lg'>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={"/j3.jpg"}
          alt='Special offer'
          width={570}
          height={522}
          className='object-contain drop-shadow-xl'
        />
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold text-[#002E62]'>
          <span className='text-[#002E62]'>Special </span>
          Offer
        </h2>
        <p className='mt-4 text-gray-600'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 text-gray-600'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
   <button
               className='bg-[#002E62] text-white px-6 py-3 rounded-full hover:bg-[#001B40] transition-all duration-300' 

   >
Contect US
   </button>
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-[#002E62]'
            textColor='text-[#002E62]'
            className='px-6 py-3 rounded-full hover:bg-[#002E62] hover:text-white transition-all duration-300'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
