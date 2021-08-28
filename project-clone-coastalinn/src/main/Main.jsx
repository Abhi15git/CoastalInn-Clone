import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "../components/Body/Home"
import Rooms from "../components/Body/Rooms"
import Booking from "../components/BookingPage/Booking"
import CoastalInnBeulah from "../components/BookingPage/CoastalInnBeulah"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Header/Navbar"

const Main = () => {
    return (
        <div>

            <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rooms" component={Rooms}/>
                <Route exact path="/properties/coastalinnbeulah" component={CoastalInnBeulah}/>
                <Route exact path="/properties/coastalinnbeulah/booking/:id" component={Booking}/>
            </Switch>
            <Footer/>
            </BrowserRouter>
            
        </div>
    )
}

export default Main
