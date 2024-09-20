const SearchFilters = ()=>{

    return (
       <div className="flex lg:h-[64px] h-[48px] flex-row items-center justify-between border rounded-full" >
            {/* Filters */}
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="cursor-pointer w-[250px] h-[48px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Where</p>
                        <p className="text-sm">Wanted location</p>
                    </div>

                    <div className="cursor-pointer h-[48px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check in</p>
                        <p className="text-sm">Add dates</p>
                    </div>
                    
                    <div className="cursor-pointer h-[48px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check out</p>
                        <p className="text-sm">Add dates</p>
                    </div>

                    <div className="cursor-pointer h-[48px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-sm">Add guests</p>
                    </div>
                </div>
            </div>

            {/* Search Button */}
            <div className="p-2">
                <div className="p-2 lg:p-4 cursor-pointer bg-nexus hover:bg-nexus-dark rounded-full transition text-white">
                    <svg 
                        viewBox="0 0 32 32" 
                        style={{display:'block', fill:'red', height: '15px', width: '16px', stroke: 'currentColor', strokeWidth:4, overflow:'visible'}} 
                        aria-hidden="true" role="presentation" focusable="false"
                    >
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                    </svg>
                </div>
            </div>
            
       </div>
    )
}
export default SearchFilters