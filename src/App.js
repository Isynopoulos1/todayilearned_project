import "./style.css";

function App() {
  const AppTitle = "Today I Learned";
  return (
    <>
      {/*HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68px"
            width="68px"
            alt="Today I learned logo"
          />
          <h1>{AppTitle}</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}
function NewFactForm() {
  return <form className="fact-form"> Fact form </form>;
}
function CategoryFilter() {
  return <aside>Category Filter</aside>;
}
function FactList() {
  return <section>Facts List</section>;
}

export default App;
