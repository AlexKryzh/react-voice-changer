import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import Header from './Header/Header';
import NotFound from './NotFound/NotFound';
import Voices from './Voices/Voices';
import Loading from './Loading/Loading';
import Messages from './Messages/Messages';
import Footer from './Footer/Footer';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <div className="app d-flex flex-column">
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Voices />
                    </Route>
                    <Route path='/404' component={NotFound} />
                    <Redirect from='*' to='/404' />
                </Switch>
                <Footer />
                <Loading />
                <Messages />
            </div>
        </BrowserRouter>
    );
}

export default App;
