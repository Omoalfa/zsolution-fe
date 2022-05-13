import React from 'react';
import Layout from '../Layout';
import Home from '../views/Home';
// import NotFound from '../views/NotFound'


import Protected from './Protected';

const routes = [
  {
    index: 'true',
    element: <Layout><Home /></Layout>,
    children: [
        {
            path: '/auth',
            element: 'authpage',
        },
        {
            path: '/:_id',
            element: 'detail'
        },
        {
            path: '/create',
            element: <Protected>createpage</Protected>
        }
    ]
  },
//   {
//     path: '*',
//     element: <NotFound />
//   }
];

export default routes;
