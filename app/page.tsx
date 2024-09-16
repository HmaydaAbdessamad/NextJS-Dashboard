
import styles from '@/app/ui/home.module.css';
import {lusitana} from '@/app/ui/fonts'

import Image from "next/image"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">


      <div className="flex h-20 justify-around   shrink-0 items-center  rounded-lg bg-green-200  p-4 md:h-20">
        <h1 className="font-extrabold text-lg text-green-950">HMAYDA Abdessamad</h1>

        <ul className={`hidden md:block`}>
          <li className={`text-white`}>About</li>
        </ul>

      </div>

      <div className="mt-4 flex grow flex-col gap-2 md:flex-row">

        <div className="flex flex-col justify-items-start md:pt-8 items-stretch gap-2 rounded-lg bg-gray-50 px-6  md:w-2/5 md:px-12">
          <div className={`${styles.shape} `}/>

          <h1 className={` text-center text-xl text-gray-800 md:text-3xl  font-extrabold md:leading-normal ${lusitana}`}>
            Welcome
          </h1>

          <h1 className={` text-center text-xl text-gray-800 md:text-3xl  font-extrabold md:leading-normal ${lusitana}`}>

            I'm a Moroccan state engineer in IT and emerging technologies
          </h1>

          <p className={`text-xl text-gray-800 md:text-3xl  md:leading-normal ${lusitana}`}>
            I excel at crafting elegant digital experiences and I am proficient in various programming languages and
            technologies.
          </p>

          <button className="m-4 p-1 rounded-full from-green-100 via-green-500 to-green-800 bg-gradient-to-r">
            <span
                className="block text-black px-4 py-2 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition">Let's work together </span>
          </button>

          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </li>
          </ul>

        </div>


        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-16 ">
          <Image
              src="/ME.jpeg"
              width={560}
              height={620}
              className="block md:hidden"
              alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
              src="/ME.jpeg"
              width={1000}
              height={450}
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

      </div>
    </main>
  );
}
