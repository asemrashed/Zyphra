import React from 'react';
import Link from 'next/link';

const SupportPage = () => {
    const faqs = [
        {
            question: "How long does shipping take?",
            answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day money-back guarantee on all our products. The item must be in its original packaging and condition."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive an email with a tracking number and a link to track your package."
        },
        {
            question: "Are your products covered by warranty?",
            answer: "Yes, all our devices come with a standard 1-year manufacturer warranty, with options to extend it at checkout."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and cryptocurrency payments."
        }
    ];

    return (
        <main className="min-h-screen pt-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-primary mb-6">Support Center</h1>
                    <p className="text-xl text-base-content/80 leading-relaxed">
                        We&apos;re here to help. Find answers to common questions or get in touch with our team.
                    </p>
                </div>

                <div className="space-y-6 mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center text-primary">Frequently Asked Questions</h2>
                    <div className="grid gap-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="collapse collapse-plus bg-base-200 border border-white/5 hover:border-primary/20 transition-all">
                                <input type="radio" name="support-accordion" defaultChecked={index === 0} /> 
                                <div className="collapse-title text-xl font-medium">
                                    {faq.question}
                                </div>
                                <div className="collapse-content text-base-content/70"> 
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-12 text-center border border-primary/10 shadow-xl shadow-primary/5">
                    <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
                    <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
                        Can&apos;t find the answer you&apos;re looking for? Our dedicated support team is available 24/7 to assist you.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg rounded-full px-12 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default SupportPage;
