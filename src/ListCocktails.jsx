import { useEffect, useState } from "react";

const ListCocktails = () => {
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
    <div>
      <h1>List of Cocktails</h1>

      {cocktails.length === 0 && <p>Loading...</p>}

      {cocktails.map((cocktail) => (
        <div key={cocktail.idDrink}>
          <p>{cocktail.strDrink}</p>
        </div>
      ))}
    </div>
  );
};

export default ListCocktails;
