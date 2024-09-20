import Image from "next/image"

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            {/* Individual Categoris */}
           <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image 
                src='/img_beach_category.jpg'
                alt = 'beach category image'
                width={20}
                height={20}
            />
                <span className="text-sm ">Beach</span>
           </div>

           <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image 
                src='/img_beach_category.jpg'
                alt = 'beach category image'
                width={20}
                height={20}
            />
                <span className="text-sm ">Villas</span>
           </div>

           <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image 
                src='/img_beach_category.jpg'
                alt = 'beach category image'
                width={20}
                height={20}
            />
                <span className="text-sm ">Cabins</span>
           </div>

           <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image 
                src='/img_beach_category.jpg'
                alt = 'beach category image'
                width={20}
                height={20}
            />
                <span className="text-sm  ">Tiny homes</span>
           </div>

        </div>
    )
}
export default Categories