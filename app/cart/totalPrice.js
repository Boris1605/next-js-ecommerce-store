export default function totalPrice(order) {
  if (order.length > 0) {
    const eachProductPrice = order.map((obj) => {
      return obj.price * obj.quantity;
    });
    return eachProductPrice.reduce((acc, currentValue) => {
      return acc + currentValue;
    });
  } else {
    return '0';
  }
}
