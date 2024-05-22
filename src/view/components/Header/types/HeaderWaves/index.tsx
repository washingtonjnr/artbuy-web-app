import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Components
import { Logo } from "../../../Logo";
// Waves
import wave1 from "../../../../../assets/waves/wave-1.png";
import wave2 from "../../../../../assets/waves/wave-2.png";
import wave3 from "../../../../../assets/waves/wave-3.png";
// Utils
import { cn } from "../../../../../app/utils/cn";
//
import "./styles.css";

export function HeaderWave() {
  const location = useLocation();
  //
  const [inSignup, setInSignup] = useState<boolean>(false);

  useEffect(() => {
    setInSignup(window.location.pathname.includes("signup"));
  }, [location]);

  return (
    <header
      className={cn(
        "!sticky top-0 left-0 flex z-10 h-48 justify-center items-center transition-all box-shadow-gradient",
        inSignup && "h-32"
      )}
    >
      <div className="wave-wrapper wave-animation bg-gray-50">
        <div className="wave-wrapper-inner bg-top">
          <div
            className="wave wave-top "
            style={{ backgroundImage: `url(${wave1})` }}
          ></div>
        </div>

        <div className="wave-wrapper-inner bg-middle">
          <div
            className="wave wave-middle"
            style={{ backgroundImage: `url(${wave2})` }}
          ></div>
        </div>

        <div className="wave-wrapper-inner bg-bottom">
          <div
            className="wave wave-bottom"
            style={{ backgroundImage: `url(${wave3})` }}
          ></div>
        </div>
      </div>

      <a href="/signin">
        <Logo
          className={cn(
            "relative text-white w-16 h-16 z-20 mt-[-37px] transition-all",
            inSignup && "w-12 h-12"
          )}
        />
      </a>
    </header>
  );
}
