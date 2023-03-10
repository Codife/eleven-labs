import { useState } from "react";
import "./App.css";
import { getAudio, handleDownload } from "./utils/elevenlabs";

function App() {
  const [text, setText] = useState("");
  const submitText = () => {
    const texts = text.split(".");
    texts.forEach(async (t) => {
      if (!t) return;
      try {
        const audioUrl = await getAudio(
          "EXAVITQu4vr4xnSDxMaL",
          "fc60b09e4fb00b137b2491df2c84933a",
          t.trim()
        );
        console.log(audioUrl);
        handleDownload(audioUrl, t.trim());
      } catch (error) {
        console.log(error);
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
      <button onClick={submitText}>Submit</button>
    </div>
  );
}

export default App;
