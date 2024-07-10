import "./cover.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
export default function Cover() {
  return (
    <>
      <div className="coverImage">
        <div className="hero">
          <h1>WHERE TECHNOLOGY</h1>
          <h2>
            MEETS MARKETING
            <span>
              <FontAwesomeIcon icon={faBullhorn} size="2x" />
            </span>
          </h2>
          <button className="cover-btn">Our Portfolio</button>
        </div>
      </div>
    </>
  );
}
