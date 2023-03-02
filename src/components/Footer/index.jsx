import "./style.css";

const Footer = () => {
  const handleIconClick = (src) => {
    window.open(src, "_blank");
  };
  return (
    <div className="footer">
      <div>© Rafael Petrosyan 2023</div>
      <div>
        <img
          className="footer_logos"
          onClick={() =>
            handleIconClick("https://www.instagram.com")
          }
          src="assets/insta_logo.png"
          alt="insta"
        />
      </div>
    </div>
  );
};
export default Footer;
