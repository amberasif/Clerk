import { UserButton } from '@clerk/nextjs';
import {UserResource} from '@clerk/types'
import Link from 'next/link';
interface HeaderProps{
    user: UserResource | null | undefined;
}
 
const Header = ({user}:HeaderProps) => {
  return (
    <div className='bg-slate-800 h-[100px] text-white shadow-lg flex justify-between py-5 px-5'>
        <div>
            <h1 className='text-2xl'>LOGO</h1>
        </div>
    <div>
            <div className=' flex gap-2'>
                <h1 className='text-xl'>Welcome</h1>
            <Link href='/profile'>
            {user?.username}
            </Link>
            <UserButton afterSignOutUrl='/'/>
            </div>

    </div>
        
        </div>
  )
}
 
export default Header