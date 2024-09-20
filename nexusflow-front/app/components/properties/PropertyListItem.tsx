import Image
 from "next/image";
const PropertyListItem = () =>{

    return(
       <div className="cursor-pointer">
        <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image 
                fill
                src='/beach.webp'
                sizes="(max-width:768px) 768px (max-height:1200px) 768px , 768px"
                alt = 'property image'
                className="hover:scale-110 object-cover transform h-full w-full"
            />
        </div>
        <div className="mt-2">
            <div className="text-lg font-bold">Property Name</div>
        </div>
        <div className="mt-2">
            <p className="text-sm text-gray-500"><strong>$1000</strong></p>
        </div>
        
       </div>
    );

}
export default PropertyListItem;