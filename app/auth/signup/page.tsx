"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { FiMail, FiLock, FiUser, FiChevronRight, FiGithub } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';

type SignUpData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
};

const SignUpPage = () => {
    const { 
        register, 
        handleSubmit, 
        watch,
        formState: { errors, isSubmitting } 
    } = useForm<SignUpData>();

    const password = watch("password");

    const onSubmit = async (data: SignUpData) => {
        // Mock registration
        console.log("Signing up with:", data);
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert("Sign up simulated. Check console for data.");
    };

    return (
        <main className="min-h-screen w-full py-6 md:py-10 px-6 flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-primary mb-2">Join Zyphra</h1>
                    <p className="text-base-content/60">Enter the world of cyber-luxury</p>
                </div>

                <div className="card bg-base-100 border border-white/10 shadow-2xl p-8 space-y-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold flex items-center gap-2">
                                    <FiUser className="text-primary" /> Full Name
                                </span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                className={`input input-bordered w-full bg-base-200 transition-all focus:ring-2 focus:ring-primary/20 ${errors.name ? 'input-error' : ''}`}
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <span className="text-error text-xs mt-1">{errors.name.message}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold flex items-center gap-2">
                                    <FiMail className="text-primary" /> Email Address
                                </span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="name@luxury.com" 
                                className={`input input-bordered w-full bg-base-200 transition-all focus:ring-2 focus:ring-primary/20 ${errors.email ? 'input-error' : ''}`}
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <span className="text-error text-xs mt-1">{errors.email.message}</span>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <FiLock className="text-primary" /> Password
                                    </span>
                                </label>
                                <input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    className={`input input-bordered w-full bg-base-200 transition-all focus:ring-2 focus:ring-primary/20 ${errors.password ? 'input-error' : ''}`}
                                    {...register("password", { 
                                        required: "Required",
                                        minLength: { value: 6, message: "Min 6 chars" }
                                    })}
                                />
                                {errors.password && <span className="text-error text-xs mt-1">{errors.password.message}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <FiLock className="text-primary" /> Confirm
                                    </span>
                                </label>
                                <input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    className={`input input-bordered w-full bg-base-200 transition-all focus:ring-2 focus:ring-primary/20 ${errors.confirmPassword ? 'input-error' : ''}`}
                                    {...register("confirmPassword", { 
                                        required: "Required",
                                        validate: (val: string) => {
                                            if (val !== password) {
                                                return "Passwords do not match";
                                            }
                                        }
                                    })}
                                />
                                {errors.confirmPassword && <span className="text-error text-xs mt-1">{errors.confirmPassword.message}</span>}
                            </div>
                        </div>

                        <div className="form-control mt-2">
                            <label className="label cursor-pointer flex items-center gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded" {...register("terms", { required: "You must accept the terms" })} />
                                <span className="label-text text-xs">I agree to the <Link href="#" className="link link-primary">Terms & Conditions</Link></span>
                            </label>
                            {errors.terms && <span className="text-error text-xs mt-1">{errors.terms.message}</span>}
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="btn btn-sm btn-primary w-full font-bold py-2 shadow-lg shadow-primary/20 group mt-4"
                        >
                            {isSubmitting ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                <span className="flex items-center gap-2 text-black">
                                    Create Account <FiChevronRight className="transition-transform group-hover:translate-x-1" />
                                </span>
                            )}
                        </button>
                    </form>

                    <div className="divider text-xs text-base-content/40 uppercase tracking-widest font-bold">Or sign up with</div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="btn btn-outline border-white/10 hover:bg-white/5 hover:border-white/20 gap-2">
                            <FaGoogle className="text-red-500" /> Google
                        </button>
                        <button className="btn btn-outline border-white/10 hover:bg-white/5 hover:border-white/20 gap-2">
                            <FiGithub className="text-white" /> GitHub
                        </button>
                    </div>

                    <p className="text-center text-sm text-base-content/60 mt-4">
                        Already have an account? {' '}
                        <Link href="/auth/signin" className="text-primary font-bold hover:underline transition-all">Sign In</Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default SignUpPage;
