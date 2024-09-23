
'use client'
import useLoginModal from "@/app/hooks/useLoginModal"
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"
// import AddPropertyModal from "../modals/AddPropertyModal"

interface AddPropertyButoonProps{
    userId?: string | null ;
}

const AddPropertyButton: React.FC<AddPropertyButoonProps> = ({
    userId
}) => {
    const loginModal = useLoginModal()
    const addPropertyModal = useAddPropertyModal()

    const nexusYourHome = () =>{
       if(userId){
        addPropertyModal.open()
       }else{
        loginModal.open()
       }
    }

    return(
        <div 
            onClick={nexusYourHome}
            className="p-2 text-sm font-semibold rounded-full hover:bg-gray-200 cursor-pointer"
            >
            Your Home
        </div>
    )

}
export default AddPropertyButton