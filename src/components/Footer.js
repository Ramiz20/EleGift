import { MdCopyright } from "react-icons/md";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  const socialPlatform = [
    {
      id: 1,
      name: <FaFacebookF />,
      style: { backgroundColor: "#4668b2" },
    },
    {
      id: 2,
      name: <FaTwitter />,
      style: { backgroundColor: "#1d98e6" },
    },
    {
      id: 3,
      name: <FaLinkedinIn />,
      style: { backgroundColor: "#0076b4" },
    },
    {
      id: 4,
      name: <FaInstagram />,
      style: { backgroundColor: "#ca3174" },
    },
  ];

  return (
    <>
      <footer>
        <div className="left-side">
          <img src="./Picture/GiftIcon.png" />
          <h1>
            Ele
            <b>Gift</b>
          </h1>
        </div>
        <div className="center-side">
          <p>
            <MdCopyright /> Copyright 2020. Powered by WPDeveloper
          </p>
        </div>
        <div className="right-side">
          <ul>
               {socialPlatform.map(({ id, name, style }) => (
                            <li key={id} style={style}>
                                {name}
                            </li>
                        ))}
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
