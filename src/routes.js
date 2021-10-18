import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MyApp from './components/MyApp';
import Person from './components/Person';

export const MAIN_ROUTE = 'MAIN_ROUTE';
export const PEOPLE_DETAILS_ROUTE = 'PEOPLE_DETAILS_ROUTE';

export const routes = [
  {
    path: '/',
    exact: true,
    component: MyApp
  },
  {
    path: '/person/:name',
    exact: true,
    component: Person
  }
];

export const getRouteConfig = id => {
  const route = routes.find(r => r.id === id);
    if (route) {
      const {component, ...rest} = route;
      return rest;
    }
}

export default function Routes() {
  return (
    <Switch>
      {routes.map(route => {
        
        return (
          <Route {...route} />
        );
      })}
    </Switch>
  )
}