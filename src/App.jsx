
// import Header from "./lab-2/Header"
// import Menubar from "./lab-2/Menubar"
// import Mainco from "./lab-2/Mainco"
// import Footer from "./lab-2/Footer"
// import A1 from "./lab-3/A1"
// import B1 from "./lab-3/B1"
// import C1 from "./lab-3/C1"
// import Atable from "./lab-4/Atable"
// import Acard from "./lab-4/Acard"
// import Map_List from "./lab-4/Map_List"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./lab-5/a/Home"
import Layout from "./lab-5/a/Layout"
import About from "./lab-5/a/About"
import Galary from "./lab-5/a/Galary"
import Contect from "./lab-5/a/Contect"
import Sing from "./lab-5/a/Sing"

function App() {


  return (<>
    {/* lab-1 */}
    {/* <h1>hello world</h1>
  <Hellof/>
  <Helloc/> */}

    {/* lab-2 */}
    {/* <div class="page">
    <Header/>
    <Menubar/>
    <Mainco/>
    <Footer/>
  </div> */}
    {/* lab-3 */}
    {/* <A1/> */}
    {/* <B1/> */}
    {/* <C1/> */}
    {/* lab-4 */}
    {/* <Atable/> */}
    {/* <Acard /> */}
    {/* <Map_List /> */}
    {/* lab-5 */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Galary" element={<Galary />} />
            <Route path="/Contect" element={<Contect />} />
            <Route path="/Sing" element={<Sing />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </>)
}


export default App
