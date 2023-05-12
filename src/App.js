import { useState } from "react";
import "./App.css";
import { getAudio, handleDownload } from "./utils/elevenlabs";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoader] = useState(false);
  const submitText = () => {
    setLoader(true);
    const texts = text.split(";");
    texts.forEach((t, index) => {
      setTimeout(async () => {
        if (!t) return;
        try {
          const audioUrl = await getAudio(
            "EXAVITQu4vr4xnSDxMaL",
            "API KEY",
            t.trim()
          );
          console.log(audioUrl);
          handleDownload(audioUrl, t.trim());
        } catch (error) {
          console.log(error);
        }
      }, (index + 1) * 2000);
      if (index - 1 === texts.length) {
        setLoader(false);
      }
    });
  };
  //
  return (
    <div className="App">
      <textarea
        style={{ height: "500px", width: "500px" }}
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>
      {!loading && <button onClick={submitText}>Submit</button>}
    </div>
  );
}

export default App;
