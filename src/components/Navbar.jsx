function Navbar({ cartCount, setShowCart }) {
  return (
    <div className="flex justify-between items-center px-6 py-4 
    bg-[#0D0D0D] text-white">
      
      <h1
  onClick={() => setShowCart(false)}
  className="text-xl font-bold cursor-pointer"
>
  My-Shopping-App
</h1>
      
      <button
        onClick={() => setShowCart(true)}
        className="bg-white text-gray-800 px-4 py-1 rounded"
      >
        Cart ({cartCount})
      </button>
    </div>
  );
}

export default Navbar;
