import "./style.css";

const Card = ({ product, onClick, btnText }) => {
  const { title,description,price, imgSrc } = product;
  return (
    <div class="content">
      <img src={imgSrc} alt={`${title}_img`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <h6>${price}</h6>
      <ul>
        <li>
          <i class="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-star" aria-hidden="true"></i>
        </li>
      </ul>
      <button onClick={()=>onClick(product)} class="buy-1">{btnText}</button>
    </div>
  );
};

export default Card;
