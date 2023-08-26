import Image from "next/image";
import githubSvg from '../utils/svgs/githubSvg.svg'
import linkedInSvg from '../utils/svgs/linkedinSVG.svg'
import emailSvg from '../utils/svgs/email.svg'
import phoneSvg from '../utils/svgs/phone.svg'
import locationSVG from '../utils/svgs/location.svg'
import instagramSVG from '../utils/svgs/instagram.svg'
import whatsappSVG from '../utils/svgs/whatsapp.svg'
import freelancerSVG from '../utils/svgs/freelancer.svg'

const Contact = () => {
  return (
    <div className=" w-screen px-16 py-40 flex flex-col items-start justify-start">
      <div className="text-6xl font-black mb-14">Contact</div>

      <div className="text-3xl font-bold mb-6 text-gray-600">Get in touch on</div>
      <div className="mb-8 w-full">
        <div className="mb-6 flex flex-row">
          <div className="flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10" src={githubSvg} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a href="https://github.com/GauravChopada/portfolio" target="_blank" className="hover:text-teal-300 hover:underline">github.com/GauravChopada</a>
            
          </div>
          <div className="flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10" src={emailSvg} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a href="mailto:Gauravrchopada65@gmail.com" target="_blank" className="hover:text-teal-300 hover:underline">Gauravrchopada65@gmail.com</a>
          </div>
        </div>
        <div className="mb-6 flex flex-row">
          <div className="flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10" src={linkedInSvg} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a href="https://www.linkedin.com/in/gaurav-chopada/" target="_blank" className="hover:text-teal-300 hover:underline">linkedin.com/gaurav-chopada</a>
          </div>
          <div className="flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10" src={phoneSvg} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a target="_blank" href="tel:+919328169360" className="hover:text-teal-300 hover:underline">+91 9737462950</a>
          </div>
        </div>
        <div className="mb-6 flex flex-row">
          <div className="flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10 mt-2" src={freelancerSVG} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a href="https://www.freelancer.in/u/GauravChopada=" target="_blank" className="hover:text-teal-300 hover:underline">freelancer.in/GauravChopada</a>
          </div>
          <div className="flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10" src={whatsappSVG} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a target="_blank" href="https://wa.me/919737462950" className="hover:text-teal-300 hover:underline">+91 9737462950</a>
          </div>
        </div>
      </div>

      <div className="text-3xl font-bold mb-6 text-gray-600">OR fill below form for any inquiry</div>
      <div className="w-full">
        <div className="flex flex-row gap-4">
          {/* NAME */}
          <div className="flex flex-col flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input type="text" id="input-group-1" className="bg-gray-950 border border-slate-800 text-sm rounded-lg block w-full pl-10 p-2.5 placeholder-gray-400 text-white" placeholder="John Doe" />
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input type="email" id="input-group-1" className="bg-gray-950 border border-slate-800 text-sm rounded-lg block w-full pl-10 p-2.5 placeholder-gray-400 text-white" placeholder="name@gmail.com" />
            </div>
          </div>
        </div>

        {/* SUBJECT */}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
        <div className="relative mb-6">
          <input type="text" id="input-group-1" className="bg-gray-950 border border-slate-800 text-sm rounded-lg block w-full pl-3 p-2.5 placeholder-gray-400 text-white" placeholder="Enter topic" />
        </div>

        {/* MESSAGE */}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
        <div className="relative mb-6">
          <textarea rows={6} id="input-group-1" className="bg-gray-950 border border-slate-800 text-sm rounded-lg block w-full pl-3 p-2.5 placeholder-gray-400 text-white" placeholder="Write message" />
        </div>

        {/* SUBMIT BUTTON */}
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">SUBMIT</button>

      </div>
    </div>
  );
};

export default Contact;
