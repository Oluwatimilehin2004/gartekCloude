import FourthSectionImg from "@/components/FourthSectionImg.jsx";

export default function ForthSection() {
  return (
    <section className='shadow-indigo-500'>
        <div className="bg-indigo-900/95">
            <div className=" flex flex-col items-center justify-center pt-24">
                <div className="input input-bordered px-7 rounded-lg flex bg-white items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-8 w-8 text-[#FFA500] opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow outline-none w-52 h-10 md:w-96 md:h-16" placeholder={`Search for gartekgcloude`} />
                </div>
            </div>
            <div className='overflow-hidden'>
                <FourthSectionImg />
            </div>
        </div>
    </section>
  )
}
