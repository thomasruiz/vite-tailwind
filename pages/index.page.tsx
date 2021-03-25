import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { DefaultLayout } from '../components/templates/default-layout';
import { Page as ErrorPage } from './_error.page';
import { AboutPage } from './about/about.page';
import { HomePage } from './home/home.page';
import './index.css';

export { Page };

function Page() {
  return (
    <React.StrictMode>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="*" component={ErrorPage}/>
        </Switch>
      </DefaultLayout>
    </React.StrictMode>
  );
}
