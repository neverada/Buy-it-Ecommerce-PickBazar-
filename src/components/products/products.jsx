
import React, { useEffect, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  toggleCart,
  fetchProducts, // Import the thunk
} from "../../slice/ProductSlice";

// Simplified categories for matching DummyJSON data structure
const Categories = [
  { id: 1, name: "Beauty", subcategories: [{ id: 1, name: "beauty" }] },
  { id: 2, name: "Fragrances", subcategories: [{ id: 2, name: "fragrances" }] },
  { id: 3, name: "Furniture", subcategories: [{ id: 3, name: "furniture" }] },
  { id: 4, name: "Groceries", subcategories: [{ id: 4, name: "groceries" }] },
];

const ProductsComponent = () => {
  const dispatch = useDispatch();

  // Get data and status from Redux
  const products = useSelector((state) => state.product.products);
  const status = useSelector((state) => state.product.status);
  const cartItems = useSelector((state) => state.product.cart);
  const isCartOpen = useSelector((state) => state.product.isCartOpen);

  const [filters, setFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products on mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Handle Filtering
  useEffect(() => {
    if (filters.length !== 0) {
      const filtered = products.filter((product) =>
        filters.includes(product?.category),
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [filters, products]);

  const filterhandler = (subcategory) => {
    const name = subcategory?.name;
    if (!name) return;
    setFilters((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name],
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (status === "loading")
    return <div className="text-center py-20">Loading products...</div>;
  if (status === "failed")
    return (
      <div className="text-center py-20 text-red-500">
        Error loading products.
      </div>
    );

  return (
    <div className="bg-white min-h-screen relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
          Products
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 bg-gray-50 rounded-xl p-6 border border-gray-100 h-fit sticky top-24">
            <h3 className="font-bold text-gray-900 text-lg mb-6">Categories</h3>
            {Categories.map((category) => (
              <div key={category.id} className="mb-6">
                <h4 className="font-bold text-gray-700 text-sm uppercase mb-3">
                  {category.name}
                </h4>
                <div className="space-y-3">
                  {category.subcategories.map((sub) => (
                    <div key={sub.id} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-green-600"
                        onChange={() => filterhandler(sub)}
                        checked={filters.includes(sub.name)}
                      />
                      <label className="text-sm text-gray-600 capitalize">
                        {sub.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group shadow-md rounded-lg p-3 bg-white hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
                    
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-semibold text-gray-800 truncate">
                        {product.title}
                      </h3>
                      <p className="text-sm font-bold text-gray-900">
                        ${product.price}
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="mt-4 w-full bg-gray-100 text-green-700 font-bold py-2 rounded hover:bg-green-600 hover:text-white transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer & Floating Button remains the same as previous code... */}
      <button
        onClick={() => dispatch(toggleCart())}
        className="fixed top-24 right-0 z-50 rounded-l-md bg-green-600 flex items-center gap-2 px-4 py-3 text-white shadow-lg"
      >
        <span className="text-sm font-bold">{cartItems.length}</span>
        <ShoppingBagIcon />
      </button>

      {/* Drawer Logic */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity ${isCartOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div
          className="absolute inset-0 bg-gray-500/75"
          onClick={() => dispatch(toggleCart())}
        />
        <div
          className={`fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl transform transition-transform duration-500 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-6 border-b">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                onClick={() => dispatch(toggleCart())}
                className="p-2 text-gray-400"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex py-6 border-b last:border-0">
                  <img
                    src={item.thumbnail}
                    className="h-20 w-20 rounded border object-contain"
                    alt={item.title}
                  />
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between font-medium">
                      <h3 className="text-sm">{item.title}</h3>
                      <p className="text-green-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="px-2 py-1"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(addToCart(item))}
                          className="px-2 py-1 text-green-600"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-xs text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {cartItems.length > 0 && (
              <div className="p-6 bg-gray-50 border-t">
                <div className="flex justify-between font-bold mb-4">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-md font-bold">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
