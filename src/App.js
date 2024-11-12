import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import ContactUsForm from "./page/contactUsForm";
import FQA from "./page/fqapage";

function App() {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contactusform" element={<ContactUsForm />} />
          <Route path="/fqa" element={<FQA />} />
        </Routes>
      </div>
  );
}

export default App;
