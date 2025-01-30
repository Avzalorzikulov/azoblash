import { Link } from "react-router-dom";

export default function CartTotals() {
  return (
    <div className="w-full lg:w-72 p-5 rounded-lg bg-white font-sans mx-auto lg:mx-0">
      <h3 className="mb-4 text-lg font-bold text-gray-800">Cart Totals</h3>
      <div className="flex flex-col sm:flex-row mb-5">
        <input
          type="text"
          placeholder="Enter coupon code here..."
          className="flex-1 p-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none text-sm"
        />
        <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-b-md sm:rounded-r-md sm:rounded-b-none">
          Apply
        </button>
      </div>
      <div className="mb-5">
        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>Subtotal</span>
          <span>$2,683.00</span>
        </div>
        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>Coupon Discount</span>
          <span>(-) $0.00</span>
        </div>
        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>Shipping</span>
          <span>
            $16.00{" "}
            <a href="#" className="text-blue-600">
              View shipping charge
            </a>
          </span>
        </div>
        <div className="flex justify-between text-sm font-bold text-green-600">
          <span>Total</span>
          <span>$2,699.00</span>
        </div>
      </div>
      <Link
        to={"/shop/check"}
        className="w-full inline-block py-3 bg-green-600 text-white text-base font-bold rounded-md mb-3"
      >
        Proceed To Checkout
      </Link>
      <a href="#" className="block text-center text-green-600 text-sm">
        Continue Shopping
      </a>
    </div>
  );
}
