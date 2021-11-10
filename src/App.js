import "./App.css";
import "./assets/ckeditor/ckeditor.css";
import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import LandingPage from "./pages/landingPage";
import NewsPage from "./pages/PostsPage";
import EachNews from "./componenets/postSection/PostDetails";
import AllPhilos from "./pages/PhilosPage";
import AllProjects from "./pages/ProjectsPage";
import PhiloDetails from "./componenets/philoSection/PhiloDetails";
import ProjectDetails from "./componenets/projectSection/ProjectDetails";
import Header from "./componenets/common-components/Header";
import Footer from "./componenets/common-components/Footer";
import { ArrowUpward } from "@material-ui/icons";

function App() {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Router>
          <Header />
          <div style={{ marginBottom: "5em" }}></div>
          <div className="arrow" id="topicon" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
            {" "}
            <ArrowUpward
              fontSize="large"
              style={{ color: "#fff", marginBlock: 7 }}
            />{" "}
          </div>
          <Switch>
            <Route path="/Philanthropists" exact component={AllPhilos} />
            <Route path="/Projects" exact component={AllProjects} />
            <Route path="/News/:id" component={EachNews} />
            <Route path="/News" exact component={NewsPage} />
            <Route path="/Philanthropists/:id" component={PhiloDetails} />
            <Route path="/overhauled/:id" component={ProjectDetails} />
            <Route path="/completed/:id" component={ProjectDetails} />
            <Route path="/half-built/:id" component={ProjectDetails} />
            <Route path="/under-construction/:id" component={ProjectDetails} />
            <Route path="/" exact component={LandingPage} />
          </Switch>
          <Footer />
        </Router>
      </Container>
    </div>
  );
}

export default App;
