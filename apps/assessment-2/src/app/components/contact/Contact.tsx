"use client";
import {
  BehanceLogo,
  DribbbleLogo,
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  PhoneCall,
  TwitterLogo,
} from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

export function Contact() {
  return (
    <section className="p-16 bg-blue-400" id="contact">
      <h2 className="text-center text-4xl font-semibold leading-tight text-white">
        Contact Us
      </h2>
      <div className="mt-10 flex flex-col justify-center md:justify-between lg:mt-14 lg:flex-row">
        <div className="flex flex-col justify-center lg:flex-1">
          <span className="flex items-center justify-center gap-3 text-white lg:justify-start">
            <PhoneCall className="h-6 w-6 text-white" weight="duotone" />
            +62876543210
          </span>
          <span className="mt-5 flex items-center justify-center gap-3 text-white lg:justify-start">
            <EnvelopeSimple className="h-6 w-6 text-white" weight="duotone" />
            cs@zxc-tech.com
          </span>
          <div className="mt-6 flex justify-center gap-5 lg:justify-start">
            <InstagramLogo className="h-6 w-6 text-white" />
            <LinkedinLogo className="h-6 w-6 text-white" />
            <GithubLogo className="h-6 w-6 text-white" />
            <TwitterLogo className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
