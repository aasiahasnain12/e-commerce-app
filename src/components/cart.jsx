function Cart({ cart =[], removeFromCart }) {
  return (
    <>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-3 mb-3"
        >
          <img 
             src={item.thumbnail} className="h-16 w-16 " />
             <h3 className="font-bold">{item.title}</h3>
             <p>₹ {item.price}</p>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
          
        </div>
        
      ))}
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4 px-6">
        Total: ₹ {cart.reduce((total, item)=> total + item.price, 0)}
        </h2>
    </div>
    </>
    
  );
}

export default Cart;
