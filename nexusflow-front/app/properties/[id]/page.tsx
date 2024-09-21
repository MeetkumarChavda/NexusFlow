import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] overflow-hidden rounded-xl relative mb-4">
                <Image
                    fill
                    src = '/beach.webp'
                    className="object-cover  w-full h-full"
                    alt = 'beach house'
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">4 guest - 2 bedrooms - 1 bathroom</span>
                    <hr />
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
                    <hr />
                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error voluptatibus labore officia sint, adipisci similique voluptas necessitatibus reiciendis nam excepturi blanditiis possimus illo, hic tempora odio id laboriosam sit.
                    </p>
                </div>
                <ReservationSidebar />
            </div>
        </main>
    )
}
export default PropertyDetailPage;