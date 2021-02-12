import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Homepage from './components/pages/homepage/homepage'

import About from './components/pages/aboutpage/about'

const RouterMod = () => {
    return (
        <Router>
            <Header />

            <Switch>

                <Route exact path="/" component={Homepage} />

                <Route exact path="/about" component={About} />
                <Redirect to="/" />

            </Switch>

            <Footer/>
        </Router>
        )
}

export default RouterMod