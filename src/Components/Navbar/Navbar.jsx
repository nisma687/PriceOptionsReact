
// import link from "../Link/link";
import { useState } from "react";
import Link from "../Link/Link"
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [open,setOpen] =useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' },
      ];
          // ${open ? 'block' : 'hidden'}
    return (
        <nav className="text-black p-6 bg-yellow-200"> 
    <div className="md:hidden text-2xl"
     onClick={()=>setOpen(!open)}>
            {
               
                open ? <AiOutlineClose className="text-2xl"></AiOutlineClose> : <AiOutlineMenu className="text-2xl "></AiOutlineMenu>
                   

            }

        </div>
        

           <ul className={`md:flex absolute
           md:static
           duration-1000 bg-yellow-200
       
              ${open ? 'top-16' : '-top-60'}
           px-6 `}>
           {
            
            routes.map(route => <Link route={route} key={route.id}></Link>
               
            )
           }
            </ul> 
        </nav>
    );
};

export default Navbar;