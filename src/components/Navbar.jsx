import { useState } from 'react';
import { Link } from 'react-router';
import logo from '../assets/zhuangji-logo.jpg';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="主要導覽">
        <div className="navbar__row">
          <a href="#" className="navbar__logo" aria-label="莊記烤玉米首頁">
            <img src={logo} className="navbar__logo-icon" alt="莊記烤玉米" />
            <span className="navbar__logo-zh">莊記烤玉米</span>
            <span className="navbar__logo-en">Zhuang Ji Roasted Corn</span>
          </a>

          <div className="navbar__links navbar__link--active">
            <Link className="navbar__link active" aria-current="page" to="/">
              首頁
            </Link>
            <Link className="navbar__link" to="products">
              產品列表
            </Link>
            <Link className="navbar__link" to="cart">
              購物車
            </Link>
            <Link className="navbar__link" to="checkout">
              結帳
            </Link>
            <Link className="navbar__link" to="login">
              登入
            </Link>
          </div>

          <button
            className="navbar__hamburger"
            aria-label={isMobileMenuOpen ? '關閉選單' : '開啟選單'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className={`navbar__mobile ${isMobileMenuOpen ? 'is-open' : ''}`}
          id="mobile-nav"
          role="menu"
        >
          <Link
            className="navbar__mobile-link"
            aria-current="page"
            to="/"
            role="menuitem"
            onClick={closeMobileMenu}
          >
            首頁
          </Link>
          <Link className="navbar__mobile-link" to="products" onClick={closeMobileMenu}>
            產品列表
          </Link>
          <Link className="navbar__mobile-link" to="cart" onClick={closeMobileMenu}>
            購物車
          </Link>
          <Link className="navbar__mobile-link" to="checkout" onClick={closeMobileMenu}>
            結帳
          </Link>
          <Link className="navbar__mobile-link" to="login" onClick={closeMobileMenu}>
            登入
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
