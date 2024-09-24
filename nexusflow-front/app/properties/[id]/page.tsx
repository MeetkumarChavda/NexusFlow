import Image from "next/image";
import Link from "next/link";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
<<<<<<< Updated upstream

const PropertyDetailPage = () => {
=======
import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";
const PropertyDetailPage = async (
    {params}: { params: {id: string }}) => {
   
    const property = await apiService.get(`/api/properties/${params.id}`)

    const userId = await getUserId();
    console.log('userId', userId);
>>>>>>> Stashed changes
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] overflow-hidden rounded-xl relative mb-4">
                <Image
                    fill
                    src = {property.image_url}
                    className="object-cover  w-full h-full"
                    alt = 'beach house'
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">4 guest - 2 bedrooms - 1 bathroom</span>
                    <hr />
<<<<<<< Updated upstream
                    <div className="py-6 flex items-center space-x-4">
                        <Image
                        src = '/profile_image.jpg'
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt = 'User name'
                        />
                        <p><strong>Meet Chavda</strong> is your host</p>
                    </div>
=======
                    <Link 
                        href={`/landlords/${property.landlord.id}`}
                        className="py-6 flex items-center space-x-4"
                    >
                    {property.landlord.avatar_url && (
                            <Image
                                src={property.landlord.avatar_url}
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user name"
                            />
                        )}
                        <p><strong>{property.landlord.name}</strong> is your host</p>
                    </Link>
>>>>>>> Stashed changes
                    <hr />
                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error voluptatibus labore officia sint, adipisci similique voluptas necessitatibus reiciendis nam excepturi blanditiis possimus illo, hic tempora odio id laboriosam sit.
                    </p>
                </div>
<<<<<<< Updated upstream
                <ReservationSidebar />
=======
                <ReservationSidebar 
                    property={property}
                    userId={userId}
                />
>>>>>>> Stashed changes
            </div>
        </main>
    )
}
export default PropertyDetailPage;