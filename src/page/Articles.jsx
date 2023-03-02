import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

const Articles = () => {
  const params = useParams();
  console.log(params);
  return (
    <Fragment>
      <h3>Articles</h3>
      <ul>
        <li>
          <Link to="/articles/1">1</Link>
        </li>
        <li>
          <Link to="/articles/2">2</Link>
        </li>
      </ul>
      <p>{params.articlesId}</p>
    </Fragment>
  );
};
export default Articles;
