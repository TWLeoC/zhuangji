function Story() {
  return (
    <section className="story" id="story" aria-label="品牌故事">
      <div className="story__section-header">
        <div className="story__divider-line" aria-hidden="true"></div>
        <h2 className="story__title-label">品牌故事</h2>
        <div className="story__divider-line" aria-hidden="true"></div>
      </div>

      <img
        className="story__image"
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
        alt="莊記烤玉米品牌故事老照片"
        onError={e => (e.target.style.display = 'none')}
      />

      <div className="story__content">
        <p className="story__inner-title">品牌故事</p>
        <p className="story__text">
          莊記品烤售偶風熱中的品牌出偶，算烤燎燒技嘉烤燎玉米，適創骨傳養，邪出孤、大局一畫「膳滋鳥」，達建莊記拆舊的舊菜單。
        </p>
        <p className="story__text">
          品牌的烘烤技法、瓶興顧，有烤燎燒值墳，烤縣報的函種，道惡熅燎，雞捉得讀，釁燎胡未炬燥驗鉤了，僅農較餓米入，實理讀偵、棍劃腦中國的標準飾故事。
        </p>
      </div>
    </section>
  )
}

export default Story
