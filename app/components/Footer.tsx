import FacebookIcon from "../assets/icons/FacebookIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import EmailIcon from "../assets/icons/EmailIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="w-full bg-none">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-10">
        <div className="md:flex md:flex-row">
          <div className="md:flex-1 grid grid-cols-1 mx-4 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-5">
              <a href="#" className="flex items-center">
                <span className="self-center text-3xl font-semibold whitespace-nowrap text-slate-800">
                  Portfo<span className="text-indigo-500">lio</span>
                </span>
              </a>
              <div className="text-gray-400">Membangun website dengan kreatifitas tanpa batas, dan membuat pengalaman menjelajahi website jadi lebih menyenangkan.</div>
              <div className="flex flex-row items-center gap-4">
                <a href="https://www.linkedin.com/in/irfannsyah" target="_blank">
                  <LinkedinIcon className="text-gray-400 cursor-pointer hover:text-indigo-500 hover:-translate-y-1 transition-all" />
                </a>
                <a href="https://www.github.com/sayakanikan" target="_blank">
                  <GithubIcon className="w-5 h-5 text-gray-400 cursor-pointer hover:text-indigo-500 hover:-translate-y-1 transition-all" />
                </a>
                <a href="https://www.facebook.com/irfansyah.avatar" target="_blank">
                  <FacebookIcon className="text-gray-400 cursor-pointer hover:text-indigo-500 hover:-translate-y-1 transition-all" />
                </a>
                <a href="https://www.instagram.com/irfansy_ah" target="_blank">
                  <InstagramIcon className="w-5 h-5 text-gray-400 cursor-pointer hover:text-indigo-500 hover:-translate-y-1 transition-all" />
                </a>
                <a href="https://www.x.com/pancimasakk" target="_blank">
                  <TwitterIcon className="text-gray-400 cursor-pointer hover:text-indigo-500 hover:-translate-y-1 transition-all" />
                </a>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-black">Berkenalan dengan saya</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2 flex flex-row gap-2 items-center">
                  <EmailIcon className="w-7 h-7 text-indigo-500" />
                  <p className="text-md">irfansyahavatar1@gmail.com</p>
                </li>
                <li className="mb-2 flex flex-row gap-2 items-center">
                  <PhoneIcon className="w-7 h-7 text-indigo-500" />
                  <p className="text-md">+6282137803650</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4  font-semibold text-black">Website ini dibangun dengan</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-1">
                  <a href="https://nextjs.org/" className="hover:text-indigo-500">
                    Next JS
                  </a>
                </li>
                <li className="mb-1">
                  <a href="https://tailwindcss.com/" className="hover:text-indigo-500">
                    Tailwind CSS
                  </a>
                </li>
                <li className="mb-1">
                  <a href="https://supabase.com/" className="hover:text-indigo-500">
                    Supabase
                  </a>
                </li>
                <li className="mb-1">
                  <a href="https://cloudinary.com/" className="hover:text-indigo-500">
                    Cloudinary
                  </a>
                </li>
                <li className="mb-1">
                  <a href="https://vercel.com/" className="hover:text-indigo-500">
                    Vercel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 mx-auto">
            © 2025
            <a href="https://instagram.com/irfansy_ah" target="_blank" className="hover:underline hover:text-indigo-500 ms-1">
              Irfansyah
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
