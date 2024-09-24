import { create } from 'zustand';

interface AddProprtyModalStore{
    isOpen:boolean;
    open : () => void;
    close: () => void;
}
const useAddPropertyModal = create<AddProprtyModalStore>((set)=>({
    isOpen:false,
    open : () => set({isOpen:true}),
    close: () => set({isOpen:false})
}));

export default useAddPropertyModal;