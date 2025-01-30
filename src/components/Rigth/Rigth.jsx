import img1 from '../../../public/rasm.svg'; // Image for Barberton Daisy
import img2 from '../../../public/rasm2.svg'; // Image for Blushing Bromeliad
import img3 from '../../../public/rasm3.svg'; // Image for Aluminum Plant

const Rigth = () => {
  return (
    <div className="p-4 w-[350px]">
      <h2 className="text-xl font-bold">Your Order</h2>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={img1} alt="Barberton Daisy" className="w-16 h-16 mr-2" />
            <div>
              <span>Barberton Daisy</span>
              <div className="text-sm text-gray-500">SKU: 1995751877966 (x2)</div>
            </div>
          </div>
          <span style={{color:"#46A358"}} >$238.00</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={img2} alt="Blushing Bromeliad" className="w-16 h-16 mr-2" />
            <div>
              <span>Blushing Bromeliad</span>
              <div className="text-sm text-gray-500">SKU: 19957518757065 (x6)</div>
            </div>
          </div>
          <span  style={{color:"#46A358"}}>$834.00</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={img3} alt="Aluminum Plant" className="w-16 h-16 mr-2" />
            <div>
              <span>Aluminum Plant</span>
              <div className="text-sm text-gray-500">SKU: 1995751877786 (x9)</div>
            </div>
          </div>
          <span  style={{color:"#46A358"}}>$1,611.00</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$2,683.00</span>
        </div>
        <div className="flex justify-between">
          <span>Coupon Discount</span>
          <span>(-)$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$16.00</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span  style={{color:"#46A358"}}>$2,699.00</span>
        </div>
      </div>
      <div className="mt-4">
        <a href="#" className="text-blue-500">Have a coupon code? Click here</a>
      </div>
      <div className="mt-4">
        <h3 className="text-lg">Payment Method</h3>
        <div>
          <input type="radio" id="paypal" name="payment" value="paypal" />
          <labe htmlFor="paypal"> PayPal</labe>
        </div>
        <div>
          <input type="radio" id="bank-transfer" name="payment" value="bank-transfer" />
          <label htmlFor="bank-transfer"> Direct bank transfer</label>
        </div>
        <div>
          <input type="radio" id="cash"  name="payment" value="cash" />
          <label htmlFor="cash"> Cash on delivery</label>
        </div>
      </div>
      <button className="mt-4 bg-green-500 text-white p-2 rounded">Place Order</button>
    </div>
  );
};

export default Rigth;
