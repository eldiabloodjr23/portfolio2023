import React from 'react'
import icon1 from "../../public/images/svgs/icon1.png"
import icon2 from "../../public/images/svgs/eat.png"
import icon3 from "../../public/images/svgs/repeat.png"
import icon4 from "../../public/images/svgs/sleep.png"
import Image from 'next/image'
const LoadingLine = () => {
  return (
    <div>
<section className="p-6 my-6 bg-light dark:text-gray-100 pt-64">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-black dark:text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-sky-400">
				<div className='w-9 h-9'>
				<Image
        src={icon2}
        alt="Your Image"
        width={36}  // Set the width to 9rem (9 * 4)
        height={36} // Set the height to 9rem (9 * 4)
        className="h-9 w-9" // Apply Tailwind CSS classes for height and width
      />
				</div>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-medium leadi">EAT</p>
				
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-black dark:text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-sky-400">
			<Image
        src={icon1}
        alt="Your Image"
        width={36}  // Set the width to 9rem (9 * 4)
        height={36} // Set the height to 9rem (9 * 4)
        className="h-9 w-9" // Apply Tailwind CSS classes for height and width
      />
			</div>
			<div className="flex flex-col justify-center align-middle">
			<p className="text-3xl font-medium leadi">CODE</p>
			
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-black dark:text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-sky-400">
			<Image
        src={icon4}
        alt="Your Image"
        width={36}  // Set the width to 9rem (9 * 4)
        height={36} // Set the height to 9rem (9 * 4)
        className="h-9 w-9" // Apply Tailwind CSS classes for height and width
      />
			</div>
			<div className="flex flex-col justify-center align-middle">
			<p className="text-3xl font-medium leadi">SLEEP</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-black dark:text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-sky-400">
			<Image
        src={icon3}
        alt="Your Image"
        width={36}  // Set the width to 9rem (9 * 4)
        height={36} // Set the height to 9rem (9 * 4)
        className="h-9 w-9" // Apply Tailwind CSS classes for height and width
      />
			</div>
			<div className="flex flex-col justify-center align-middle">
			<p className="text-3xl font-medium leadi">REPEAT</p>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default LoadingLine