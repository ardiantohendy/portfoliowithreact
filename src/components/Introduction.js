import "../App.css";

function Introduction(props) {
  return (
    <div className="App">
      <header className="App-header">
        <nav>TESTING</nav>
        <section>
          <h1>HELLO WORLD!!!</h1>
        </section>
        <nav>{props.message}</nav>
      </header>
    </div>
  );
}

export default Introduction;
