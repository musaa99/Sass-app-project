import { emailPreferenceDetails } from "../../assets/data/userProfileBoard";
import ProfileHeader from "../headers/ProfileHeader";

export default function EmailPreferences() {
  return (
    <div className="w-[calc(100vw-330px)] pl-6 pr-4 max-w-7xl     ">
      <>
        <ProfileHeader title={"email preference"} />
      </>
      <div className="w-full max-w-[851px] mb-64 ">
        <div>
          {emailPreferenceDetails.map((item, index) => (
            <div key={item.id}>
              <div className="flex-1">
                <p className=" text-2xl font-medium text-black/[0.85] mb-[11px] ">
                  {item.heading}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-normal text-[20px] leading-[30px] text-black/[0.7]">
                    {item.description}
                  </p>
                  <div className="w-[64px] h-[35px]">
                    <input
                      type="checkbox"
                      className="toggle w-full h-full  "
                      //   checked
                    />
                  </div>
                </div>
              </div>
              {index !== emailPreferenceDetails.length - 1 && (
                <div className="divider max-w-[851px] border-[2px] h-[2px] border-black/[0.2] my-[30px] "></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
