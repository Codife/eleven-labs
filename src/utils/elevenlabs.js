import axios from "axios";

export async function getAudio(voiceId, apiKey, text) {
  const { data } = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      text,
      voice_settings: {
        stability: 0.75,
        similarity_boost: 0.75,
      },
    },
    {
      headers: {
        "xi-api-key": apiKey,
      },
      responseType: "blob",
    }
  );
  return window.URL.createObjectURL(new Blob([data], { type: "audio/mpeg" }));
}

export async function handleDownload(audioUrl, fileName) {
  const link = document.createElement("a");
  link.href = audioUrl;
  link.download = fileName;
  link.click();
}
