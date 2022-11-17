

const App = function() {
  return  <div id="root">
            <FirstComponent />
            <NamedComponent name="Teddy" age={35} />
          </div>
}

ReactDOM.render(<App />, document.getElementById("root"));

  // ReactDOM.render(<NamedComponent name="Teddy"/>,
  // document.getElementById("root"));
