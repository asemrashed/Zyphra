import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <main className="min-h-screen pt-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-primary mb-6">About Zyphra</h1>
                    <p className="text-xl text-base-content/80 leading-relaxed">
                        Redefining the digital lifestyle through curated, high-end electronics and cutting-edge technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                        <Image 
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                            alt="Innovation" 
                            fill 
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Who We Are</h2>
                        <p className="text-base-content/70">
                            At Zyphra, we believe that technology should be more than just a tool—it should be an extension of your lifestyle. Founded in 2024, we&apos;ve dedicated ourselves to sourcing the most innovative and premium devices from across the globe.
                        </p>
                        <p className="text-base-content/70">
                            Our team of tech enthusiasts rigorously tests every product to ensure it meets our exacting standards for performance, design, and durability.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="card bg-base-200 p-8 border border-white/5 hover:border-primary/30 transition-all">
                        <div className="text-4xl mb-4">🚀</div>
                        <h3 className="text-xl font-bold mb-2">Innovation First</h3>
                        <p className="text-sm text-base-content/60 text-pretty">We stay ahead of the curve, bringing you the latest tech before it hits the mainstream.</p>
                    </div>
                    <div className="card bg-base-200 p-8 border border-white/5 hover:border-primary/30 transition-all">
                        <div className="text-4xl mb-4">💎</div>
                        <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                        <p className="text-sm text-base-content/60 text-pretty">Excellence is our baseline. Every device is selected for its superior build and features.</p>
                    </div>
                    <div className="card bg-base-200 p-8 border border-white/5 hover:border-primary/30 transition-all">
                        <div className="text-4xl mb-4">🛡️</div>
                        <h3 className="text-xl font-bold mb-2">Reliable Support</h3>
                        <p className="text-sm text-base-content/60 text-pretty">Our commitment doesn&apos;t end at checkout. We&apos;re here to help every step of the way.</p>
                    </div>
                </div>

                <div className="bg-primary/10 rounded-3xl p-12 text-center border border-primary/20">
                    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
                        To empower every individual with the world&apos;s most advanced technology, fostering a future where innovation and elegance coexist seamlessly.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;
