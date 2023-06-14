import Link from "next/link";
import { MdHeartBroken } from "react-icons/md";

function Footer() {
  return (
    <div className="mt-10 flex h-40 w-full flex-col justify-between bg-black p-4">
      <div className="grid w-full grid-cols-2 items-center">
        <div className="mx-auto flex h-16 flex-row items-center  p-4 align-middle">
          <Link href="/">
          <a href="#" aria-label="Home" className="flex items-center">
            <MdHeartBroken
            className="h-14 w-14 text-red-600 group-hover:text-red-500"
            ></MdHeartBroken>
          
            <div className="leading-5 ml-2 mt-1">
              <span style={{fontSize: '20px', fontWeight: '800'}} className="block text-white ">
              GOT Got or Not?
              </span>
              <small className="text-white">Track which characters have survived!</small>
              <span style={{fontSize: '20px', fontWeight: '1000'}} className="text-white block xl:inline"></span>
            </div>
          </a>
          </Link>
        </div>
       
      </div>
      <div style={{fontWeight: 1000}} className="text-center text-gray-400">
        Mason Mahaffey
      </div>
      
    </div>
  );
}

export default Footer;
