"use client";

import Link from 'next/link';
import { FiMenu, FiSearch, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
    const { cart, totalItems, totalPrice, removeFromCart, clearCart } = useCart();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Support', path: '/support' },
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
                                    placeholder="Search for devices"
                                    className="input input-sm md:input-md w-full rounded-full border-0 bg-base-100 pl-10 pr-4 text-base-content placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                             {/* Cart Dropdown */}
                             <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <FiShoppingCart className="text-2xl text-primary" />
                                        {totalItems > 0 && (
                                            <span className="badge badge-sm indicator-item badge-primary text-white font-bold">{totalItems}</span>
                                        )}
                                    </div>
                                </label>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow-xl border border-white/10">
                                    <div className="card-body p-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="font-bold text-lg">{totalItems} Items</span>
                                            <span className="text-primary font-bold">Subtotal: ${totalPrice.toFixed(2)}</span>
                                        </div>
                                        
                                        <div className="max-h-60 overflow-y-auto space-y-4 mb-4 pr-1">
                                            {cart.length > 0 ? (
                                                cart.map((item) => (
                                                    <div key={item.id} className="flex gap-3 items-center">
                                                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-base-200">
                                                            <Image src={item.imgUrl} alt={item.name} fill className="object-cover" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="font-bold text-sm line-clamp-1">{item.name}</p>
                                                            <p className="text-xs text-base-content/60">{item.quantity} x ${item.price}</p>
                                                        </div>
                                                        <button 
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="btn btn-ghost btn-square btn-xs text-error"
                                                        >
                                                            <FiTrash2 />
                                                        </button>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-center text-base-content/60 py-4">Your cart is empty</p>
                                            )}
                                        </div>

                                        <div className="card-actions flex flex-col gap-2">
                                            <Link href="/cart" className="btn btn-primary btn-block btn-sm">View Cart</Link>
                                            <button onClick={clearCart} className="btn btn-outline btn-block btn-sm">Clear Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             {/* Mobile Menu Dropdown */}
                            <div className="md:hidden dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <FiMenu className="text-2xl text-primary" />
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-white/10">
                                     {navLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.path}>{link.name}</Link>
                                        </li>
                                     ))}
                                     <li><Link href="/login">Sign In</Link></li>
                                     <li><Link href="/register">Sign Up</Link></li>
                                </ul>
                            </div>
                            
                            <div className="hidden md:flex items-center gap-2">
                                <Link href={'/login'} className="btn btn-sm btn-ghost hover:btn-primary font-semibold">Sign In</Link>
                                <Link href={'/register'} className="btn btn-sm btn-primary hover:btn-primary/60 font-semibold shadow-sm border-none">Sign Up</Link>
                            </div>
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
