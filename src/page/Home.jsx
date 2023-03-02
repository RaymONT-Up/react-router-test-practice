import { Route } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
      <Route path="/home/new-user">
        <h6>Добро пожаловать на сайт!</h6>
      </Route>
    </div>
  );
};
export default Home;
