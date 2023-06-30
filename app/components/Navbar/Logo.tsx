'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../../public/images/house.png";

const Logo = () =>{
    const router = useRouter();
    return (
        <div className="flex flex-row items-center justify-between gap-2">
        <Image alt="logo" className="hidden md:block cursor-pointer" height="50" width="50" 
        src = {logo} onClick={()=> router.push('/')}/>
            <span
            onClick={() => router.push('/')} 
            className="text-150px font-extrabold text-rose-500 mt-2 cursor-pointer">VacayHomes</span>
        </div>
    )
}

export default Logo;
