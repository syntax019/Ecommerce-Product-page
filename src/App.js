import iconCart from "./images/icon-cart.svg";
import imageAvatar from "./images/image-avatar.png";
import img1 from "./images/image-product-1.jpg";
import img2 from "./images/image-product-2.jpg";
import img3 from "./images/image-product-3.jpg";
import img4 from "./images/image-product-4.jpg";
import imgThumb1 from "./images/image-product-1-thumbnail.jpg";
import imgThumb2 from "./images/image-product-2-thumbnail.jpg";
import imgThumb3 from "./images/image-product-3-thumbnail.jpg";
import imgThumb4 from "./images/image-product-4-thumbnail.jpg";

export default function App() {
  return (
    <div>
      <Nav />
      <div className="body">
        <ImgComponent />
        <Description />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <p>sneakers</p>
        <ul>
          <li>
            <a href="collection">Collections</a>
          </li>
          <li>
            <a href="mens">Mens</a>
          </li>
          <li>
            <a href="women">Womens</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="cartComponent">
        <img src={iconCart} alt="cartImg" />
        <img src={imageAvatar} className="avatar" alt="Avatar" />
      </div>
    </nav>
  );
}

function ImgComponent() {
  return (
    <div className="imgComponent">
      <img src={img1} className="img1" alt="Image1" />
      <div className="thumbnailImage">
        <img src={imgThumb1} className="active" alt="thumbnailImg1" />
        <img src={imgThumb2} alt="thumbnailImg1" />
        <img src={imgThumb3} alt="thumbnailImg1" />
        <img src={imgThumb4} alt="thumbnailImg1" />
      </div>
    </div>
  );
}
function Description() {
  return;
}
