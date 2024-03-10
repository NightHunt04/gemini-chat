import DisplayChat from "./DisplayChat"
import { GeminiProvider } from "../../context/GeminiContext"
import { useState } from "react"
import Input from "./Input"

function RootChat() {
    const [messageHistory, setMessageHistory] = useState([
        {
            'role' : 'ai-start',
            'text' : 'Hey there! How can I assist you today?',
            'id' : `${crypto.randomUUID()}`
        },
    ])

    const addMessage = (role, text, id) => {
        const message = {
            role,
            text,
            id
        }
        setMessageHistory(prevMessage => [...prevMessage, message])
    }

    return (
        <GeminiProvider value={{messageHistory, addMessage, setMessageHistory}}>
            <div className="relative w-full flex flex-col items-center p-5 font-noto text-2xl min-h-screen bg-gradient-to-r from-[#000000] to-[#130F40] text-white">
                <DisplayChat />
                <Input />
            </div>
        </GeminiProvider>
    )
}

export default RootChat