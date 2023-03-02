import { Fragment } from "react";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const params = useParams();
  return (
    <Fragment>
      <h3>{params.articlesId}</h3>
    </Fragment>
  );
};
export default ArticleDetails;
