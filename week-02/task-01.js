const calculateDiscount = (price, discount) => {
  const discountAmount = (price * discount) / 100;

  return price - discountAmount;
};

console.log(calculateDiscount(100, 20)); // 80
console.log(calculateDiscount(250, 10)); // 225
