<<<<<<< Updated upstream
import Image
 from "next/image";
const PropertyListItem = () =>{
=======
import Image from "next/image";
import { PropertyType } from "./PropertyList";
import { useRouter } from "next/navigation";
import FavoriteButton from "../FavoriteButton";


interface PropertyProps{
    property: PropertyType,
    markFavorite?: (is_favorite: boolean) => void;
}
const PropertyListItem:React.FC<PropertyProps> = ({
    property,
    markFavorite
}) =>{
    const router = useRouter();
>>>>>>> Stashed changes

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
             {markFavorite && (
                    <FavoriteButton
                        id={property.id}
                        is_favorite={property.is_favorite}
                        markFavorite={(is_favorite) => markFavorite(is_favorite)}
                    />
                )}
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