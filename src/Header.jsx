import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Header() {
    return (
        <header className="w-full h-screen">
            <img className="w-full h-full object-cover"
                src="/src/assets/6.png"
                alt="header-img"
            />
            <div>
                <div className='absolute inset-0 flex left-10 top-[-70px] text-shadow items-center text-white text-xl font-bold text-center'>
                    <TypeAnimation
                        sequence={[
                            'Where every cup tells a story.',
                            2000,
                            'Where taste comes first.',
                            2000,
                            'Where quality meets tradition.',
                            2000,

                        ]}
                        wrapper="span"
                        speed={20}
                        style={{ fontSize: '2em', display: 'inline-block ' }}
                        repeat={Infinity}
                    />
                </div>
                <p className='absolute  top-[60px] text-shadow inset-0 flex left-10 items-center text-white text-xl font-bold '>
                    Our commitment to excellence begins with sourcing the finest beans <br /> and extends to every aspect of your experience.</p>
                <button className="absolute top-[400px] left-10 px-4 py-2 p-10 text-lg font-bold text-white bg-white/10 border border-white shadow-blue-300 rounded text-shadow backdrop-blur-md hover:bg-white/50  transition">
                    Order Now!
                </button>
            </div>

        </header>
    )
}

export default Header
