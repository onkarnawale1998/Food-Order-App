const Logo = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFzY7CNCsygf7Hi2pwSekFKEpncFa6wNn0AwDn6NHOSd_6NskU"
      alt="Food Villa"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
