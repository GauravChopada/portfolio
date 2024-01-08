"use client"

import React from "react"
import { globals } from "@/utils/data/strings"
import Image from "next/image"
import AWSBadge from "@/utils/images/AWS_SOLUTION_ARCHITECT_BADGE.png"
import TFBadge from "@/utils/images/TERRAFORM_ASSOSIATE.png"

const Contact = () => {
  const awsAssociateURL = 'https://www.credly.com/badges/50d6017a-3d0d-4fea-bd69-cff318096a68'
  const terraformAssociateURL = 'https://www.credly.com/badges/cb4ed206-609e-4424-9e07-b9ac12d5f878/'

  const redirectToURL = (url: string) => {
    window.open(url)
  }

  return <section id="contact" className='min-h-[60vh] lg:min-h-[80vh] w-full p-5 flex flex-col items-center justify-between gap-2 border-8 border-[#2c2c2c] border-t-0'>
    <div className="flex flex-col-reverse gap-5 sm:flex-row w-full justify-between">
      <div className="flex flex-col gap-2 font-mono font-light text-sm lg:text-base items-start mb-20">
        <p data-aos='fade-up' data-aos-delay='100'>Contact</p>
        <a data-aos='fade-up' data-aos-delay='200' target="_blank" href={`mailto:${globals.mailId}`} className="hover:text-blue-500 cursor-pointer">{globals.mailId}</a>
      </div>
      <div className="flex flex-row gap-5">
        <Image onClick={() => redirectToURL(awsAssociateURL)} className="h-20 w-20 md:h-28 md:w-28 cursor-pointer" src={AWSBadge} alt="AWS Solution Architect Associate" data-aos='zoom-in-up' data-aos-delay='100' />
        <Image onClick={() => redirectToURL(terraformAssociateURL)} className="h-20 w-20 md:h-28 md:w-28 cursor-pointer" src={TFBadge} alt="HashiCorp Certified: Terraform Associate (003)" data-aos='zoom-in-up' data-aos-delay='200' />
      </div>
    </div>
    <div className="w-full">
      <div className="flex flex-col w-full gap-3 font-mono font-black text-xl lg:text-3xl items-start mb-5 text-gray-600">
        <a className="hover:text-blue-500 cursor-pointer" target="_blank" data-aos='fade-up' data-aos-delay='200' href={globals.resumeLink}>
          Resume↗
        </a>
        <a className="hover:text-blue-500 cursor-pointer" target="_blank" data-aos='fade-up' data-aos-delay='300' href={globals.resumeLink}>
          Read.cv↗
        </a>
        <a className="hover:text-blue-500 cursor-pointer" target="_blank" data-aos='fade-up' data-aos-delay='400' href={globals.linkedinLink}>
          LinkedIn↗
        </a>
        <a className="hover:text-blue-500 cursor-pointer" target="_blank" data-aos='fade-up' data-aos-delay='500' href={globals.githubLink}>
          Github↗
        </a>
      </div>
      <div className="flex flex-col md:flex-row w-full font-black text-7xl gap-4 lg:text-9xl items-start justify-between">
        <p data-aos='fade-up' data-aos-delay='600'>Adios!</p>
        <p data-aos='fade-up' data-aos-delay='600'>©2023</p>
      </div>
    </div>
  </section>
}

export default Contact