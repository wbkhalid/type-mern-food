import {
  Loader2,
  LocateIcon,
  Mail,
  MapPin,
  MapPinnedIcon,
  Plus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ChangeEvent, FocusEvent, FormEvent, useRef, useState } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Profile = () => {
  let loading = false
  const imageRef = useRef<HTMLInputElement | null>(null)

  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    profilePicture: ''
  })
  const [selectedProfilePicture, setSelectedProfilePicture] = useState<string>('')
  const fileChangeHandler = (e: FocusEvent<HTMLInputElement>) => {
    let file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setSelectedProfilePicture(result)
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result
        }))
      }
      reader.readAsDataURL(file)
    }
  }


  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData({ ...profileData, [name]: value })
  }

  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log(profileData);
  
  }


  

  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
            <AvatarImage src={selectedProfilePicture} />
            <AvatarFallback>CN</AvatarFallback>
            <input type="file" className="hidden" ref={imageRef} accept="image/*" onChange={fileChangeHandler} />
            <div onClick={() => imageRef.current?.click()} className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30  roundeded-full cursor-pointer">
              <Plus className="text-white w-8 h-8" />
            </div>
          </Avatar>
          <Input
            type="text"
            name='fullName'
            className="font-bold text-2xl outline-none border-none focus-visible:ring-2"
            value={profileData.fullName}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Mail className="text-gray-500" />
          <div className="w-full">
            <Label>Email</Label>
            <input
              name="email"
              value={profileData.email}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <LocateIcon className="text-gray-500" />
          <div className="w-full">
            <Label>Address</Label>
            <input
              name="address"
              value={profileData.address}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPin className="text-gray-500" />
          <div className="w-full">
            <Label>City</Label>
            <input
              name="city"
              value={profileData.city}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPinnedIcon className="text-gray-500" />
          <div className="w-full">
            <Label>Country</Label>
            <input
              name="country"
              value={profileData.country}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button type='submit' disabled={loading} className='bg-orange hover:bg-hoverOrange'>
          {loading ? <Loader2 className='animate-spin w-5 h-5' /> : 'Update'}
        </Button>
      </div>



    </form>
  )
}

export default Profile
