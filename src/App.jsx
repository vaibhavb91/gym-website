import "./App.css";
import "./App.css";
import Hero from "./component/hero/Hero";
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
    </div>
  );
}

export default App;
