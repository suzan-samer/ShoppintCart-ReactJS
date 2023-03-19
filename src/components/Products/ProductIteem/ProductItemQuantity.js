import React, { useRef ,useState } from "react";
import classes from "./ProductItemQuantity.module.css";
import Input from "../../UI/Input";

const ProductItemQuantity = (props) => {
  const [AmountIsValid,setAmountIsValid]=useState(true);
  const AmountInputRef = useRef();
  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = AmountInputRef.current.value;
    const enteredAmountToNumber = +enteredAmount;
    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountToNumber < 1 ||
      enteredAmountToNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountToNumber);
  };
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={AmountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>-</button>
      <button>+</button>
      {!AmountIsValid && <p>Please Enter a Valid Amount</p>}
    </form>
  );
};

export default ProductItemQuantity;
