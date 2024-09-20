import Link from 'next/link';
import Image from 'next/image';
import SearchFilters from './SearchFilters';
import UserNav from './UserNav';
import AddPropertyButton from './AddPropertyButton';

const Navbar = () =>{
    return(
        <nav className="w-full fixed top-0 left-0 py-4 lg:py-6 border-b px-5 lg:px-10 bg-white z-10 ">
            <div className="max-w-[1500px] mx-auto">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image
                            src = '/logo.png'
                            alt = 'Nexus Flow'
                            width={120}
                            height={32}
                        />
                    </Link>
                    <div className="flex space-x-4 mx-2">
                       <SearchFilters />
                    </div>
                    <div className="flex items-center space-x-6">
                        <AddPropertyButton />
                        <UserNav />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar