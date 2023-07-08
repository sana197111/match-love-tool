import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/components/home/home';
import Countries from '../src/components/countries/countries';
import GlobalStyle from './common/css/globalStyle';
import Options from './components/options/option';
import PopupForms from '../src/components/popupForm/popupForms';
import Invitation from '../src/components/invitation/invitation';
import ItemTest from '../src/components/itemTest/itemTest';
const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/matchMBTI" component={Options} />
                <Route path="/result/:countryName" component={Countries} />
                <Route path="/popupform" component={PopupForms} />
                <Route path="/invitation" component={Invitation} />
                <Route path="/itemtest" component={ItemTest} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
