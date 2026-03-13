function Menu() {
  const menuItems = [
    {
      name: '辣辣',
      desc: '特辣鮮甜玉米,青辣玉米,蜂辣玉米',
      price: '$20',
      img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=200&q=80',
    },
    {
      name: '蜂蜜玉米',
      desc: '繞繞鮮蜜玉米,特製玉米,鴿製醬汁',
      price: '$20',
      img: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=200&q=80',
    },
    {
      name: '香抛玉米',
      desc: '繞繞鮮蜜玉米,特製玉米,辣辣玉米',
      price: '$20',
      img: 'https://images.unsplash.com/photo-1486328228599-85db4443971f?w=200&q=80',
    },
    {
      name: '鱈辣玉米',
      desc: '蜂蜜藍玉米,辣辣鮮甜玉米',
      price: '$20',
      img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=200&q=80',
    },
    {
      name: '香沖玉米',
      desc: '香辣辣道,蜂蜜鮮甜玉米',
      price: '$20',
      img: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=200&q=80',
    },
    {
      name: '香仁玉米',
      desc: '香仁辣抹,辣辣鮮甜玉米',
      price: '$20',
      img: 'https://images.unsplash.com/photo-1486328228599-85db4443971f?w=200&q=80',
    },
  ]

  return (
    <section className="menu" id="menu" aria-label="精選菜單">
      <div className="section-header">
        <div className="section-header__line" aria-hidden="true"></div>
        <h2 className="section-header__title">精選菜單</h2>
        <div className="section-header__line" aria-hidden="true"></div>
      </div>

      <div className="menu__grid" role="list" aria-label="菜單列表">
        {menuItems.map((item, index) => (
          <article className="menu-card" role="listitem" key={index}>
            <img
              className="menu-card__img"
              src={item.img}
              alt={item.name}
              onError={e => (e.target.style.background = '#C8961C')}
            />
            <div className="menu-card__body">
              <p className="menu-card__name">{item.name}</p>
              <p className="menu-card__desc">{item.desc}</p>
              <p className="menu-card__price">{item.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Menu
