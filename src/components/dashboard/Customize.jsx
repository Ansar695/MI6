import { closeIcon } from "../../utils/SideBarIcons"
import { keywords } from "../../utils/data"

const Customize = ({setActive}) => {
  return (
    <div 
        className='absolute top-0 left-0 right-0 bottom-0 w-[98%] mt-[10px] h-[1050px] md:h-[790px] rounded-[20px] mx-auto p-[30px]' 
        style={{background: 'linear-gradient(90deg, #381C4D 0%, #1F071E 100%)', zIndex: '2'}}
    >
        <div className="flex justify-between items-center">
            <h1 className="text-white font-bold text-[32px]">Customize</h1>
            <span className="cursor-pointer" onClick={() => setActive(1)}>{closeIcon}</span>
        </div>
        <label className="block mb-2 mt-[30px] text-white">Industry</label>
        <select id="countries" className="mb-[30px] rounded-[10px] bg-[transparent] border-[1px] border-[rgba(255, 255, 255, 0.10)] text-white block w-full p-2.5 ">
            <option value="Marketing">Marketing</option>
        </select>
        <p className="text-[14px] text-white mb-[10px]">Keywords</p>
        <div className="border-[1px] border-[rgba(255, 255, 255, 0.10)] rounded-[10px] p-[10px] flex flex-wrap gap-[10px]">
            {keywords?.map((keyword, index) => (
                <div 
                    key={index}
                    className="w-auto p-[14px] rounded-[10px] text-white flex gap-[10px] items-center"
                    style={{
                        boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.10), 0px 0px 5px 0px #FFACE4 inset, 0px -1px 8px 0px #9375B6 inset',
                        background: 'radial-gradient(96.63% 140.33% at 76.68% 66.67%, rgba(233, 69, 208, 0.00) 0%, rgba(233, 69, 208, 0.50) 100%))'
                    }}
                >
                    <span>{keyword?.keyword}</span>
                    <span className="cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM12.9422 12.0578C13.0003 12.1159 13.0463 12.1848 13.0777 12.2607C13.1092 12.3366 13.1254 12.4179 13.1254 12.5C13.1254 12.5821 13.1092 12.6634 13.0777 12.7393C13.0463 12.8152 13.0003 12.8841 12.9422 12.9422C12.8841 13.0003 12.8152 13.0463 12.7393 13.0777C12.6634 13.1092 12.5821 13.1253 12.5 13.1253C12.4179 13.1253 12.3366 13.1092 12.2607 13.0777C12.1848 13.0463 12.1159 13.0003 12.0578 12.9422L10 10.8836L7.94219 12.9422C7.88412 13.0003 7.81518 13.0463 7.73931 13.0777C7.66344 13.1092 7.58213 13.1253 7.5 13.1253C7.41788 13.1253 7.33656 13.1092 7.26069 13.0777C7.18482 13.0463 7.11588 13.0003 7.05782 12.9422C6.99975 12.8841 6.95368 12.8152 6.92226 12.7393C6.89083 12.6634 6.87466 12.5821 6.87466 12.5C6.87466 12.4179 6.89083 12.3366 6.92226 12.2607C6.95368 12.1848 6.99975 12.1159 7.05782 12.0578L9.11641 10L7.05782 7.94219C6.94054 7.82491 6.87466 7.66585 6.87466 7.5C6.87466 7.33415 6.94054 7.17509 7.05782 7.05781C7.17509 6.94054 7.33415 6.87465 7.5 6.87465C7.66586 6.87465 7.82492 6.94054 7.94219 7.05781L10 9.11641L12.0578 7.05781C12.1159 6.99974 12.1848 6.95368 12.2607 6.92225C12.3366 6.89083 12.4179 6.87465 12.5 6.87465C12.5821 6.87465 12.6634 6.89083 12.7393 6.92225C12.8152 6.95368 12.8841 6.99974 12.9422 7.05781C13.0003 7.11588 13.0463 7.18482 13.0777 7.26069C13.1092 7.33656 13.1254 7.41788 13.1254 7.5C13.1254 7.58212 13.1092 7.66344 13.0777 7.73931C13.0463 7.81518 13.0003 7.88412 12.9422 7.94219L10.8836 10L12.9422 12.0578Z" fill="white" fillOpacity="0.6"/>
                        </svg>
                    </span>
                </div>
            ))}
                <div className="p-[14px] text-white opacity-60 cursor-pointer">
                    Add Keyword
                </div>
        </div>

        <div className="mt-[30px] flex flex-col">
            <label className="relative inline-flex items-center mb-5 cursor-pointer mb-[10px]">
                <input type="checkbox" value="" checked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E945D0]"></div>
                <span className="ms-3 text-sm font-medium text-white">
                Filter out negative or criminal topics or news - Yes
                </span>
            </label>

            <label className="relative inline-flex items-center mb-5 cursor-pointer mb-[10px]">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E945D0]"></div>
                <span className="ms-3 text-sm font-medium text-white">
                Filter out promotions or sales from 3rd parties or other businesses - No
                </span>
            </label>

            <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" checked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E945D0]"></div>
                <span className="ms-3 text-sm font-medium text-white">
                Filter out all topics about 3rd parties, specific places or specific people (not often recommend)- Yes
                </span>
            </label>
        </div>
        <button className="bg-[#E945D0] px-[18px] py-[12px] text-white outline-none mt-[60px] rounded-[10px]" style={{boxShadow: '0px 10px 30px 0px #E945D0'}}>Increase Article Volume</button>

        <div 
            className="my-[30px] w-[80%] mx-auto border-[2px] border-[rgba(233, 69, 208, 0.00)]" 
            style={{
                borderRadius: '0px 0px 20px 20px', 
                background: 'linear-gradient(90deg, rgba(56, 28, 77, 0.80), rgba(31, 7, 30, 0.80)))',
                backdropFilter: 'blur(10px)'
            }}
        
        ></div>
        <div className="flex items-center justify-end gap-[10px]">
            <button className="px-[18px] py-[12px] text-white  border-[1px] border-[rgba(242, 228, 241, 0.10)] rounded-[10px]">
            Cancel
            </button>
            <button className="bg-[#E945D0] px-[18px] py-[12px] text-white outline-none rounded-[10px]" style={{boxShadow: '0px 10px 30px 0px #E945D0'}}>
                Save
            </button>
        </div>
    </div>
  )
}

export default Customize