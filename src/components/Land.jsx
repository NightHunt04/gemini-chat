import { useNavigate } from 'react-router-dom'

function Land() {
    const navigate = useNavigate()

    return (
        <div className="w-full h-full flex text-xl p-5 flex-col bg-transparent justify-center items-center">
            <h1 className="text-7xl font-bold text-center mt-6">
                <span className="text-gray-100">Chat</span>
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">Gemini</span>
                <span>
                    <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" className="inline w-12 h-12 ml-1" alt="" />
                </span>
            </h1>
            <p className="text-[16.5px] tracking-wide text-gray-100 mr-7 mt-10 p-1">
                <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">Gemini AI:</span> 
                Your Twin in the World of Information
            </p>
            <p className="text-[16.5px] tracking-wide text-gray-100 mr-7">
                <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">Gemini AI </span> 
                is your powerful and versatile partner, designed to assist you in two key areas: conversation and vision.
            </p>

            <div className="relative flex items-center gap-7 p-5 mt-[60px] justify-start">
                <div className="w-[500px] h-[700px] overflow-hidden rounded-xl bg-gradient-to-r from-[#d8b4fe] to-[#93c5fd] p-px opacity-85 hover:cursor-pointer shadow-lg hover:shadow-lg hover:shadow-[#93c5fd] transition duration-[0.6s]" onClick={e => navigate('/chat')}>
                    <div className='w-full h-full p-10 rounded-[calc(0.75rem-1px)] bg-slate-950'>
                        <h3 className="text-[23px]"><span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">Gemini </span>Pro</h3>
                        <p className="text-[17px]">Your Conversational Companion</p>
                        <p className="w-full flex p-3 mt-10 mb-10 items-center justify-center text-[200px]"><i className="lni lni-wechat bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text"></i></p>
                        <p className="text-[17px] p-1">Discuss ideas, ask questions, and receive informative responses. Chat Gemini can act as a sounding board, a source of knowledge, or even a creative collaborator.</p>
                        <p className="text-[17px] p-1">Chat Gemini can translate languages and understand diverse communication styles, fostering connection across borders.</p>
                    </div>
                </div>
                <div className="w-[500px] h-[700px] overflow-hidden rounded-xl bg-gradient-to-b from-[#d8b4fe] to-[#93c5fd] p-px opacity-85 hover:cursor-pointer shadow-lg hover:shadow-lg hover:shadow-[#d8b4fe] transition duration-[0.6s]">
                    <div className='w-full h-full p-10 rounded-[calc(0.75rem-1px)] bg-slate-950'>
                        <h3 className="text-[23px]"><span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">Gemini Vision </span>Pro</h3>
                        <p className="text-[17px]">See the World Through New Eyes</p>
                        <p className="w-full flex p-3 mt-10 mb-10 items-center justify-center text-[200px]"><i className="lni lni-eye bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text"></i></p>
                        <p className="text-[17px] p-1">Gain insights from visual content, identify objects, understand scenes, and generate descriptions.</p>
                        <p className="text-[17px] p-1">Make visual information more accessible with image descriptions and content analysis tools. Turn your ideas into stunning visuals. Describe a scene, concept, or emotion, and Vision Gemini will bring it to life.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Land