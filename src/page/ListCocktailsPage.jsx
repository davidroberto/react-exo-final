import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";

const ListCocktailsPage = () => {
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    const cocktailsJs = await cocktailsResponse.json();

    setCocktails(cocktailsJs.drinks);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <>
      <Header />

      <div>
        <h1>List of Cocktails</h1>

        {cocktails.length === 0 && <p>Loading...</p>}

        {cocktails.map((cocktail) => (
          <div key={cocktail.idDrink}>
            <p>{cocktail.strDrink}</p>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />

            <Link to={"/cocktails/by-category/" + cocktail.strCategory}>
              <p>Categorie : {cocktail.strCategory}</p>
            </Link>

            <Link to={"/cocktails/show/" + cocktail.idDrink}>Voir le cocktail</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListCocktailsPage;
