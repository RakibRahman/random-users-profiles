import {
  PhoneIcon,
  LocationMarkerIcon,
  MailIcon,
} from "@heroicons/react/solid";

const Contact = ({ mail, phone, city, country }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <p className="contact">
        <PhoneIcon className="iconStyle" /> {phone}
      </p>
      <p className="contact">
        <LocationMarkerIcon className="iconStyle" />
        {city},{country}
      </p>
      <p className="contact">
        <MailIcon className="iconStyle" /> {mail}
      </p>
    </div>
  );
};
export default Contact;
