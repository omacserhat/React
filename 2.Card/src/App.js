import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Boostrap from "./images/bootstrap5.png";
import CCSharp from "./images/ccsharp.png";
import Web from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error excepturi aliquid soluta vel iure recusandae, beatae eaque! Eveniet, repudiandae? Hic, molestiae velit. Quo numquam expedita nobis, tempore quia modi facilis."
              />
            </div>
            <div className="column">
              <Course
                image={Boostrap}
                title="Boostrap 5"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error excepturi aliquid soluta vel iure recusandae, beatae eaque! Eveniet, repudiandae? Hic, molestiae velit. Quo numquam expedita nobis, tempore quia modi facilis."
              />
            </div>
            <div className="column">
              <Course
                image={CCSharp}
                title="CCSharp"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error excepturi aliquid soluta vel iure recusandae, beatae eaque! Eveniet, repudiandae? Hic, molestiae velit. Quo numquam expedita nobis, tempore quia modi facilis."
              />
            </div>
            <div className="column">
              <Course
                image={Web}
                title="Web"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error excepturi aliquid soluta vel iure recusandae, beatae eaque! Eveniet, repudiandae? Hic, molestiae velit. Quo numquam expedita nobis, tempore quia modi facilis."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
