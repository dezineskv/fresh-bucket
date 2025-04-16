import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/global.css";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import ProductDetails from "../pages/ProductDetails";

const Crumbs = () => {

  const breadcrumbs = useBreadcrumbs();

  return (
    <>
        <div className="max-w-[1440px] mx-auto w-full text-black pl-10">
          <Link to="/">Home > </Link>
          <React.Fragment>
            {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
          </React.Fragment>
        </div>
    </>
  );
          }
          export default Crumbs;