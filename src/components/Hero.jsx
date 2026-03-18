import { Link } from 'react-router';
import hero from '../assets/zhuangji-logo-gen1.png';

function Hero() {
  return (
    <>
      <section className="hero" aria-label="首頁橫幅">
        <div className="hero__bg">
          <img src={hero} alt="炭烤玉米背景圖" onError={e => (e.target.style.display = 'none')} />
        </div>

        <div className="hero__content">
          <h1 className="hero__text-group hero__title">傳承古法，炭烤飄香</h1>
          <Link className="hero__btn" to="products">
            立即訂購
          </Link>
        </div>
      </section>
      <div className="hero-bar" aria-hidden="true"></div>
    </>
  );
}

export default Hero;
