import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faClipboardList,
  faCompass,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <p>Hello! Meet your new developer.</p>
          <p>
            Experienced with
            <code>TypeScript</code>, <code>C#</code>, <code>GraphQL</code> and
            much more.
          </p>
          <h1>Johan Giæver</h1>
        </div>
        <div className="navigation">
          <div className="iconContainer">
            <FontAwesomeIcon icon={faClipboardList} />
          </div>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faCompass} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
