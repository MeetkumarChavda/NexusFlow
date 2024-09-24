interface CustomButtonProps{
    label:string;
    className?:string;
    onClick: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) =>{
    return(

        <div 
            onClick={onClick}
            className={`w-full py-4 bg-nexus hover:bg-nexus-dark text-center rounded-xl text-white transition cursor-pointer ${className}`}
        >
            {label}
        </div>
    )
}
export default CustomButton;