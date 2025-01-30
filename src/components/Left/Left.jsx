import { useState } from "react";
import { Link } from "react-router-dom";

const BillingAddressForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    shipDifferent: false,
    orderNotes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
    <h1 className="font-normal    text-[15px] leading-[107%] text-[#3d3d3d] ">
    <Link className="font-bold text-[#3d3d3d]" to={"/"}>
      Home
    </Link>{" "}
    / Shop /Checkout /
  </h1>
    <div className="p-6 mt-[30px] ml-[-130px]  max-w-2xl mx-auto">
      <h2 className="text-xl ml-[-498px] font-semibold mb-4">Billing Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="firstName" placeholder="First Name *" className="border p-2 w-full" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name *" className="border p-2 w-full" onChange={handleChange} />
        <select name="country" className="border p-2 w-full" onChange={handleChange}>
          <option value="">Select a country / region *</option>
          <option value="USA">United States</option>
          <option value="UK">United Kingdom</option>
        </select>
        <input type="text" name="city" placeholder="Town / City *" className="border p-2 w-full" onChange={handleChange} />
        <input type="text" name="streetAddress" placeholder="House number and street name *" className="border p-2 w-full" onChange={handleChange} />
        <input type="text" name="apartment" placeholder="Apartment, suite, unit, etc. (optional)" className="border p-2 w-full" onChange={handleChange} />
        <select name="state" className="border p-2 w-full" onChange={handleChange}>
          <option value="">Select a state *</option>
          <option value="NY">New York</option>
          <option value="CA">California</option>
        </select>
        <input type="text" name="zip" placeholder="Zip *" className="border p-2 w-full" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email address *" className="border p-2 w-full" onChange={handleChange} />
        <div className="flex items-center border p-2 w-full">
          <select className="border-r p-2">
            <option>+966</option>
            <option>+1</option>
          </select>
          <input type="text" name="phone" placeholder="Phone Number *" className="flex-1 p-2" onChange={handleChange} />
        </div>
      </div>
      <div className="flex items-center mt-4">
        <input type="checkbox" name="shipDifferent" className="mr-2" onChange={handleChange} />
        <label>Ship to a different address?</label>
      </div>
      <textarea name="orderNotes" placeholder="Order notes (optional)" className="border p-2 w-full mt-4" onChange={handleChange}></textarea>
    </div>
    </>
  );
};

export default BillingAddressForm;