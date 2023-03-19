import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/Cart-Context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [BtnBump, setBtnBump] = useState(false);
  const ContextC = useContext(CartContext);
  const { items } = ContextC;
  const NumberOfBadge = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${BtnBump ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false); // 3shan kl ma y3ml bump mra yms7 el class ele esmu bump w y3ed mn el awal
    }, 300);
    return () => {
      //clean up function for the timer
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <React.Fragment>
      <button className={btnClasses} onClick={props.onClickButton}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.badge}>{NumberOfBadge}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
