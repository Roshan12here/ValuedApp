import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/' className='flex items-center'>
          <img
            src='/test.png'
            alt='logo'
            className='m-0 h-[88px] w-auto object-contain max-w-[200px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-[#C20E4D] transition-colors'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
     
        <div className='hidden max-lg:block'>
          <img 
            src={hamburger} 
            alt='hamburger icon' 
            width={25} 
            height={25} 
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
