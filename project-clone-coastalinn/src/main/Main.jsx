import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "../components/Body/Home"
import RoomDetails from "../components/Body/RoomDetails"
import Rooms from "../components/Body/Rooms"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Header/Navbar"

const Main = () => {
    return (
        <div>

            <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                    <Route exact path="/rooms" component={Rooms} />
                    <Route exact path="/rooms/roomdetails/:id" component={RoomDetails}/>
            </Switch>
            <Footer/>
            </BrowserRouter>
            
        </div>
    )
}

export default Main
