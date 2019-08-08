import 'bootstrap/dist/css/bootstrap.css';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navb from './Navb';
import Header from './Header';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import Footer from './Footer';

function App () {

    return (
        <Fragment>
            <Navb />
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </Fragment>
        

    );
}
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
