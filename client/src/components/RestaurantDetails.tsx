import Image from '@/assets/hero_pizza.png'
import { Badge } from './ui/badge'
import { Timer } from 'lucide-react'
import AvailableMenu from './AvailableMenu'

const RestaurantDetails = () => {
    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="w-full">
                <div className="w-full h-32 md:h-64">
                    <img src={Image} alt="" className='object-cover w-full h-full shadow-lg rounded-lg' />
                </div>

                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='my-5'>
                        <h1 className="font-medium text-xl">{"Restaurant Name"}</h1>
                        <div className="flex gap-2 my-2">
                            {['Birani', 'Chappati'].map((cuisine: string, idx: number) => (
                                <Badge key={idx}>{cuisine}</Badge>
                            ))}
                        </div>

                        <div className="flex md:flex-row flex-col gap-2 my-5">
                            <div className="flex items-center gap-2">
                                <Timer className="w-5 h-5" />
                                <h1 className="flex items-center gap-2 font-medium">
                                    Delivery Time: <span className="text-[#D19254]">35 mins</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <AvailableMenu />

            </div>
        </div>
    )
}

export default RestaurantDetails