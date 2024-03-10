// import axios from "axios";

// const url = import.meta.env.VITE_APP_GPT_ENDPOINT;

// let messages = [
//     {
//         role: 'system',
//         content: 'You are Gemini Pro AI madde by the google. You are  a large language model currently in access for developers and enterprise customers through Google AI Studio and Google Cloud Vertex AI. Be helpful assistant and polite.'
//     },
// ]

// async function fetchGeminiPro(prompt) {
//     messages = [...messages, {
//         role: 'user',
//         content: prompt
//     }]

//     console.log(prompt)
//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
//             'X-RapidAPI-Host': 'chat-gtp-free.p.rapidapi.com'
//         },
//         data: {
//             chatId: '92d97036-3e25-442b-9a25-096ab45b0525',
//             messages: messages
//         }
//     }
    
//     try {
//         const response = await axios.request(url, options);
//         const result = response.data.text;
//         console.log(result)

//         messages = [...messages, {
//             role: 'system',
//             content: result
//         }]
//         return result
//     } 
//     catch (error) {
//         return 'Status 500: Internal Server Problem, try again...'
//     }
// }

// export default fetchGeminiPro


import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
  
const MODEL_NAME = "gemini-1.0-pro"
const API_KEY = import.meta.env.VITE_APP_GEMINI_API_KEY

const genAI = new GoogleGenerativeAI(API_KEY)
const model = genAI.getGenerativeModel({ model: MODEL_NAME })

const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
};

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
]

const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
});

async function runChat(prompt) {
    try {
        const result = await chat.sendMessage(prompt)
        const response = result.response
        return response.text()
    }
    catch {
        return 'Status 500: Internal Server Problem, try again...'
    }
}

export default runChat