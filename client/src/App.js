import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import UsersPage from './Components/UsersPage/UsersPage';
import AddUserPage from './Components/AddUserPage/AddUserPage';
import NewsPage from './Components/NewsPage/NewsPage';
import AddNewsPage from './Components/AddNewsPage/AddNewsPage';

function App() {

  return (
    <Router>
      <Header />
      <Route path='/yournews' exact component={HomePage}></Route>
      <Route path='/users' component={UsersPage}></Route>
      <Route path='/addUser' component={AddUserPage}></Route>
      <Route path='/news' component={NewsPage}></Route>
      <Route path='/addNews' component={AddNewsPage}></Route>
    </Router>
  );
}

export default App;
