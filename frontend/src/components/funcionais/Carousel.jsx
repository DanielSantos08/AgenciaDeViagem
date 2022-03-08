const Carousel = props =>(
  <section className="Carousel">
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={props.Img1} alt="Primeiro Slide" />
  </div>
  <div className="carousel-item">
    <img src={props.Img2} alt="Segundo Slide" />
  </div>
  <div className="carousel-item">
    <img src={props.Img3} alt="Terceiro Slide" />
  </div>
</div>
<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="sr-only">Anterior</span>
</a>
<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="sr-only">Próximo</span>
</a>
</div>
</section>
)
export default Carousel;