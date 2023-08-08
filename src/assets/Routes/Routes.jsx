import React from "react";

import { BrowserRouter, Rutes as ReactRoutes, Route } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";


const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <ReactRoutes>
                    <Route exact path="/" component={<Home/>} />
                </ReactRoutes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes