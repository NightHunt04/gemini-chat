import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <div className="lg:w-8/12 md:w-9/12 h-10 flex lg:gap-6 md:gap-4 sm:w-full sm:px-14 items-center justify-between lg:py-7 lg:pt-8 lg:px-5 md:py-7 md:px-2 bg-transparent font-noto text-lg text-gray-100">
            <div className="flex items-center lg:gap-6 md:gap-4 sm:gap-3 justify-center">
                <NavLink
                    to='/'
                    className={({isActive}) => `${isActive ? 'text-[#9bc9ff]' : 'text-gray-200'}`}>
                    Home
                </NavLink>

                <NavLink
                    to='/about'
                    className={({isActive}) => `${isActive ? 'text-[#9bc9ff]' : 'text-gray-200'}`}>
                    About
                </NavLink>

                <NavLink
                    to='/code'
                    className={({isActive}) => `${isActive ? 'text-[#9bc9ff]' : 'text-gray-200'}`}>
                    Code
                </NavLink>
            </div>
            <div>
                <Link
                    to='https://ai.google.dev/tutorials'
                    target='_blank'>
                    <p><span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">Gemini </span>docs</p>
                </Link>
            </div>
        </div>
    )
}

export default Header