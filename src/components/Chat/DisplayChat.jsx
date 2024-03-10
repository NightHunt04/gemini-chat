import { useEffect, useState } from "react"
import { useGeminiContext } from "../../context/GeminiContext"
import './style.css'
import axios from "axios"

function DisplayChat() {
    const { messageHistory } = useGeminiContext()
    const [speak, setSpeak] = useState(false)

    const speakText = (text) => {
        setSpeak(true)

        let cleanText = text.replace(/<[^>]*>/g, '')
        cleanText = cleanText.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '')
        axios.post('/speak', { text : cleanText })
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err))
    }

    const stopSpeakText = () => {
        setSpeak(false)

        axios.post('/speak', { text : 'okdok' })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    return (
        <div className="w-full pt-10 flex items-center justify-center pb-16 md:pb-32 overflow-y-auto">
            <div className="relative w-full mx-5 my-6 lg:w-[900px] md:w-[700px] sm:w-[600px] flex flex-col items-start justify-start bg-transparent text-[14px] md:text-[17px]">
                {
                    (messageHistory.length > 0) ?
                    messageHistory.map(message => {
                        if(message['role'] === 'user') {
                            return(
                                <div key={message['id']} className="bottom-up max-w-full flex items-start justify-center gap-5 px-5 py-1 md:py-2">
                                    <div className="text-[16px] md:text-xl w-[25px] h-[25px] md:w-[1.9rem] md:h-[1.9rem] mr-1 rounded-full border-2 flex items-center justify-center">
                                        <i className="lni lni-user m-5"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-[16px] md:text-[18px]">{message['text']}</p>
                                    </div>
                                </div>
                            )
                        }
                        if(message['role'] === 'ai' && message['id'] !== 13340) {
                            return (
                                <div key={message['id']} className="relative w-full md:w-[900px] flex items-start justify-start gap-5 px-5 py-2 pb-7 md:py-3 md:pb-10">
                                    <div className="text-lg md:text-10xl w-[1.9rem] h-[1.9rem] flex items-center justify-center">
                                        <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" className="inline w-full h-full m-5" alt="" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 whitespace-pre-line text-[16px]" dangerouslySetInnerHTML={{__html: message['text']}}/>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 absolute right-0 bottom-0">
                                        <button className="absolute bg-transparent text-gray-200 text-[14px] md:text-[17px] right-0 bottom-0 p-1 hover:text-blue-200" onClick={() => stopSpeakText()}><i className="fa-solid fa-volume-xmark"></i></button>
                                        <button className="absolute bg-transparent text-gray-200 text-[14px] md:text-[17px] right-[30px] bottom-0 p-1 hover:text-purple-300" onClick={() => speakText(message['text'])}><i className="fa-solid fa-volume-high"></i></button>
                                    </div>
                                </div>
                            )
                        }
                        else if(message['id'] === 13340) {
                            return (
                                <div key={message['id']} className="bottom-up-ans max-w-full flex items-start justify-center gap-5 px-5 py-2 pb-6 md:py-3 md:pb-9">
                                    <div className="text-lg md:text-10xl w-[1.9rem] h-[1.9rem] flex items-center justify-center">
                                        <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" className="animate-spin-slow inline w-full h-full m-5" alt="" />
                                    </div>
                                    <div>
                                        <p className="relative text-gray-300 whitespace-pre-line text-[18px]">
                                            <div className="absolute top-[10px] w-[250px] md:w-[700px] gradient-animation h-5 m-1 opacity-80"></div>
                                            <div className="absolute top-[40px] w-[250px] md:w-[700px] gradient-animation h-5 m-1 opacity-80"></div>
                                            <div className="absolute top-[70px] w-[200px] md:w-[400px] gradient-animation h-5 m-1 opacity-80"></div>
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                        else if(message['role'] === 'ai-start') {
                            return (
                                <div key={message['id']} className="max-w-full flex items-start justify-center gap-5 px-5 py-2 pb-6 md:py-3 md:pb-9">
                                    <div className="text-lg md:text-10xl w-[1.9rem] h-[1.9rem] flex items-center justify-center">
                                        <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" className="inline w-full h-full m-5" alt="" />
                                    </div>
                                    <div className="relative">
                                        <p className="text-gray-300 whitespace-pre-line text-[16px] md:text-[18px]">Hello, how can I assist you today?</p>
                                    </div>
                                </div>
                            )
                        }
                        // else {
                        //     return (
                        //         <div key={message['id']} className="max-w-full flex items-start justify-center gap-5 px-5 py-3 pb-9">
                        //             <div className="text-10xl w-[1.9rem] h-[1.9rem] flex items-center justify-center">
                        //                 <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" className="animate-spin-slow inline w-full h-full m-5" alt="" />
                        //             </div>
                        //             <div>
                        //                     <hr className="rounded-[4px] border-none bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] w-full"/>
    
                        //             </div>
                        //         </div>
                        //     )
                        // }
                    })
                    :
                    <div></div>
                }
            </div>
        </div>
    )
}

export default DisplayChat