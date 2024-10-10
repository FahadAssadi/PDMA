function textToSpeech(text, callback) {
  const fs = require("fs");

  // Imports the Google Cloud client library
  const textToSpeech = require("@google-cloud/text-to-speech");

  // Creates a client
  const client = new textToSpeech.TextToSpeechClient();

  // Construct the request
  const request = {
    input: { text: text },
    // Select the language and SSML Voice Gender (optional)
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
    // Select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" },
  };

  // Performs the Text-to-Speech request
  client.synthesizeSpeech(request, (err, response) => {
    if (err) {
      console.error("ERROR:", err);
      return;
    }

    const fileName = `../../../public/output/${Date.now()}.mp3`;

    // Write the binary audio content to a local file
    fs.writeFile(fileName, response.audioContent, "binary", err => {
      if (err) {
        console.error("ERROR:", err);
        return;
      }
    });

    callback(fileName);
  });
}

module.exports = textToSpeech;
