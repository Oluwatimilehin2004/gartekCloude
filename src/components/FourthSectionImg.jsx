export default function FourthSectionImg() {
    return(
        <>
            <div className='lg:px-20 px-9 -mr-40 ml-5 lg:mr-0 overflow-hidden -rotate-6 lg:-rotate-0'>
                <div
                    className="relative flex items-center lg:mt-24 mt-10 w-full h-full justify-center px-4 md:px-0 lg:bg-white lg:bg-opacity-10">
                    <img src="webdesign.png" alt="gartekcloude_dashboard_img"
                         className='w-full lg:border-4 lg:p-4 lg:border-white h-full flex items-center justify-center lg:mx-auto'/>
                    <img src="Group1.png" className='absolute -top-4 left-1 lg:-top-12 lg:-left-12 lg:w-32' width='40' height='40'
                         alt="gartekcloude_group_img"/>
                    <img src="heart.png" className='absolute hidden lg:flex -top-12  lg:w-32 lg:right-[800px]'
                         width='40' height='40'
                         alt="gartekcloude_group_img"/>
                    <img src="Star.png" className='absolute -top-12 -right-12 lg:flex lg:w-32 lg:justify-center hidden'
                         width='40' height='40'
                         alt="gartekcloude_group_img"/>
                </div>
            </div>
        </>
    )
}