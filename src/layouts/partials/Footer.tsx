"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-[#1B1E49] border-t-2 border-[#FBDC6D]">
      <div className="container">
        <div className="row items-center py-6">
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Logo />
          </div>
          <div className="mb-8 text-center lg:col-6 lg:mb-0">
            <ul>
              {menu.footer.map((menu) => (
                <li className="m-3 inline-block text-[#FBDC6D]" key={menu.name}>
                  <Link href={menu.url}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <Social source={social.main} className="social-icons" />
          </div>
        </div>
      </div>
      <div className="border-t border-[#FBDC6D] py-3">
        <div className="container flex flex-col items-center md:flex-row md:justify-between gap-y-6 text-[#FBDC6D]">
          <p dangerouslySetInnerHTML={markdownify(copyright)} />
          <p>&#169; Copyright 2023 - NexTech Media</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
