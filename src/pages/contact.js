import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import { BigHead } from '@bigheads/core'
const contact = () => {
  return (
	<div className='h-screen '>
		 <AnimatedText text="reach out and collaborate" className="pt-32 capitalize" />
		

<section className="bg-light">
  <div className="mx-auto max-w-screen-xl max-h-full px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
	  <div className="space-y-6">
				<p className="flex items-center text-3xl">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9 mr-2 sm:mr-6 ">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Prague, Czech Republic</span>
				</p>
				<p className="flex items-center text-3xl">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+420 776 313 531</span>
				</p>
				<p className="flex items-center text-3xl">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9 text-green-3y00 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>kamil@optimindx.com</span>
				</p>
			</div>

       
		<div className='animate-bounce-slow'>
		<BigHead
    accessory="roundGlasses"
    body="chest"
    circleColor="yellow"
    clothing="shirt"
    clothingColor="green"
    eyebrows="leftLowered"
    eyes="heart"
    faceMask={false}
    faceMaskColor="blue"
    facialHair="mediumBeard"
    graphic="graphQL"
    hair="none"
    hairColor="black"
    hat="beanie"
    hatColor="green"
    lashes
    lipColor="red"
    mask={true}
	
    mouth="serious"
    skinTone="brown"
	
  />
  </div>
		
      </div>
	  

      <div className="rounded-lg bg-white p-8  lg:col-span-3 lg:p-12 min-h-full">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm bg-slate-200"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm bg-slate-200"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm bg-slate-200"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                className="peer sr-only bg-slate-200"
                id="option1"
                type="radio"
                tabIndex="-1"
                name="option"
              />

            
            </div>

            <div>
              <input
                className="peer sr-only"
                id="option3"
                type="radio"
                tabIndex="-1"
                name="option"
              />

             
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-black-500 p-3 text-sm bg-slate-200"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-10 py-3 font-medium text-white sm:w-auto"
            >
              Send 
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
	</div>
  )
}

export default contact