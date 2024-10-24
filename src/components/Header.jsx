import "./Header.css";

function Header(props) {
  return (
    <header className="Header">
      <h1>Welcome to popcorn time!</h1>
      <h1>We currently have {props.moviesToDisplay.length} movies available</h1>
    </header>
  );
}

export default Header;