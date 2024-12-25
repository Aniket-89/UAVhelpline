import { TbDrone } from "react-icons/tb";
import { phoneNumber } from "../assets/assets";

const Anouncements = () => {
  return (
    <>
      <div className="bg-white">
        <div className="p-[6px] flex items-center gap-1 container text-sm">
          <span>
            <TbDrone />
          </span>
          <span>
            Welcome to UAV Helpline - Your Trusted Source for Drone Information
            and Assistance
          </span>
        </div>
      </div>
      <div className="container flex gap-1 text-white text-sm p-[6px]">
        <span></span>
        Contact us at: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </div>
    </>
  );
};

export default Anouncements;
