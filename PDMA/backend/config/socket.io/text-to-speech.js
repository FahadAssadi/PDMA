const fs = require("fs");
const path = require("path");
// Imports the Google Cloud client library
const textToSpeechAPI = require("@google-cloud/text-to-speech");

function textToSpeech(text, callback) {
  // Creates a client
  const client = new textToSpeechAPI.TextToSpeechClient();

  // Construct the request
  const request = {
    input: { text: text },
    // Select the language and SSML Voice Gender (optional)
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
    // Select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" },
  };

  const fileName = path.join(process.cwd(), 'public/output', `${text}.mp3`);

  // Check if the file already exists
  if (fs.existsSync(fileName)) {
    callback(text);
    return;
  }

  // Performs the Text-to-Speech request
  client.synthesizeSpeech(request, (err, response) => {
    if (err) {
      console.error("ERROR:", err);
      return;
    }

    // Write the binary audio content to a local file
    fs.writeFile(fileName, response.audioContent, "binary", err => {
      if (err) {
        console.error("ERROR:", err);
        return;
      }
    });

    callback(text);
  });
}

module.exports = textToSpeech;
