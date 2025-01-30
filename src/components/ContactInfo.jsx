import logo from '../../public/logo.svg'; // Adjust the path as necessary
import locationIcon from '../../public/Location.svg'; // Add location icon
import emailIcon from '../../public/Message.svg'; // Add email icon
import phoneIcon from '../../public/Calling.svg'; // Add phone icon

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-green-100 max-w-screen-xl mx-auto">
      {/* Logo Section */}
      <img src={logo} alt="Logo" className="h-10 mb-4 md:mb-0" />

      {/* Contact Information */}
      <ul className="flex flex-col md:flex-row items-start md:items-center md:gap-16 gap-4">
        {/* Location */}
        <li className="flex items-center">
          <img src={locationIcon} alt="Location" className="h-5 mr-2" />
          <p className="text-sm">70 West Buckingham Ave.</p>
        </li>
        {/* Email */}
        <li className="flex items-center">
          <img src={emailIcon} alt="Email" className="h-5 mr-2" />
          <p className="text-sm">contact@greenshop.com</p>
        </li>
        {/* Phone */}
        <li className="flex items-center">
          <img src={phoneIcon} alt="Phone" className="h-5 mr-2" />
          <p className="text-sm">+88 01911 717 490</p>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
