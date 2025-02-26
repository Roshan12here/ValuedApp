import { products } from "../../data/product";

const PopularProductCard = () => {
  return (
    <div 
      className="flex flex-wrap justify-center gap-6 min-h-screen
                 bg-[#fff] px-4 py-16"
    >
      {products.map((product, index) => (
        <div
          key={index}
          className="relative w-full max-w-[300px] bg-[#004493] rounded-2xl
                   overflow-hidden transform transition-all duration-500
                   hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
          style={{
            animation: `Appear 0.6s ease forwards`,
            animationDelay: `${index * 0.1}s`
          }}
        >
          <img 
            src={product.imgURL}
            alt={product.name}
            className="w-full h-[300px] object-cover transition-transform
                       duration-300 hover:scale-105 hover:rotate-1 hover:-rotate-x-3
                       hover:-rotate-y-3 transform"
          />
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="mt-2">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Add this at the bottom of your component file
const appearAnimation = `
  @keyframes Appear {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default PopularProductCard;