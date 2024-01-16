import Logo from "@/assets/Logo.png";
import { useState } from "react";

type Link = 'Help Center' | 'Partners' | 'Terms & Services';

const Footer: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<Link | null>(null);

  const handleLinkHover = (link: Link) => {
    setHoveredLink(link);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  const linkStyles = (link: Link) => (hoveredLink === link ? "cursor-pointer text-primary-500" : "cursor-pointer");

  const links: Link[] = ['Help Center', 'Partners', 'Terms & Services'];

  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            At FITGYM, we're committed to sculpting a healthier you. 
            Join our community for expert guidance, top-notch facilities, 
            and a transformative fitness experience that goes beyond the gym.
          </p>
          <p>Copyright© 2024 FITGYM. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          {links.map((link) => (
            <p
              key={link}
              className={`my-5 ${linkStyles(link)}`}
              onClick={() => handleLinkHover(link)}
              onMouseLeave={handleLinkLeave}
            >
              {link}
            </p>
          ))}
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Reach out to us for inquiries, support, and to start your fitness journey. We're here to assist you!</p>
          <p>+4(343)825-6927</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
