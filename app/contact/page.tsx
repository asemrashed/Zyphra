"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { FiSend, FiMail, FiMessageCircle, FiUser } from 'react-icons/fi';

type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactPage = () => {
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors, isSubmitting } 
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Form Submitted:", data);
        alert("Thank you for your message! We will get back to you soon.");
        reset();
    };

    return (
        <main className="min-h-screen pt-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-black text-primary mb-6">Contact Us</h1>
                    <p className="text-xl text-base-content/80 leading-relaxed">
                        Have a question or feedback? We&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-12 mb-20">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-base-content/60">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl border border-white/5">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-xl">
                                    <FiMail />
                                </div>
                                <div>
                                    <p className="text-sm text-base-content/40">Email Us</p>
                                    <p className="font-bold">support@zyphra.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl border border-white/5">
                                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary text-xl">
                                    <FiMessageCircle />
                                </div>
                                <div>
                                    <p className="text-sm text-base-content/40">Live Chat</p>
                                    <p className="font-bold">Available 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 p-8 border border-white/10 shadow-2xl space-y-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <FiUser className="text-primary" /> Name
                                    </span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your name" 
                                    className={`input input-bordered w-full bg-base-200 ${errors.name ? 'input-error' : ''}`}
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <span className="text-error text-xs mt-1">{errors.name.message}</span>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <FiMail className="text-primary" /> Email
                                    </span>
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className={`input input-bordered w-full bg-base-200 ${errors.email ? 'input-error' : ''}`}
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

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Subject</span>
                                </label>
                                <select 
                                    className={`select select-bordered w-full bg-base-200 ${errors.subject ? 'select-error' : ''}`}
                                    {...register("subject", { required: "Please select a subject" })}
                                >
                                    <option value="">Select a topic</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Support">Support</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Partnership">Partnership</option>
                                </select>
                                {errors.subject && <span className="text-error text-xs mt-1">{errors.subject.message}</span>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Message</span>
                                </label>
                                <textarea 
                                    placeholder="How can we help?" 
                                    className={`textarea textarea-bordered h-32 bg-base-200 ${errors.message ? 'textarea-error' : ''}`}
                                    {...register("message", { 
                                        required: "Message is required",
                                        minLength: { value: 10, message: "Message must be at least 10 characters" }
                                    })}
                                ></textarea>
                                {errors.message && <span className="text-error text-xs mt-1">{errors.message.message}</span>}
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="btn btn-primary w-full mt-4 font-bold text-lg h-14"
                            >
                                {isSubmitting ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    <><FiSend /> Send Message</>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
