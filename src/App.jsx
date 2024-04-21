import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx"; // Corrected import location
import Work from "./pages/Work.jsx"; // Importing the Work component

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} /> // Removed exact as it is no longer needed in React Router v6
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
