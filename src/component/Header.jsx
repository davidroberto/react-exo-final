import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const search = event.target.search.value;

    navigate(`/search-results?search=${search}`);
  };

  return (
    <header className="header">
      <h2>Mon site de cocktails</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/cocktails">Liste des cocktails</Link>
          </li>
          <li>
            <Link to="/cocktails/random">Cocktail aléatoire</Link>
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Rechercher un cocktail" />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  );
};

export default Header;
