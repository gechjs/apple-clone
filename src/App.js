import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import Iphone from "./components/Iphone.js";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:productId" element={<ProductPage />}></Route>
        <Route
          path="*"
          element={
            <div>
              <br />
              <br />
              <h2>the page you are looking for can not be found</h2>
            </div>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
