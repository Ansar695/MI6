import { useState } from 'react'
import { closeIcon, hamburgerIcon, sidebarIcons } from '../../utils/SideBarIcons'

const Hameburger = ({active, setActive}) => {
    const[show, setShow] = useState(false)
    console.log("active ", active)
  return (
    <>
        <div className="flex items-center justify-center md:hidden cursor-pointer w-[42px] h-[42px] rounded-[16px] border-[1px] border-[rgba(233, 69, 208, 0.00)]" 
            style={{
                background: 'linear-gradient(90deg, rgba(56, 28, 77, 0.80), rgba(31, 7, 30, 0.80))',
                backdropFilter: 'blur(10px)'
            }}
            onClick={() => setShow(!show)}
        >{hamburgerIcon}</div>

    {show ?
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full bg-[#1E162E] p-[20px]' style={{zIndex: '1'}}>
        <div className='w-full flex justify-end mb-[30px]'>
        <div className="flex items-center justify-center md:hidden cursor-pointer w-[42px] h-[42px] rounded-[16px] border-[1px] border-[rgba(233, 69, 208, 0.00)]" 
            style={{
                background: 'linear-gradient(90deg, rgba(56, 28, 77, 0.80), rgba(31, 7, 30, 0.80))',
                backdropFilter: 'blur(10px)'
            }}
            onClick={() => setShow(!show)}
        >{closeIcon}</div>
        </div>

    {sidebarIcons?.map((icon, index) => (
            <>
            {icon?.isBorder 
            ?
            <div 
                key={index} 
                className="w-[90%] h-[1px]" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.20) 50%, rgba(255, 255, 255, 0.00) 103.04%)'}}
            ></div>
            :
            <div 
                key={index}
                className={`${active===icon?.id && 'mb-[24px] bg-white'} w-[100%] mx-auto h-[62px] flex items-center pl-[15%] rounded-[40px] cursor-pointer`} 
                style={{boxShadow: `${active===icon?.id ?'0px 10px 30px 0px #E945D0':''}`}}
                onClick={() => setActive(icon?.id)}
            >
                <span>{icon?.icon}</span>
                <span className={`ml-[7px] text-[14px] font-bold ${active===icon?.id ? 'text-[var(--magenta)]' : 'text-white'}`}>{icon?.title}</span>
            </div>
            }
            </>
        ))}
    </div>
    :''}
    </>
  )
}

export default Hameburger