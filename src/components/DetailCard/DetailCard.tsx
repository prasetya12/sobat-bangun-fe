import Button from "../Button/Button";
import { VariantEnum } from "../../../utils/enum/Button.enum";

export default function DetailCard(){
    return(
        <>
            <div  className=" p-6 bg-white border border-gray-200 rounded-lg divide-y">
              <div className="pb-4">
                <div className="text-2xl font-semibold">
                    Omah Apik 3
                </div>
                <div className="mt-2 flex flex-column items-center gap-3">
                    <img src="/images/logo/logo1.png"/>
                    <div>
                        Studio SAe
                    </div>
                </div>
                <div className="mt-3 flex flex-column">
                    <div className="w-1/3">
                        Jenis Rumah
                    </div>
                    <div>
                        Scandinavian
                    </div>
                </div>
                <div className="mt-2 flex flex-column items-center">
                    <div className="w-1/3">
                        Tipe Desain
                    </div>
                    <div className="flex gap-2 text-primary">
                        <img src="/icons/ic_check.svg"/>
                        <div>Dapat Dimodifikasi</div>
                    </div>
                </div>
              </div>
              <div className="py-3 flex justify-between">
                <div className="flex flex-col items-center">
                    <div>
                         <img src="/icons/ic_width.svg"/>

                    </div>
                    <div className="text-xs text-[#808080]">Dimensi Tanah</div>
                    <div className="text-sm">15 x 8m</div>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                         <img src="/icons/ic_house.svg"/>

                    </div>
                    <div className="text-xs text-[#808080]">Luas Bangunan</div>
                    <div className="text-sm">112m<sup>2</sup></div>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                         <img src="/icons/ic_stairs.svg"/>

                    </div>
                    <div className="text-xs text-[#808080]">Lantai</div>
                    <div className="text-sm">2</div>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                         <img src="/icons/ic_bedroom.svg"/>

                    </div>
                    <div className="text-xs text-[#808080]">Kamar Tidur</div>
                    <div className="text-sm">4</div>
                </div>
                
              </div>
              <div className="pt-3">
                <div className="text-sm">
                    Harga Desain
                </div>
                <div className="font-semibold text-3xl">
                    Rp. 32.500.000
                </div>
                <div className="text-sm text-[#808080]">
                Harga konstruksi mulai dari Rp 560.000.000
                </div>
                <div className="mt-4">
                    <Button variant={VariantEnum.SOLID} block={true}>Konsultasi Sekarang</Button>
                </div>
              </div>
            </div>
        </>
    )
}