import { ButtonInterface } from "../../../utils/interface/Button.interface"
import { VariantEnum } from "../../../utils/enum/Button.enum";



export default function Button({variant,block,children}:ButtonInterface){
    
    type ButtonVariant = VariantEnum.SOLID | VariantEnum.OUTLINE |any;
    const getVariant = (params:ButtonVariant)=>{
        switch(params){
            case "SOLID":
                return "bg-primary text-white "
            default:
                return "text-black"
        }

    }

   

    

    return(
        <>
            <button className={`${block?'w-full':'px-4'} py-2.5 rounded-md ${getVariant(variant)} `}>{children}</button>
        </>
    )
}