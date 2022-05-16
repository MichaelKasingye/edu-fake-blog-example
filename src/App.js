import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState, createContext } from "react";
import './App.css';
import Home from "./Pages/Home"
import Post from "./Pages/Post"
import Article from "./Pages/Article"
import Error from "./Pages/Error"
import Navigation from "./Components/Navigation"
import CustomHook from "./Pages/CustomHook";

export const DataCreateContext = createContext();

function App() {
  const [data] = useState("Laan");

  // create a useEffect to retrive that user name from localStorage.
  // setData/ setUser in the useEffect to that data in the local Storage.

  return (
    <div className="App">
      <DataCreateContext.Provider value={data}>
      <BrowserRouter>
      <Navigation/>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/post" element={<Post />}></Route>
      <Route path="/custom-hook" element={<CustomHook/>}></Route>
      <Route path="/article/:id" element={<Article />}></Route>
      <Route path="*" element={<Error />}></Route>
      </Routes>
      {/* Footer */}
      </BrowserRouter>
      </DataCreateContext.Provider>
    </div>
  );
}

export default App;
