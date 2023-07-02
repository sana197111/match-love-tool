import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/components/home/home';
import Countries from '../src/components/countries/countries';
import GlobalStyle from './common/css/globalStyle';
import Options from './components/options/option';
import PopupForms from '../src/components/popupForm/popupForms';
const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/matchMBTI" component={Options} />
                <Route path="/result/:countryName" component={Countries} />
                <Route path="/popupform" component={PopupForms} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
