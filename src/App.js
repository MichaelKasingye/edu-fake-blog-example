import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home"
import Post from "./Pages/Post"
import Article from "./Pages/Article"
import Error from "./Pages/Error"
import Navigation from "./Components/Navigation"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/post" element={<Post />}></Route>
      <Route path="/article/:id" element={<Article />}></Route>
      <Route path="*" element={<Error />}></Route>
      </Routes>
      {/* Footer */}
      </BrowserRouter>

    </div>
  );
}

export default App;
