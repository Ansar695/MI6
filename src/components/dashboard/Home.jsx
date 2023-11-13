import { useState } from "react"
import { endPage, nextPage, pagination, prevPage, startPage } from "../../utils/SideBarIcons"
import { data } from "../../utils/data"

const Home = () => {
    const[pageNum, setPageNum] = useState(1)
  return (
    <div className="w-[90%] mx-auto">
        <h1 
            className="text-[32px] text-white text-center md:text-start  mt-[20px] mb-[0px]"
            style={{fontFamily: 'Nebula'}}
        >Welcome, Mike</h1>
        <p className="text-white text-center md:text-start" style={{fontFamily: 'Plus Jakarta Sans'}}>Here is your articles history</p>
        <div 
            className="mt-[25px] w-full h-[80%] rounded-[20px] mx-auto p-[20px] md:p-[0px]" 
            style={{
                background: 'linear-gradient(206deg, #6F40B0 -0.61%, #1E162E 57.68%)', 
                backdropFilter: 'blur(10px)',
                border: '2px solid linear-gradient(206deg, #6F40B0 -0.61%, #1E162E 57.68%)'
            }}
        >
            <div className="w-100 hidden md:flex p-[0px] md:p-[20px]">
                <div className="font-bold text-white w-[5%]">#</div>
                <div className="font-bold text-white  w-[20%]">Photo</div>
                <div className="font-bold text-white  w-[20%]">Headline</div>
                <div className="font-bold text-white  w-[30%]">Preview</div>
                <div className="font-bold text-white  w-[15%]">Created date</div>
                <div className="font-bold text-white  w-[10%]"></div>
            </div>
            <div className="w-100 hidden md:block h-[5px] bg-[#E945D0] mb-[20px]" style={{boxShadow: '0px 10px 30px 0px #E945D0'}}></div>
            <div className="md:border-b-[1px] border-[rgba(255, 255, 255, 0.10)] pt-[20px] md:pt-[0px]">
            {data?.map((da, index) => (
                <div key={index} className="w-100 flex flex-col md:flex-row gap-[20px] items-center  px-[0px] md:px-[20px] pb-[20px] md:pb-[0px] mb-[15px] border-b-[1px] border-[rgba(255, 255, 255, 0.10)] md:border-none">
                    <div className="text-[14px] text-white w-[2%] hidden md:block">{da?.id}</div>
                    <div className="w-full h-full flex items-center gap-[20px] w-full md:w-[35%]">
                        <div className="text-[14px] text-white w-[40%%]">
                            <img src={da?.img} className="w-[120px] h-[90px] rounded-[10px] object-cover" alt="" />
                        </div>
                        <div className="text-[14px] text-white w-[60%]">{da?.headline}</div>
                    </div>
                    <div className="text-[14px] text-white  w-[38%] hidden md:block">
                    {da?.preview?.length>100 ? da?.preview?.slice(0, 100)+" ..." : da?.preview}
                    </div>
                    <div className="text-[14px] text-white w-full md:w-[17%] flex justify-between">
                        <span className="block md:hidden">Created At: </span>
                        <span>{da?.createdAT}</span>
                    </div>
                    <div className="text-[14px] text-white w-full md:w-[8%]">
                        <button 
                            className="w-full md:w-[50px] h-[38px] rounded-[10px] text-[14px] leading-[0px] cursor-pointer border-[rgba(255, 255, 255, 0.50)]"
                            style={{
                                background: 'radial-gradient(96.63% 140.33% at 76.68% 66.67%, rgba(233, 69, 208, 0.00) 0%, rgba(233, 69, 208, 0.50) 100%)'
                            }}
                        >View</button>
                    </div>
                </div>
            ))}
            </div>
            <div className="flex items-center justify-end gap-[10px] md:h-[55px] px-[20px] pb-[20px] md:pb-[0px]">
                <span 
                    className={`'bg-[#E945D0]'} cur-pointer w-[32px] h-[32px] flex items-center justify-center cursor-pointer text-white rounded-[4px] bg-[rgba(255, 255, 255, 0.05)] border-[1px] border-[rgba(47, 47, 47, 0.10)]`}
                    onClick={() => setPageNum(1)}
                >{startPage}</span>
                <span 
                    className={`'bg-[#E945D0]'} cur-pointer w-[32px] h-[32px] flex items-center justify-center cursor-pointer text-white rounded-[4px] bg-[rgba(255, 255, 255, 0.05)] border-[1px] border-[rgba(47, 47, 47, 0.10)]`}
                    onClick={() => setPageNum(pageNum > 1 ? pageNum - 1 : 1)}
                >{prevPage}</span>
                
                {pagination?.map((page, index) => (
                <span 
                    key={index} 
                    className={`${pageNum===page?.page && 'bg-[#E945D0]'} cur-pointer w-[32px] h-[32px] flex items-center justify-center cursor-pointer text-white rounded-[4px] bg-[rgba(255, 255, 255, 0.05)] border-[1px] border-[rgba(47, 47, 47, 0.10)]`}
                    onClick={() => setPageNum(page?.page)}
                >
                    {page?.icon ? page?.icon : page?.page}
                </span>
                ))}

                <span 
                    className={`cur-pointer w-[32px] h-[32px] flex items-center justify-center cursor-pointer text-white rounded-[4px] bg-[rgba(255, 255, 255, 0.05)] border-[1px] border-[rgba(47, 47, 47, 0.10)]`}
                    onClick={() => setPageNum(pageNum+1)}
                >{nextPage}</span>
                <span 
                    className={`cur-pointer w-[32px] h-[32px] flex items-center justify-center cursor-pointer text-white rounded-[4px] bg-[rgba(255, 255, 255, 0.05)] border-[1px] border-[rgba(47, 47, 47, 0.10)]`}
                    onClick={() => setPageNum(Math.ceil(data?.length/5))}
                >{endPage}</span>
            </div>
        </div>
    </div>
  )
}

export default Home