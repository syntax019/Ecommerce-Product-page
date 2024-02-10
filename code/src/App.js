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
import plusImg from "./images/icon-plus.svg";
import minusImg from "./images/icon-minus.svg";
import del from "./images/icon-delete.svg";
import closeIcon from "./images/icon-close.svg";
import Menu from "./images/icon-menu.svg";
import { useState } from "react";

export default function App() {
  const [addToCart, setAddToCart] = useState(false);
  const [num, setNum] = useState(0);
  const [addToCartQunatity, setAddToCartQuantity] = useState(0);
  function handleAddToCart() {
    setAddToCart((addToCart) => !addToCart);
  }
  let currNum = addToCartQunatity;
  return (
    <div className="changeColor">
      <Nav num={currNum} onAddToCart={handleAddToCart} />
      <div>
        <Section
          stateAndFunction={{ num, setNum }}
          stateAndFunctionCart={{ addToCartQunatity, setAddToCartQuantity }}
        />
        {addToCart && (
          <CartComponent
            stateAndFunction={{ num, setNum }}
            stateAndFunctionCart={{ addToCartQunatity, setAddToCartQuantity }}
          />
        )}
      </div>
    </div>
  );
}
function Section({ onAddToCart, stateAndFunction, stateAndFunctionCart }) {
  const [closes, setCloses] = useState(false);
  function handleCloses() {
    setCloses((c) => !c);
  }
  return (
    <div className="body">
      {closes ? (
        <div className="imgPopup">
          <img
            src={closeIcon}
            onClick={handleCloses}
            className="closeIcon"
            alt="close"
          />
          <ImgComponent />
        </div>
      ) : (
        ""
      )}
      <ImgComponent closes={closes} setCloses={setCloses} />
      <Description
        onAddToCart={onAddToCart}
        stateAndFunction={stateAndFunction}
        stateAndFunctionCart={stateAndFunctionCart}
      />
    </div>
  );
}
function Nav({ onAddToCart, num }) {
  const [leftBar, setLeftBar] = useState(false);

  function handleLeftBar() {
    setLeftBar((leftBar) => !leftBar);
  }
  return (
    <nav className="nav">
      <div className="logo">
        <img
          src={Menu}
          className="menuBar"
          onClick={handleLeftBar}
          alt="menu-bar"
        />
        <p>sneakers</p>
        {leftBar ? (
          <div className="leftBar">
            <img
              src={closeIcon}
              className="closeBttn"
              onClick={handleLeftBar}
              alt="Close"
            />
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
        ) : (
          ""
        )}
      </div>
      <div className="cartProfile">
        <span onClick={onAddToCart}>
          <img src={iconCart} alt="cartImg" />
          {!num ? null : <span className="cartNum">{num}</span>}
        </span>

        <img src={imageAvatar} className="avatar" alt="Avatar" />
      </div>
    </nav>
  );
}

function ImgComponent({ closes, setCloses }) {
  const [opens] = useState(true);
  function handleOpen() {
    setCloses((c) =>
      opens ? <img src={sliderData.value} className="img1" alt="Image1" /> : ""
    );
  }
  const imagesThumb = [
    { id: 0, value: imgThumb1 },
    { id: 0, value: imgThumb2 },
    { id: 0, value: imgThumb3 },
    { id: 0, value: imgThumb4 },
  ];
  const images = [
    { id: 0, value: img1 },
    { id: 0, value: img2 },
    { id: 0, value: img3 },
    { id: 0, value: img4 },
  ];
  const [sliderData, setSliderData] = useState(images[0]);

  const handleClick = function (index) {
    setSliderData(images[index]);
  };

  return (
    <div className="imgComponent">
      <img
        src={sliderData.value}
        onClick={handleOpen}
        className="img1"
        alt="Image1"
      />
      <div className="thumbnailImage">
        {imagesThumb.map((data, i) => (
          <img
            key={data.id}
            src={data.value}
            onClick={() => handleClick(i)}
            alt="thumbnails"
          />
        ))}
      </div>
    </div>
  );
}
function Description({ stateAndFunction, stateAndFunctionCart }) {
  const { num, setNum } = stateAndFunction;
  const { setAddToCartQuantity } = stateAndFunctionCart;

  function handleSetAddToCartQuantity() {
    setAddToCartQuantity((addToCartQunatity) => (addToCartQunatity = num));
  }
  return (
    <div className="description">
      <p className="companyName">SNEAKER COMPANY</p>
      <h3>Fall Limited Edition Sneakers</h3>
      <p className="productDescription">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="pricingList">
        <div className="pricingDiv">
          <h3>$125.00</h3>
          <p>50%</p>
        </div>
        <p className="previousPrice">$250.00</p>
      </div>

      <div className="actionButton">
        <div className="productAmount">
          <img
            onClick={() => setNum((num) => (num > 0 ? num - 1 : num))}
            src={minusImg}
            className="plusImg"
            alt="minus"
          />
          <p>{num}</p>
          <img
            onClick={() => setNum((num) => num + 1)}
            src={plusImg}
            className="plusImg"
            alt="plus"
          />
        </div>
        <button onClick={handleSetAddToCartQuantity}>Add to Cart</button>
      </div>
    </div>
  );
}
function CartComponent({ stateAndFunction, stateAndFunctionCart }) {
  const { num, setNum } = stateAndFunction;
  const { addToCartQunatity, setAddToCartQuantity } = stateAndFunctionCart;

  const totalAmount = 125.0 * num;
  console.log(totalAmount);
  const [deleted, setDeleted] = useState(addToCartQunatity);
  function handleDeleted() {
    setDeleted((deleted) => !deleted);
    setNum((num) => (num = 0));
    setAddToCartQuantity((addToCartQunatity) => (addToCartQunatity = 0));
  }
  return (
    <div className="cartComponent">
      <h3>Cart</h3>
      <hr />
      {!deleted ? (
        <p className="empty">Your Cart is empty.</p>
      ) : (
        <div className="cartComponentDiv">
          <div>
            <img className="cartImg" src={imgThumb1} alt="img1" />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <span>
                $125.00 X {num} <strong>${totalAmount}</strong>
              </span>
            </div>
            <img src={del} onClick={handleDeleted} alt="cart" />
          </div>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}
