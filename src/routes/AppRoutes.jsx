import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/layout/layout'
import About from '../pages/about/about';
import Contact from '../pages/contact/contact';
import DetailedInfo from '../components/detailedCard/DetailedInfo';
import Home from '../pages/home/home';
import Movies from '../components/movies/movies';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/:movieId",
    element: (
      <Layout>
        <Movies />
      </Layout>
    ),
  },
  {
    path: "/movie/:movieId",
    element: (
      <Layout>
        <DetailedInfo />
      </Layout>
    ),
  },
  {
    path: "/movies/:movieName",
    element: (
      <Layout>
        <Movies />
      </Layout>
    ),
  },
]);

export default router;
