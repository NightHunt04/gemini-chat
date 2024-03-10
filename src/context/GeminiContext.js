import { createContext, useContext } from 'react'

export const GeminiContext = createContext({
    messageHistory : [],
    addMessage : (role, text, id) => {},
}) 

export function useGeminiContext() {
    return useContext(GeminiContext)
} 

export const GeminiProvider = GeminiContext.Provider