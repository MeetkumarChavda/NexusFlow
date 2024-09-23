import Image from "next/image";

interface CategoriesProps{
    dateCategory: string;
    setCategory:(category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
     dateCategory,
     setCategory 
}) => {
    return (
        <>
           <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            {/* Individual Categoris */}
           <div 
            onClick={() => setCategory('Beach')}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${dateCategory == 'Beach'?'border-gray-800':'border-white'} border-white opacity-60 hover:border-gray-200 hover:opacity-100`}>
            <Image 
                src='/img_beach_category.jpg'
                alt = 'beach category image'
                width={20}
                height={20}
            />
                <span className="text-sm ">Beach</span>
           </div>

           <div 
            onClick={() => setCategory('Villas')}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dateCategory == 'Villas' ? 'border-gray-800':'border-white'} border-white opacity-60 hover:border-gray-200 hover:opacity-100`}>
            <Image 
                src='/img_beach_category.jpg'
                alt = 'beach category image'
                width={20}
                height={20}
            />
                <span className="text-sm ">Villas</span>
           </div>

           <div 
           onClick={() => setCategory('Cabins')}
           className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dateCategory == 'Cabins' ? 'border-gray-800':'border-white'} border-white opacity-60 hover:border-gray-200 hover:opacity-100`}>            
            <Image 
                src='/img_beach_category.jpg'
                alt = 'beach category image'
                width={20}
                height={20}
            />
                <span className="text-sm ">Cabins</span>
           </div>

           <div 
            onClick={() => setCategory('Tiny homes')}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dateCategory == 'Tiny homes' ? 'border-gray-800':'border-white'} border-white opacity-60 hover:border-gray-200 hover:opacity-100`}>
            <Image 
                src='/img_beach_category.jpg'
                alt = 'beach category image'
                width={20}
                height={20}
            />
                <span className="text-sm">Tiny homes</span>
           </div>

        </div>
        </>
    )
}
export default Categories;