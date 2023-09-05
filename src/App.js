import "./App.css";
import RegForm from "./components/Form";

function App() {
  return (
    <div
      style={{
        // background: "black",
        height: "110vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="App"
    >
      <RegForm />
    </div>
  );
}

export default App;
