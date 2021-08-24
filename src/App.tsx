import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import CategoreyPosts from './components/CategoreyPosts/CategoreyPosts';
import DetailPost from './components/DetailPost/DetailPost';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

const App = ()=> {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/posts/categorey/:categorey/" component={CategoreyPosts} exact/>
            <Route path="/post/:slug/" component={DetailPost} exact/>
            <Route component={PageNotFound}/>
          </Switch>
        </Layout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
