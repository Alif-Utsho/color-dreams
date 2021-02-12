import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Homepage from './components/pages/homepage/homepage'

const RouterMod = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" >
                    <Homepage/>
                </Route>
                <Route path="/about">
                    
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default RouterMod