import db from "./firebase";
import { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";

function App() {
  const [reels, setReels] = useState();

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <h1>IG Reels Clone</h1>

      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
          alt="a"
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        <VideoCard
          channel={"NENADDDD"}
          avatarSrc={
            "https://www.google.com/search?q=logo&sxsrf=ALiCzsbBx5HJ23zruBdXMCKmk-gS-04_AQ:1657728519192&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiRx5T8n_b4AhUSQvEDHdH-DuIQ_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1#imgrc=0-J2OdhHPSVBuM"
          }
          song={"song"}
          url={"url"}
          likes={300}
          shares={150}
        />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
