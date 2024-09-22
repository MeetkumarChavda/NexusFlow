import Image from "next/image";
import { PropertyType } from "./PropertyList";

interface PropertyProps{
    property:PropertyType
}
const PropertyListItem:React.FC<PropertyProps> = ({
    property
}) =>{

    return(
       <div className="cursor-pointer">
        <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image 
                fill
                src={property.image_url}
                sizes="(max-width:768px) 768px (max-height:1200px) 768px , 768px"
                alt = 'property image'
                className="hover:scale-110 object-cover transform h-full w-full"
            />
        </div>
        <div className="mt-2">
            <div className="text-lg font-bold">{property.title}</div>
        </div>
        <div className="mt-2">
            <p className="text-sm text-gray-500"><strong>${property.price_per_night}</strong></p>
        </div>
        
       </div>
    );

}
export default PropertyListItem;