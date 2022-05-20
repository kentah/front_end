import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  RouteComponentProps 
} from 'react-router-dom'
import { Navbar } from '../Nav'
//import { AuthContext } from '../../context/authContext'
import './app.css'
import Art from '../Art'
import { BlogList, BlogPost } from '../Blog'
import Home from '../Home'
import Info from '../Info'
import Sound from '../Sound'
import { LoginForm } from '../Login'
import { AdminDashboard } from '../Admin'
import BlogEditor from '../BlogEditor'

interface RouteParams {
  id: string;
}
const App: React.FC = () => {
  //const LoginContext = useContext(AuthContext)
  //const [isLoggedIn, setIsLoggedIn] = useState<AuthContextType>(false)

  return (
        <Router>
          <div className='fix-nav'>
            <Navbar /> 
          </div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/blog'>
              <BlogList />
            </Route>
            <Route path='/sound'>
              <Sound />
            </Route>
            <Route path='/art'>
              <Art />
            </Route>
            <Route path='/info'>
              <Info />
            </Route>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route path='/admin'>
              <AdminDashboard />
            </Route>
            <Route path='/edit'>
              <BlogEditor />
            </Route>
            <Route
              path="/blog/:id"
              component={({ match }: RouteComponentProps<RouteParams>) => (
                <BlogPost id={parseInt(match.params.id)} />
              )}
            />
          </Switch>
        </Router>
  )
}

export default App;
