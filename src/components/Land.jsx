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
            <p className="text-[16.5px] text-center tracking-wide text-gray-100 mr-7">
                <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">Gemini AI </span> 
                is your powerful and versatile partner, designed to assist you in two key areas: conversation and vision.
            </p>

            <div className="relative flex items-center lg:gap-7 md:gap-3 sm:gap-4 lg:p-5 lg:mt-[60px] md:p-2 md:mt-[40px] justify-start">
                <div className="lg:w-[500px] lg:h-[700px] md:w-[350px] md:h-[520px] sm:w-[280px] sm:h-[480px] sm:mt-[100px] overflow-hidden rounded-xl bg-gradient-to-r from-[#d8b4fe] to-[#93c5fd] p-px opacity-85 hover:cursor-pointer shadow-lg hover:shadow-lg hover:shadow-[#93c5fd] transition duration-[0.6s]" onClick={e => navigate('/chat')}>
                    <div className='w-full h-full p-10 sm:p-7 rounded-[calc(0.75rem-1px)] bg-slate-950'>
                        <h3 className="lg:text-[23px] md:text-[17px] sm:text-[15px]"><span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">Gemini </span>Pro</h3>
                        <p className="lg:text-[17px] md:text-[15px] sm:text-[15px]">Your Conversational Companion</p>
                        <p className="w-full flex lg:p-3 lg:mt-10 lg:mb-10 md:p-2 md:mt-4 sm:p-1 sm:mt-2 items-center justify-center lg:text-[200px] md:text-[100px] sm:text-[60px]"><i className="lni lni-wechat bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text"></i></p>
                        <p className="lg:text-[17px] md:text-[13px] sm:text-[13px] lg:p-1 md:p-1">Discuss ideas, ask questions, and receive informative responses. Chat Gemini can act as a sounding board, a source of knowledge, or even a creative collaborator.</p>
                        <p className="lg:text-[17px] md:text-[13px] sm:text-[13px] lg:p-1 md:p-1">Chat Gemini can translate languages and understand diverse communication styles, fostering connection across borders.</p>
                    </div>
                </div>
                <div className="lg:w-[500px] lg:h-[700px] md:w-[350px] md:h-[520px] sm:w-[280px] sm:h-[480px] sm:mt-[100px] overflow-hidden rounded-xl bg-gradient-to-b from-[#d8b4fe] to-[#93c5fd] p-px opacity-85 hover:cursor-pointer shadow-lg hover:shadow-lg hover:shadow-[#d8b4fe] transition duration-[0.6s]">
                    <div className='w-full h-full p-10 sm:p-7 rounded-[calc(0.75rem-1px)] bg-slate-950'>
                        <h3 className="lg:text-[23px] md:text-[17px] sm:text-[15px]"><span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">Gemini Vision </span>Pro</h3>
                        <p className="lg:text-[17px] md:text-[15px] sm:text-[15px]">See the World Through New Eyes</p>
                        <p className="w-full flex lg:p-3 lg:mt-10 lg:mb-10 md:p-2 md:mt-4 sm:p-1 sm:mt-1 items-center justify-center lg:text-[200px] md:text-[100px] sm:text-[60px]"><i className="lni lni-eye bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text"></i></p>
                        <p className="lg:text-[17px] md:text-[13px] sm:text-[13px] lg:p-1 md:p-1">Gain insights from visual content, identify objects, understand scenes, and generate descriptions.</p>
                        <p className="lg:text-[17px] md:text-[13px] sm:text-[13px] lg:p-1 md:p-1">Make visual information more accessible with image descriptions and content analysis tools. Turn your ideas into stunning visuals. Describe a scene, concept, or emotion, and Vision Gemini will bring it to life.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Land