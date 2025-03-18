import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from '@/shared/types';
import Logo from "@/assets/Logo.png";
import Link from "./Link"
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from '@/shared/ActionButton';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ( {isTopOfPage, selectedPage, setSelectedPage}: Props ) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [isMenuToogled, setIsMenuToogled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  
  return <nav>
    <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-32`}>
          {/* Left side */}
          <img alt="logo" src={Logo} />

          {/* Right side */}
          
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-10 fontsize-20px`}>
                <Link 
                  page="Home" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />
                <Link 
                  page="Benefits" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />
                <Link 
                  page="Our Classes" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />
                <Link 
                  page="Contact Us" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />
              </div>

              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div> 
          ) :
          (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToogled(!isMenuToogled)}
            >
              <Bars3Icon className="w-6 h-6 text-white" />
            </button>
          )
          }
        </div>
      </div>
    </div>

    {/* MOBILE MENU MODAL */}
    {!isAboveMediumScreens && isMenuToogled && (
      <div className="fixed right-0 top-0 z-40 h-full w-[250px] bg-pink-200 drop-shadow-xl">
        {/* CLOSE ICON */}
        <div className="flex justify-end p-12">
          <button onClick={() =>setIsMenuToogled(!isMenuToogled)}>
            <XMarkIcon className="h-6 w-6 text-gray-400"/>
          </button>
        </div>

        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          <Link 
            page="Home" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
          <Link 
            page="Benefits" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
          <Link 
            page="Our Classes" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
          <Link 
            page="Contact Us" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
        </div>
      </div>
    )}
  </nav>;
}

export default Navbar;