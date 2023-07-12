import Header from "@/components/Header/Header"
import Carousel from "@/components/Carousel/Carousel"
import { MdKeyboardArrowRight } from 'react-icons/md';
import Card from "@/components/Card/Card";
import DetailCard from "@/components/DetailCard/DetailCard";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home(){
    return(
        <>
            <Header/>
            
            <div className="px-4 lg:px-20 flex items-center gap-1 mt-6 lg:mt-0">
                <div className="text-primary">
                    Home
                </div>
                <div className="text-grey">
                    <MdKeyboardArrowRight/>
                </div>
                <div className="text-primary">
                    Layanan Desain
                </div>
                <div className="text-grey">
                    <MdKeyboardArrowRight/>
                </div>
                <div className="text-grey">
                    Omah Apik 3
                </div>
            </div>
            <div className="mt-6">
                <Carousel/>
            </div>
            <div className="mt-6 px-4 lg:px-20 lg:flex lg:gap-6">
                <div className="w-full lg:w-5/6">
                    <div className="text-2xl font-semibold">
                        Tampilan Rumah
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>



                    </div>  
                </div>
                <div className="w-full lg:w-2/6 mt-5 lg:mt-0">
                   <DetailCard/>
                    <div className="mt-6">
                    <Testimonial/>
                    </div>
                </div>
                

            </div>
        </>
    )
}