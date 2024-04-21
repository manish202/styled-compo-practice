import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
const App = () => {
  const theme = {
    colors:{
      main:"blue",
      bg:"tomato",
      cardbg:"violet",
      btn:"orange",
      text:"white",
      shadow:"2px 2px 2px 3px rgba(255,255,255,0.5)"
    },
    media:{ mobile:"768px", tab:"992px" }
  }
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App;