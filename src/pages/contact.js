import {motion} from 'framer-motion'


const Contact = () => {
    return (
      <div className='h-full bg-primary/30'>
        <div className=' container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2   className='h2 text-center mb-12'> Lets <span className='text-accent'>connect</span></motion.h2>
          <motion.form
          
          className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          <div className='flex gap-x-6 w-full'>
            <input type='text' placeholder='Jméno' className='input'/>
            <input type='text' placeholder='Email' className='input'/>
          </div>
         
          <textarea placeholder='Zpráva' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[175px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className=' group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 '> Odeslat</span>
             
            </button>
  
          </motion.form>
        </div>
        </div>
        
      </div>
    )
  }
  
  export default Contact