import "./App.css";
import "./App.css";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Join from "./component/join/Join";
import Plans from "./component/plans/Plans";
import Programs from "./component/programs/Programs";
import Reason from "./component/reason/Reason";
import Testimonial from "./component/testimonial/Testimonial";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
