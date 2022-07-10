import { AwardSection } from "./award/AwardSection";
import "./App.css";

function App() {
  return (
    <div className="app">
      <SpaceDiv />
      <AwardSection />
    </div>
  );
}

export default App;

function SpaceDiv() {
  return (
    <div
      style={{
        height: 800,
      }}
    />
  );
}
