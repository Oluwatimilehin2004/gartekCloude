import { Button, Link} from "@nextui-org/react";
import Phones from "@/components/Phones.jsx";


export default function Hero() {
  return (
    <section>
        <div className="flex flex-col mt-5">
          
          <div className="flex justify-center w-full min-h-60">
            <img src="HeroBanner.png" width={1000} height={1000} alt="hero_img" />
          </div>
          <div className=" px-10 md:px-0 md:mt-20 mt lg:mt-5 flex items-center justify-center font-semibold text-xl md:text-2xl text-black/50">
          <p className="text-center max-w-[700px] md:-mt-60 lg:-mt-40 -mt-10">
                Join thousands of students transforming their study experience with seamless 
                access to organized materials and powerful media integration on Gartekcloude!
              </p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Button as={Link} href="/waitlist" className="bg-[#FFA500] h-10 w-52 rounded-lg text-white">join waitlist now!</Button>
          </div>
        </div>
        <Phones />
    </section>
  )
}
