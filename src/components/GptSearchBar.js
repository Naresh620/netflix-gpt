import React from 'react'
import Lang from '../utils/SupportLanguages'
import { useSelector } from 'react-redux'



const GptSearchBar = () => {

    const langKey=useSelector(store=>store.configs.lang)
  return (
    <div className=' flex pt-[15%] justify-center '>
        <form className='bg-black  grid grid-cols-12 p-2 w-1/2  gap-2'>
            <input className='text-white col-span-10 p-2 rounded-lg' type="text" placeholder={Lang[langKey]?.gptLangPlaceholter}/>
            <button className='text-white col-span-2 bg-red-700 rounded-lg'>{Lang[langKey]?.Search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar