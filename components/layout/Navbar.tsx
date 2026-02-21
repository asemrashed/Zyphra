import Link from 'next/link';
import { FiMenu, FiSearch } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about-us' },
        { name: 'Support', path: '/help-support' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="flex flex-col w-full z-50 sticky top-0">
            <header className="sticky top-0 w-full bg-black/40 backdrop-blur shadow-lg shadow-black/5 z-50 transition-all duration-300">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between py-3 gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src={'/logo.png'} alt="Zyphra Logo" width={40} height={40} className="object-contain rounded-full" />
                            <h1 className="font-logo text-2xl font-bold text-primary">Zyphra</h1>
                        </Link>

                        <div className="hidden md:block flex-1 w-full md:px-8 max-w-lg">
                            <div className="relative w-full">
                                <FiSearch className="absolute z-10 left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
                                <input
                                    type="text"
                                    placeholder="Search for tutors or subjects"
                                    className="input input-sm md:input-md w-full rounded-full border-0 bg-base-100 pl-10 pr-4 text-base-content placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                             {/* Mobile Menu Dropdown */}
                            <div className="md:hidden dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <FiMenu className="text-2xl" />
                                </label>
                                <ul tabIndex={0} className="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-secondary/50 rounded-box w-52">
                                     {navLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.path}>{link.name}</Link>
                                        </li>
                                     ))}
                                     <li><Link href="/login">Sign In</Link></li>
                                     <li><Link href="/register">Sign Up</Link></li>
                                </ul>
                            </div>
                            
                            {/* <ThemeToggle /> */}
                            {/* {user ? (
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt="User" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li><Link to={`${role === 'admin' ? '/dashboard' : '/dashboard/profile'}`}>Dashboard</Link></li>
                                        <li><button onClick={handleSignOut}>Logout</button></li>
                                    </ul>
                                </div>
                            ) : ( */}
                                <div className="hidden md:flex items-center gap-2">
                                    <Link href={'/login'} className="btn btn-sm btn-ghost hover:btn-primary font-semibold">Sign In</Link>
                                    <Link href={'/register'} className="btn btn-sm btn-primary hover:btn-primary/60 font-semibold shadow-sm border-none">Sign Up</Link>
                                </div>
                            {/* )} */}
                        </div>
                    </div>

                    <nav className="hidden md:flex h-12 items-center justify-center border-t border-base-content/10 overflow-x-auto">
                        <ul className="flex h-full items-center gap-4 md:gap-8 text-base-content text-sm md:text-base whitespace-nowrap px-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className={`flex h-full items-center border-b-2 px-2 font-medium transition-colors border-transparent hover:border-primary hover:text-primary`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
