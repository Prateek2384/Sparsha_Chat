// backend/src/lib/translate.js
import axios from "axios";

const translateText = async (text, targetLanguage) => {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY; // Store API key in .env
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLanguage,
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Fallback to original text if translation fails
  }
};

export { translateText }; // Named export