import { Suspense, lazy } from "react";
import { GlobalStyle } from "./Global.style";
import styled from "styled-components";
import Main from "./Page/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Portfolio from "./Page/portfolio";
import Loading from "./Components/Loading";

const Resume = lazy(() => import("./Page/resume"));
const Aboutme = lazy(() => import("./Page/aboutme"));

function App() {
  return (
    <>
      <Router>
        <div>
          <GlobalStyle />

          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/aboutme" element={<Aboutme />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
