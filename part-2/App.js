const App = function() {
  return  <div id="root">
            <Tweet
            username="TedBear123"
            name = "Teddy"
            date = "12-12-12"
            msg = "Hi I am a twitty twatty tweet"
                     />
            <Tweet
            username="Rogue01"
            name = "Roger"
            date = "03-05-14"
            msg = "Wow does this still work?"
                     />
               <Tweet

            username="GreenEyes1111"
            name = "Anne"
            date = "11-01-16"
            msg = "What color are my eyes?"
                     />
            
          </div>
}

ReactDOM.render(<App />, document.getElementById("root"));

  // ReactDOM.render(<NamedComponent name="Teddy"/>,
  // document.getElementById("root"));
