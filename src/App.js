
import Main from "./components/Main.js";
import Iphone from "./components/Iphone.js";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage.js";
import SharedContent from "./components/SharedContent.js";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SharedContent>
              <Main />
            </SharedContent>
          }
        />
        <Route
          path="/iphone"
          element={
            <SharedContent>
              <Iphone />
            </SharedContent>
          }
        />
        <Route
          path="/iphone/:productId"
          element={
            <SharedContent>
              <ProductPage />
            </SharedContent>
          }
        ></Route>
        <Route
          path="*"
          element={
            <SharedContent>
              <div>
                <br />
                <br />
                <h2>the page you are looking for can not be found</h2>
              </div>
            </SharedContent>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
