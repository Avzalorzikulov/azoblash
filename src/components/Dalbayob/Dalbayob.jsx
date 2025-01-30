import { useState } from 'react';
import barbertonDaisy from '../../../public/footer1.jpg'; // Update with actual image path
import blushingBromeliad from '../../../public/footer2.jpg'; // Update with actual image path
import aluminumPlant from '../../../public/footer3.jpg'; // Update with actual image path
import Input from '../../components/Input/Input'; // Update with actual image

const ShoppingCart = () => {
  const [quantities, setQuantities] = useState([2, 6, 9]);

  const products = [
    { name: 'Barberton Daisy', price: 119.00, sku: '1995751877966', quantity: quantities[0] },
    { name: 'Blushing Bromeliad', price: 139.00, sku: '19957518757065', quantity: quantities[1] },
    { name: 'Aluminum Plant', price: 179.00, sku: '1995751877786', quantity: quantities[2] },
  ];

  const handleQuantityChange = (index, change) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] + change);
    setQuantities(newQuantities);
  };

  const handleDelete = (index) => {
    const newQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(newQuantities);
  };

  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const shipping = 16.00;
  const total = subtotal + shipping;

  return (
    <div className="p-4 flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-2/3">
        <h2 className="text-lg font-bold mb-4">Products</h2>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={product.sku} className="flex flex-col lg:flex-row justify-between items-center border-b py-2">
              <div className="flex items-center mb-2 lg:mb-0">
                <img src={index === 0 ? barbertonDaisy : index === 1 ? blushingBromeliad : aluminumPlant} alt={product.name} className="w-16 h-auto mr-4" />
                <div>
                  <p>{product.name}</p>
                  <p className="text-gray-500">SKU: {product.sku}</p>
                </div>
              </div>
              <p className="mb-2 lg:mb-0">${product.price.toFixed(2)}</p>
              <div className="flex items-center mb-2 lg:mb-0">
                <button 
                  onClick={() => handleQuantityChange(index, -1)} 
                  className="bg-green-500 text-white p-2 rounded-full">
                  -
                </button>
                <span className="mx-2">{product.quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(index, 1)} 
                  className="bg-green-500 text-white p-2 rounded-full">
                  +
                </button>
                <button onClick={() => handleDelete(index)} className="ml-2 text-red-500">🗑️</button>
              </div>
              <p className="mb-2 lg:mb-0">${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 lg:ml-20 mt-4 lg:mt-0">
        <Input />
      </div>
    </div>
  );
};

export default ShoppingCart;
