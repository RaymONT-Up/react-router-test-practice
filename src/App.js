import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header/Header";
import About from "./page/About";
import Articles from "./page/Articles";
import ArticleDetails from "./page/ArticleDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/articles/:articlesId">
          <ArticleDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
