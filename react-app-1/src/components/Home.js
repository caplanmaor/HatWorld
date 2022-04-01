import Catalog from "./Catalog";
import { useNavigate } from "react-router-dom";

function Home() {
  let navi = useNavigate();
  function handleClick() {
    navi("/admin");
  }
  return (
    <div className="home">
      <video autoPlay loop muted id="video">
        <source
          className="video"
          src="https://streamable.com/l/408y0k/mp4.mp4"
          type="video/mp4"
        />
      </video>
      <Catalog />
      <button className="admin-btn" onClick={handleClick}>
        Admin
      </button>
    </div>
  );
}

export default Home;
