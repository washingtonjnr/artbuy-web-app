import { Logo } from "../../../Logo";
// Waves
import wave1 from "../../../../../assets/waves/wave-1.png";
import wave2 from "../../../../../assets/waves/wave-2.png";
import wave3 from "../../../../../assets/waves/wave-3.png";
//
import "./styles.css";

export function HeaderWave() {
  return (
    <header className="relative flex h-48 justify-center items-center ">
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

      <Logo className="relative text-white w-16 h-16 z-20 mt-[-37px]" />
    </header>
  );
}
