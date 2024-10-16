import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { HandPlatter, Menu, Moon, PackageCheck, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Separator } from "./ui/separator"

const Navbar = () => {
    let admin = true
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14">
                <Link to='/'>
                    <h1 className="text-xl font-extrabold">MERNFood</h1>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-5">
                        <Link to='/'>Home</Link>
                        <Link to='/profile'>Profile</Link>
                        <Link to='/order/status'>Order</Link>
                    </div>
                    {
                        admin && (<Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>Dashboard</MenubarTrigger>
                                <MenubarContent>
                                    <Link to='/admin/restaurant'>
                                        <MenubarItem>
                                            Restaurant</MenubarItem></Link>
                                    <Link to='/admin/menu'>
                                        <MenubarItem>
                                            Menu
                                        </MenubarItem>
                                    </Link>
                                    <Link to='/admin/orders'>
                                        <MenubarItem>
                                            Orders
                                        </MenubarItem>
                                    </Link>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>)
                    }


                    <div className="flex items-center gap-2">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem >
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Dark
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div>
                            <Link to='/cart' className="relative cursor-pointer">
                                <ShoppingCart />
                                <Button size='icon' className="absolute -inset-y-3 left-2 w-4 h-4 text-xs rounded-full bg-red-500 hover:bg-red-500">2</Button>
                            </Link>

                        </div>
                        <div>
                            <Avatar>
                                <AvatarImage />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>

                        <Button className='bg-orange hover:bg-hoverOrange'>
                            Log out
                        </Button>
                    </div>
                </div>


                <div className="md:hidden">
                    <MobileComponent />
                </div>

            </div>

        </div>
    )
}

export default Navbar


const MobileComponent = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button size='icon' className="rounded-full bg-gray-400 hover:bg-gray-400"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between mt-2">
                    <SheetTitle>MERNFood</SheetTitle>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem >Light</DropdownMenuItem>
                            <DropdownMenuItem >Dark</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SheetHeader>
                <Separator className="my-2" />

                <SheetDescription className="flex-1">
                    <Link
                        to="/profile"
                        className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                    >
                        <User />
                        <span>Profile</span>
                    </Link>
                    <Link
                        to="/order/status"
                        className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                    >
                        <HandPlatter />
                        <span>Order</span>
                    </Link>
                    <Link
                        to="/cart"
                        className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                    >
                        <ShoppingCart />
                        <span>Cart (0)</span>
                    </Link>
                    {/* {user?.admin && (
                        <> */}
                            <Link
                                to="/admin/menu"
                                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                            >
                                <SquareMenu />
                                <span>Menu</span>
                            </Link>
                            <Link
                                to="/admin/restaurant"
                                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                            >
                                <UtensilsCrossed />
                                <span>Restaurant</span>
                            </Link>
                            <Link
                                to="/admin/orders"
                                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                            >
                                <PackageCheck />
                                <span>Restaurant Orders</span>
                            </Link>
                        {/* </>
                    )} */}
                </SheetDescription>

                <SheetFooter className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-2">
                        <Avatar>
                            <AvatarImage />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className="font-bold">MERN Food</h1>
                    </div>
                    <SheetClose asChild>

                        <Button
                            className="bg-orange hover:bg-hoverOrange"
                        >
                            Logout
                        </Button>

                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}