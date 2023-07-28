import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { useSearchParams } from "react-router-dom";

const SearchResultsPage = () => {
  const [cocktails, setCocktails] = useState([]);

  // au chargement du composant, on lance la fonction fetchSearchResults
  // grâce à useEffect
  useEffect(() => {
    fetchSearchResults();
  }, []);

  // on récupère le paramètre search de l'url
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  // on fait l'appel fetch sur l'api, et on stocke le résultat dans le state
  const fetchSearchResults = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    const responseJs = await response.json();

    setCocktails(responseJs.drinks);
  };

  return (
    <>
      <Header />
      <h1>Résultats de la recherche : </h1>

      <div>
        {cocktails.map((cocktail) => (
          <div>
            <h2>{cocktail.strDrink}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResultsPage;
