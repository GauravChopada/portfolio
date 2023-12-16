"use client"

import { useState } from "react";
import Image from "next/image";

import githubSvg from '../utils/svgs/githubSvg.svg'
import linkedInSvg from '../utils/svgs/linkedinSVG.svg'
import emailSvg from '../utils/svgs/email.svg'
import phoneSvg from '../utils/svgs/phone.svg'
import whatsappSVG from '../utils/svgs/whatsapp.svg'
import freelancerSVG from '../utils/svgs/freelancer.svg'
import { sendMail } from "@/utils/helpers";

const Contact = () => {
  const [emailDetails, setEmailDetails] = useState({ name: '', email: '', subject: '', message: '' })
  const [formError, setFormError] = useState({ name: '', email: '', subject: '', message: '' })
  const [showAlert, setShowAlert] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const mailResponseMessage = {
    success: 'Thanks for contacting, I will get back to you on email.',
    error: 'Something went wrong, Please try contacting on platform provided above.'
  }

  const checkValidation = () => {
    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailDetails.name) { formError.name = 'Required *', isValid = false }
    if (!emailDetails.email) { formError.email = 'Required *', isValid = false }
    if (!emailDetails.subject) { formError.subject = 'Required *', isValid = false }
    if (!emailDetails.message) { formError.message = 'Required *', isValid = false }
    if (emailDetails.email && emailRegex.test(emailDetails.email) === false) { formError.email = 'Invalid email', isValid = false }
    setFormError({ ...formError })
    return isValid
  }

  const handleSubmit = async () => {
    if (!checkValidation()) {
      return
    }

    if (isLoading) return
    setIsLoading(true)
    const isSuccess = await sendMail(emailDetails)
    if (isSuccess) {
      setIsError(false)
    } else {
      setIsError(true)
    }
    setShowAlert(true)
    setIsLoading(false)
    setInterval(() => {
      setShowAlert(false)
    }, 5000)
  }

  return (
    <section id="contact" className="w-full px-10 xl:px-16 py-40 flex flex-col items-start justify-start">
      <div className="font-black mb-10 text-4xl text-zinc-200">Contact</div>

      <div className="text-2xl md:text-3xl font-bold mb-6 text-gray-600">Get in touch on</div>
      <div className="mb-8 w-full">
        <div className="flex flex-col sm:flex-row">
          <div className="mb-6 flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10" src={githubSvg} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a href="https://github.com/GauravChopada/portfolio" target="_blank" className="hover:text-teal-300 hover:underline">github.com/GauravChopada</a>

          </div>
          <div className="mb-6 flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10" src={emailSvg} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a href="mailto:Gauravrchopada65@gmail.com" target="_blank" className="hover:text-teal-300 hover:underline">Gauravrchopada65@gmail.com</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="mb-6 flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10" src={linkedInSvg} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a href="https://www.linkedin.com/in/gaurav-chopada/" target="_blank" className="hover:text-teal-300 hover:underline">linkedin.com/gaurav-chopada</a>
          </div>
          <div className="mb-6 flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10" src={phoneSvg} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a target="_blank" href="tel:+919328169360" className="hover:text-teal-300 hover:underline">+91 9737462950</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="mb-6 flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10 mt-2" src={freelancerSVG} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a href="https://www.freelancer.in/u/GauravChopada=" target="_blank" className="hover:text-teal-300 hover:underline">freelancer.in/GauravChopada</a>
          </div>
          <div className="mb-6 flex flex-row items-center gap-3 w-1/2">
            <Image className="h-10 w-10" src={whatsappSVG} alt="Visit GitHub" />
            <div className="border-r-2 border-slate-800 h-10" />
            <a target="_blank" href="https://wa.me/919737462950" className="hover:text-teal-300 hover:underline">+91 9737462950</a>
          </div>
        </div>
      </div>

      <div className="text-2xl md:text-3xl font-bold mb-6 text-gray-600">OR fill below form for any inquiry</div>

      {showAlert && <div id="toast-success" className="flex items-center w-full p-4 mb-4 bg-gray-950 rounded-xl shadow text-gray-400 border-slate-800 border-solid border-[1px]" role="alert">
        <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${isError ? 'text-red-500' : 'text-green-500'}`}>
          {!isError && <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>}
          {isError && <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
          </svg>}
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{isError ? mailResponseMessage.error : mailResponseMessage.success}</div>
        <button type="button" onClick={() => setShowAlert(false)} className="ml-auto -mx-1.4 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>}

      <form className="w-full">
        <div className="flex flex-col sm:flex-row sm:gap-4">
          {/* NAME */}
          <div className="flex flex-col flex-1 mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input required onChange={e => { setFormError({ ...formError, name: '' }), setEmailDetails({ ...emailDetails, name: e.target.value }) }} type="text" id="input-group-1" className="bg-gray-950 border border-slate-800 text-sm rounded-lg block w-full pl-10 p-2.5 placeholder-gray-400 text-white" placeholder="John Doe" />
            </div>
            <p className="ml-3 mt-2 text-sm text-red-600 dark:text-red-500">{formError.name}</p>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col flex-1 mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input required onChange={e => { setFormError({ ...formError, email: '' }), setEmailDetails({ ...emailDetails, email: e.target.value }) }} type="email" id="input-group-1" className="bg-gray-950 border border-slate-800 text-sm rounded-lg block w-full pl-10 p-2.5 placeholder-gray-400 text-white" placeholder="name@gmail.com" />
            </div>
            <p className="ml-3 mt-2 text-sm text-red-600 dark:text-red-500">{formError.email}</p>
          </div>
        </div>

        {/* SUBJECT */}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
        <div className="relative mb-6">
          <input required onChange={e => { setFormError({ ...formError, subject: '' }), setEmailDetails({ ...emailDetails, subject: e.target.value }) }} type="text" id="input-group-1" className="bg-gray-950 border border-slate-800 text-sm rounded-lg block w-full pl-3 p-2.5 placeholder-gray-400 text-white" placeholder="Enter topic" />
          <p className="ml-3 mt-2 text-sm text-red-600 dark:text-red-500">{formError.subject}</p>
        </div>

        {/* MESSAGE */}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
        <div className="relative mb-6">
          <textarea required onChange={e => { setFormError({ ...formError, message: '' }), setEmailDetails({ ...emailDetails, message: e.target.value }) }} rows={6} id="input-group-1" className="bg-gray-950 border border-slate-800 text-sm rounded-lg block w-full pl-3 p-2.5 placeholder-gray-400 text-white" placeholder="Write message" />
          <p className="ml-3 mt-2 text-sm text-red-600 dark:text-red-500">{formError.message}</p>
        </div>

        {/* SUBMIT BUTTON */}
        <button onClick={handleSubmit} type="button" className="text-white flex flex-row items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
          {isLoading && <svg aria-hidden="true" className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>}
          SUBMIT
        </button>

      </form>
    </section>
  );
};

export default Contact;
