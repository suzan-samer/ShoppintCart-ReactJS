import classes from "./ProductItem.module.css";
import React,{useContext} from "react";
import ProductItemQuantity from "./ProductItemQuantity";
import CartContext from '../../../Store/Cart-Context';

const ProductItem = (props) => {
  const ContextC=useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const AddToCartHandler =(amount)=>{
ContextC.addItem({
  id:props.id,
  name:props.name,
  amount:amount,
  price:props.price,
  image:props.image,
});
  }
  return (
    <li className={classes.product}>
      <div>
        <img src={props.image} />{" "}
      </div>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      <div>
        <ProductItemQuantity onAddToCart={AddToCartHandler} id={props.id} />
      </div>
      <div></div>
    </li>
  );
};

export default ProductItem;
