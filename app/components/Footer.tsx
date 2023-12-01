"use client";

import Image from "next/image";
import React from "react";

export default function Footer () {
    return (
        <footer>
            <div className="footer justify-center text-center">
                <div className="footer__container">
                    <div className="footer__container__left">
                        <div className="footer__container__left__logo">
                            <Image src="" alt="logo" 
                            height={24}
                            width={24}
                            />
                        </div>
                        <div className="flex justify-end mr-20 pt-10">
                            <p>© 2023</p>
                        </div>
                    </div>
                    <div className="footer__container__right">
                        <div className="footer__container__right__text">
                            <p>Follow me on</p>
                        </div>
                        <div className="footer__container__right__social">
                            <a href="https://www.instagram.com/andrew__nguyen/" target="_blank" rel="noopener noreferrer">
                                <Image src="" 
                                alt="instagram"
                                height={24}
                                width={24}
                                 />
                            </a>
                            <a href="https://www.linkedin.com/in/andrew-nguyen-1a4b3b1a1/" target="_blank" rel="noopener noreferrer">
                                <Image src="" 
                                alt="linkedin" 
                                height={24}
                                width={24}
                                />
                            </a>
                        </div>
                    <div/>
                </div>
            </div>
            </div>
        </footer>
    )
    }