import "./App.css";
import { Navbar, MovieList } from "./components";
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://www.omdbapi.com";
// &apikey=aa660442

function App() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const search = async (e) => {
    if (e.code === "Enter") {
      console.log("<- this is our search terminal");
      //fetch data
      setIsloading(true);
      let response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=aa660442"
      );
      console.log(response.data, "<- this is our search data from API");

      //set data
      setMovies(response.data.Search);
      setIsloading(false);
    }
  };

  return (
    <div className="main">
      {/* Navbar -> Search Bar */}
      <Navbar
        setInputValue={setInputValue}
        inputValue={inputValue}
        search={search}
      />
      {/* Movie List */}
      <MovieList movieList={movies} isLoading={isLoading} />
    </div>
  );
}

export default App;
