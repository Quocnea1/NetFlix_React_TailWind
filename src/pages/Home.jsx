import React from "react";
import Main from "./Main";
import request from "../Requests";
import Row from "../compoinent/Row";

const Home = () => {
  return (
    <div>
      <Main />
      <Row
        title="UpComing"
        fetchUrl={request.requestUpComming}
      />

      <Row
        title="Trending"
        fetchUrl={request.requestTrending}
      />

      <Row
        title="Top Rated"
        fetchUrl={request.requestTopRated}
      />

      <Row
        title="Popular"
        fetchUrl={request.requestPoppular}
      />
    </div>
  );
};

export default Home;
