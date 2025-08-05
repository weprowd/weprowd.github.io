import Button from "./Button";

type ButtonType = {
  href: string;
  label: string;
};

type SlideProps = {
  index: number;
  bgImageUrl: string;
  heading: string;
  content: string;
  logo: string;
  buttons: ButtonType[];
};

const CarouselSlide = ({ index, bgImageUrl, heading, content, logo, buttons }: SlideProps) => (
  <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
    <img src={bgImageUrl} className="carousel-item-img d-block w-100" alt="" />
    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-4">
      {index === 0 && <img src={logo} alt="" id="slide-logo" />}
      <h2>{heading}</h2>
      <p>{content}</p>
      {buttons.map((button, idx) => (
        <Button key={idx} href={button.href} label={button.label} />
      ))}
    </div>
  </div>
);

export default CarouselSlide;
