import Topnav from "./Components/Topnav";
import Featured from "./Components/Featured";
import Delivery from "./Components/Delivery";
import Toppicks from "./Components/Toppicks";
import Meal from "./Components/Meal";
import Categories from "./Components/Categories";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <Topnav/>
     <Featured/>
     <Delivery/>
     <Toppicks/>
     <Meal/>
     <Categories/>
     <Newsletter/>
     <Footer/>
    </div>
  );
}

export default App;
