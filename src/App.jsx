
import Header from "./components/Header";

import Form from "./components/Form.jsx";
import { Routes, Route } from "react-router-dom";
import FormSubmited from "./components/FormSubmited.jsx";
import FormError from "./components/FormError"

function App() {
 

  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col items-center text-black gap-3">
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/done" element={<FormSubmited />} />
        <Route path="/error" element={<FormError />} />
      </Routes>
    </div>
  );
}

export default App;
