import { NavLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinkClasses = "pb-1 border-b-2 transition-colors duration-300 cursor-pointer text-gray-600 border-transparent hover:text-primary";
  const activeScrollLinkClass = "text-primary border-primary";

  const routerLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `${navLinkClasses} ${isActive ? 'text-primary border-primary' : ''}`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex justify-center items-center p-4">
        <ul className="flex items-center space-x-6 md:space-x-8 font-medium">
          {isHomePage ? (
            <>
              <li><ScrollLink to="sobre" spy={true} smooth={true} offset={-120} duration={500} className={navLinkClasses} activeClass={activeScrollLinkClass}>Sobre</ScrollLink></li>
              <li><ScrollLink to="experiencia" spy={true} smooth={true} offset={-120} duration={500} className={navLinkClasses} activeClass={activeScrollLinkClass}>Experiência</ScrollLink></li>
              <li><ScrollLink to="skills" spy={true} smooth={true} offset={-120} duration={500} className={navLinkClasses} activeClass={activeScrollLinkClass}>Skills</ScrollLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/" className={navLinkClasses}>Sobre</NavLink></li>
              <li><NavLink to="/" className={navLinkClasses}>Experiência</NavLink></li>
              <li><NavLink to="/" className={navLinkClasses}>Skills</NavLink></li>
            </>
          )}

          <li><NavLink to="/projetos" className={routerLinkStyle}>Projetos</NavLink></li>
          <li><NavLink to="/contato" className={routerLinkStyle}>Contato</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;