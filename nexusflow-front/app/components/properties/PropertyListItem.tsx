'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';

export type PropertyType = {
    id: string;
    title: string;
    image: string;
    price_per_night: number;
    is_favorite: boolean;
}

const PropertyListItem = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/property/');
                console.log(response.data);
                setProperties(response.data);
            } catch (error) {
                console.error('Error occurred while fetching Properties:', error);
            }
        };
        getData();
    }, []);

    return (
        <>
            {properties.length > 0 ? (
                <>
                    {properties.map((item) => {
                        return (
                            <div key={item.id} className="cursor-pointer">
                                <div className="relative overflow-hidden aspect-square rounded-xl">
                                    <Image
                                        fill
                                        src={item.image || '/default-image.jpg'} // dynamic image or fallback
                                        sizes="(max-width:768px) 768px, (max-height:1200px) 768px, 768px"
                                        alt={item.title || 'Property Image'}
                                        className="hover:scale-110 object-cover transform h-full w-full"
                                    />
                                </div>
                                <div className="mt-2">
                                    <div className="text-lg font-bold">{item.title || 'Property Name'}</div>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        <strong>${item.price_per_night || '1000'}</strong>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </>
            ) : (
                <p>No properties available</p>
            )}
        </>
    );
};

export default PropertyListItem;
