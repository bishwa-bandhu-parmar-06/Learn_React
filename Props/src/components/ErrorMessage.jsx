import React from "react";

const ErrorMessage = ({ items }) => {
//   const FoodItems = ["Dal", "Rice", "Chapati", "Paneer", "Salad", "Raita", "Papad", "Dessert"];
  return (
    <>{items.length === 0 && <div>Sorry, no food items available</div>}</>
  );
};

export default ErrorMessage;
