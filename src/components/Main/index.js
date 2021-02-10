import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import NewYearMoney from '../PsychoTest/NewYearMoney';
import './index.css';

function Main() {
  return (
    <div className="browser-wrap">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        {/* <Link to="/">홈</Link><br/>
        <Link to="/photo">사진</Link><br/>
        <Link to="/new-yar">새뱃돈 얼마?</Link><br/> */}
        <Switch className="abc">
          <Route exact path="/" component={NewYearMoney}/> 
          <Route path="/new-year" component={NewYearMoney}/>
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default Main;