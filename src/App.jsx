import { Routes, Route } from "react-router-dom"
import { Suspense } from "react";
import { useEffect, useState } from "react"
import Layout from "./Layout"
import PaginaPalestrantes from "./pages/palestrantes/PaginaPalestrantes"
import Carregamento from "./components/Carregamento"
import TicketsModal from "./components/TicketsModal"
import React from "react"
import ScrollToTop from "./components/ScrollToTop";
import { ProgramationPanel } from "./feature/programationPanel/ProgramationPanel";
import { SpeakerPage } from "./feature/speakerPage/SpeakerPage";

const Local = React.lazy(() => import("./pages/local/Local"));
const Sobre = React.lazy(() => import("./pages/sobre/Sobre"));
const Ingressos = React.lazy(() => import("./pages/ingressos/Ingressos"));
const Submissao = React.lazy(() => import("./pages/sumissao/Submissao"));

function App() {
  const [ Home , setHome] = useState(null);
  const [ loaded , setloaded ] = useState(false);

  useEffect(() => {
    import("./pages/home/Home").then((mod) => {
      setHome(() => mod.default);
    });

    // setloaded(true)

    setTimeout(() => {
      setloaded(true)
    }, 2000);

    import("./pages/local/Local");
    import("./pages/sobre/Sobre");
    import("./pages/ingressos/Ingressos");
    import("./pages/sumissao/Submissao");
  }, []);

  if (!Home || !loaded) {
    return <Carregamento />
  }

  return (
    <>
        <ScrollToTop />
        {/* <TicketsModal/> */}

        <Suspense fallback={<Carregamento />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="palestra/:id" element={<SpeakerPage />} />
              <Route path="local" element={<Local />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="ingressos" element={<Ingressos />} />
              <Route path="submissao" element={<Submissao />} />
              <Route path="programation-panel" element={<ProgramationPanel />} />
            </Route>
          </Routes>
        </Suspense>
    </>
  );
}

export default App
