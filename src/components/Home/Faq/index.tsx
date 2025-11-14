// components/Faq.js
'use client';
import Image from 'next/image';
import React, { useState } from 'react';// Optional: install lucide-react icons

const faqData = [
  {
    question: "What is Datafy?",
    answer: "Datafy is a platform that lets you buy airtime, pay bills, and trade crypto from one dashboard.",
  },
  {
    question: "Is Datafy available nationwide?",
    answer: "Yes, Datafy works across Nigeria and can be accessed from anywhere with an internet connection.",
  },
  {
    question: "What services can I access on Datafy?",
    answer: "You can buy airtime and data, pay electricity and TV bills, and trade popular cryptocurrencies.",
  },
  {
    question: "Is my personal information secure with Datafy?",
    answer: "Yes, your transactions and data are protected with industry-grade encryption and security protocols.",
  },
  {
    question: "Are there any extra fees?",
    answer: "Datafy uses a simple and transparent fee structure. You see the charges before you confirm any transaction.",
  },
  {
    question: "Can beginners use Datafy?",
    answer: "Yes, Datafy is designed to be simple for new users and flexible for experienced crypto traders.",
  },
];


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className=" py-16 text-white">
            <div className="container">
                <div className=" mx-auto px-4">
                    <div className="text-center mb-10">
                        <p className="text-green-400 uppercase text-sm">Popular questions</p>
                        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Learn more about datafy</h2>
                        <p className="text-gray-400 mt-2">We accept 100+ cryptocurrencies around the world</p>
                    </div>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-lg p-4 cursor-pointer transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">{item.question}</h3>
                                    <Image
                                        src={"/images/icons/plus-icon.svg"}
                                        alt='plus-icon'
                                        width={20}
                                        height={20}
                                        className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                                    />
                                </div>

                                <div
                                    className={`mt-2 text-gray-400 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 visible' : 'max-h-0 hidden'
                                        }`}
                                >
                                    <p className="py-2">{item.answer}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
