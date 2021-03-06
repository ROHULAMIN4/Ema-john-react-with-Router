import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import PleaseORder from './components/PleaseOrder/PleaseORder';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
         <Shop></Shop>

        </Route>
        <Route path="/shop">
        <Shop></Shop>

        </Route>
        <Route path="/orders">
          <Review></Review>

        </Route>
        <Route path="/inventory">
         <Inventory></Inventory>

        </Route>
        <Route path='/pleaseOrder'>
          <PleaseORder></PleaseORder>
        </Route>
        <Route path="*">
         <Notfound></Notfound>

        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
