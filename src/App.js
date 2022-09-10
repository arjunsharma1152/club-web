import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Nav from "./component/nav-bar/nav";
import UploadImg from "../src/component/Upload-img/upload.js";

import HomePage from "./pages/homepage/homepage";
import EventPage from "./pages/event/eventpage";
import ContactPage from "./pages/contact/contactpage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <UploadImg />
        <h1>hiii</h1>
        <div className="container">
          <Route exact={true} path="/" component={HomePage} />
          <Route exaxt path="/event" component={EventPage} />
          <Route exact path="/contact" component={ContactPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
