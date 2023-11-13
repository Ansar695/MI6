import profile from "../../assets/profile.png"
import { sidebarIcons } from "../../utils/SideBarIcons"
import Hameburger from "./Hameburger"

const Sidebar = ({setActive, active}) => {
  return (
    <div className='pt-[30px] md:mt-[50px] flex flex-row md:flex-col'
        
    >
        <div className='w-full md:w-[120px] h-[60px] md:h-[120px] rounded-full mx-auto mb-[25px] flex justify-between px-[20px] md:px-[0px]'>
            <img src={profile} className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] object-cover" alt="" />
            <Hameburger active={active} setActive={setActive} />
        </div>
        <div className="hidden md:block">
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
                className={`${active===icon?.id && 'mb-[24px] bg-white'} w-[90%] h-[62px] flex items-center pl-[15%] rounded-tr-[20px] rounded-br-[20px] cursor-pointer`} 
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
    </div>
  )
}

export default Sidebar