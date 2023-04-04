import "./App.css";
import Cupcake from "./components/Cupcake/Cupcake";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Cupcake />
      <Footer/>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
