import { useState } from "react"
import { useGeminiContext } from "../../context/GeminiContext"
import runChat from '../../utils/fetchGeminiPro.js' 
// import fetchGeminiPro from '../../utils/fetchGeminiPro.js'
import speakText from "../../utils/textToSpeech.js"

function Input() {
    const { addMessage, setMessageHistory } = useGeminiContext()
    const [prompt, setPrompt] = useState('')
    const [disabled, setDisabled] = useState(false)

    function extractTextWithinTripleQuotes(input) {
        const regex = /```(.*?)```/gs;
        const matches = [];
        let match;
    
        while ((match = regex.exec(input)) !== null) {
            matches.push(match[1]);
        }
    
        return matches;
    }

    const handleInputPrompt = async () => {
        addMessage('user', prompt, crypto.randomUUID())
        setDisabled(prev => !prev)
        
        
        addMessage('ai', 'temp', 13340)
        const answer = await runChat(prompt)
        // const answer = await fetchGeminiPro(prompt)
        let resArray = answer.split('**')
        let boldAnswer = ''

        setMessageHistory(prevMessage => prevMessage.filter(msg => msg.id !== 13340))

        for(let i = 0; i < resArray.length; i++) {
            if(i === 0 || i % 2 !== 1)
                boldAnswer += resArray[i]
            else boldAnswer += '<b>' + resArray[i] + '</b>'
        }
        console.log(boldAnswer)

        let breakAnswer = boldAnswer.split('*').join('')

        let finalAnswer = extractTextWithinTripleQuotes(breakAnswer)
        console.log('final', finalAnswer)
        finalAnswer = '<p class="code">' + finalAnswer + '</p>'

        breakAnswer = breakAnswer.replace(/```(.*?)```/gs, finalAnswer)

        const id = crypto.randomUUID()

        addMessage('ai', breakAnswer, id)

        setDisabled(prev => !prev)
        setPrompt('')
    }

    return (
        <div className="fixed flex items-center justify-center w-full bottom-16 bg-transparent">
            <input 
                type="text" 
                placeholder="Enter a prompt here"
                value={prompt}
                disabled={disabled}
                onChange={e => setPrompt(e.target.value)}
                className={`rounded-2xl outline-none shadow-xl w-[350px] md:w-4/12 text-gray-200 bg-slate-800 px-5 py-2 md:py-3 text-[15px] md:text-lg ${disabled ? 'bg-slate-500' : ''}`}
                onKeyDown={e => {
                    if(e.key === 'Enter')
                        handleInputPrompt()  
                }}/>
        </div>
    )
}

export default Input