import iconCart from "./images/icon-cart.svg";
import imageAvatar from "./images/image-avatar.png";

export default function App() {
  return (
    <div>
      <Nav />
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
