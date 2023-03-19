import "./style.css";

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="logo.png"
          height="68px"
          width="68px"
          alt="Today I learned logo"
        />
        <h1>Today I learned</h1>
      </div>
      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
}

export default App;
