export default function Card(){
    return(
        <>
            <div  className=" p-4 bg-white border border-gray-200 rounded-lg">
               <div className="flex items-center justify-center">
                    <img className="w-full" src="/images/img/image1.jpg"/>
               </div>
               <div className="font-bold text-xl mt-6">
                Ruang Keluarga
               </div>
               <div>2.0 x 2.9</div>
            </div>
        </>
    )
}