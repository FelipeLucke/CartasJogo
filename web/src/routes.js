import React from "react";
import { Menu, Batalha, Colecao, NotFound } from "./pages/";
import { Switch, Route } from "react-router-dom";
import { GlobalStyled } from "./utils/styled-global";

const Routes = () => {
  return (
    <>
      <GlobalStyled />
      <Switch>
        <Route path="/batalha" exact component={Batalha} />
        <Route path="/colecao" exact component={Colecao} />
        <Route path="/" exact component={Menu} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
