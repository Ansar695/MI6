import { useState } from "react"
import Sidebar from "../components/dashboard/Sidebar"
import Home from "../components/dashboard/Home"
import Customize from "../components/dashboard/Customize"
import { moonIcon } from "../utils/SideBarIcons"

const Dashboard = () => {
  const[active, setActive] = useState(1)
  return (
    <>
    {active===2 && <Customize setActive={setActive} />}
    <div 
      className='w-full flex flex-col md:flex-row relative bg-contain md:bg-cover bg-bottom md:bg-center' 
      style={{
        background: 'linear-gradient(90deg, #1E162E 24.02%, rgba(111, 64, 176, 0.00) 98.12%), url("https://s3-alpha-sig.figma.com/img/3cd3/dbf4/474d5e37a37f2dff92cda23572f68e32?Expires=1700438400&Signature=JyriE-NqCVch7KQtTYjQ8jSjqRyMV-lHZAxh8s3EQ0ajKAvMTMFF~jnB-4gMG-TnLJt0WM7DmlDcYe4yFjK01aRtkqJL6zRm95Mqp5OWmEB4SPzsCw79yfrhuDl6WvfaFmLICODHu~5xRnFEtckQdrI3oxU~98ug6oaKhRRyefbi1SvqWGhPTg2tY~-ffqAXN3Pb7~wIpRuwNX47~fXtnUN8gcVwVA8T1OXd5fI7Pv3mXyXZTKrnCKojWXOIxCxatm5S4UJiMIAzD0-2nWsE6AuPpW4mPgZQDobKCdgmOSNkOXIFW3E63qqn8QHxvqa6GZHiLFrynyjWba37~LqaNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")', 
        // backgroundPosition: '100%'
      }}
    >
      <div className="opacity-30 md:opacity-100 fixed top-0 left-0" style={{zIndex: '0'}}>{moonIcon}</div>
        <div className='basis-[20%] w-[100%] md:w-[20%] h-[100vh] relative md:fixed'>
            <Sidebar 
              setActive={setActive}
              active={active}
            />
        </div>
        <div className='basis-[100%] md:basis-[80%] h-auto pb-[50px] ml-[0%] md:ml-[20%] lg:basis-[95%]' style={{minHeight: '100vh'}}>
          <Home />
        </div>
    </div>
    </>
  )
}

export default Dashboard