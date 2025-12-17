function ProductCard(item, addToCart ) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-xl 
    transition">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="h-40 w-full object-cover rounded"
      />
      <h2 className="font-bold mt-2">{item.title}</h2>
      <p className="text-green-600 font-bold">₹ {item.price}</p>

      <button
        onClick={() => addToCart(item)}
        className="bg-[#F97316] text-white w-full mt-3 py-2 
        rounded hover:bg-[#ce5a25]"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
