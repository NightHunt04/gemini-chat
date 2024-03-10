import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <div className="w-7/12 h-10 flex gap-6 items-center justify-between py-7 pt-8 px-12 bg-transparent font-noto text-lg text-gray-100">
            <div className="flex items-center gap-6 justify-center">
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