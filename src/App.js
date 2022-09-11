import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./component/nav-bar/nav";
import Footer from "../src/component/footer/footer";
import HomePage from "./pages/homepage/homepage";
import EventPage from "./pages/event/eventpage";
import ContactPage from "./pages/contact/contactpage";
import PhotoPage from "./pages/photo-gallery/gallery";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />

        <div className="container">
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exaxt path="/event" component={EventPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/gallery" component={PhotoPage} />
          </Switch>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
