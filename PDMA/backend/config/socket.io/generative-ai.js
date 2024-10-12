const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generativeAI(text, callback) {
    const gemini_api_key = process.env.GEMINI_API_KEY;
    const googleAI = new GoogleGenerativeAI(gemini_api_key);

    const geminiConfig = {
        temperature: 0.9,
        topP: 1,
        topK: 1,
        maxOutputTokens: 4096,
    };

    const geminiModel = googleAI.getGenerativeModel({
        model: "gemini-pro",
        geminiConfig,
    });

    const result = await geminiModel.generateContent(text);
    const generatedText = result.response.candidates[0]?.content?.parts[0]?.text || "No text generated";

    callback(generatedText);
}

module.exports = generativeAI;