function Hero() {
  return (
    <>
      <section className="hero" aria-label="首頁橫幅">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1601593346740-925612772716?w=1400&q=80"
            alt="炭烤玉米背景圖"
            onError={e => (e.target.style.display = 'none')}
          />
        </div>
        <div className="hero__overlay" aria-hidden="true"></div>
        <div className="hero__content">
          <h1 className="hero__title">傳承古法，炭烤飄香</h1>
          <p className="hero__sub">莊記烤玉米</p>
          <a href="#menu" className="hero__btn">
            立即預約
          </a>
        </div>
      </section>
      <div className="hero-bar" aria-hidden="true"></div>
    </>
  );
}

export default Hero;
