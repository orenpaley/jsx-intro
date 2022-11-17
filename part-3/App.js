const App = function() {
  return  <div id="root">
            <Person
            name = "Teddy"
            age = {25}
            hobbies = {["tennis", "camping", "retro games"]}
                     />
            <Person
            name = "Fred"
            age = {15}
            hobbies = {["music", "sitting"]}
                     />
            <Person
            name = "Christiano"
            age = {31}
            hobbies = {["software dev", "python", "vodka"]}
                     />
          </div>
}

ReactDOM.render(<App />, document.getElementById("root"));

  // ReactDOM.render(<NamedComponent name="Teddy"/>,
  // document.getElementById("root"));
