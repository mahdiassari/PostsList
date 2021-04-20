import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { theme } from "../theme";
import Posts from "../pages/Posts";
import MaterialUiTablePage from "../pages/MaterialUiTablePage";
import MyTable from "../pages/MyTablePage";
import PostDetails from "../pages/PostDetails";

const Routes = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Posts />} />
          <Route
            exact
            path="/materialuitable"
            component={() => <MaterialUiTablePage />}
          />
          <Route exact path="/mytable" component={() => <MyTable />} />
          <Route
            exact
            path="/:tableType/posts/:postId"
            component={() => <PostDetails />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
