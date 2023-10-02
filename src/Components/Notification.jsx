import { useState } from "react";
import data from "../../data.json";

const Notification = () => {
  const [userData, setUserData] = useState(data);
  const markAsRead = () => {
    const clone = [...userData].map((item) => {
      item.isRead = true;
      return item;
    });
    setUserData(clone);
  };
  const handleSingleClick = (index) => {
    const clone = [...userData];
    clone[index].isRead = true;
    setUserData(clone);
  };
  return (
    <div className="bg-white w-[345px] rounded-[15px] px-[16px] pt-[24px] pb-[45px] lg:pl-[32px] lg:pt-[33px] lg:pr-[30px] lg:pb-[18px] lg:w-[730px]">
      <header className="flex items-center justify-between">
        <h1 className=" flex text-xl font-extrabold lg:text-2xl">
          Notifications{" "}
          <span className="bg-[#0A327B] text-white text-[16px] rounded-[6px] px-[11px] ml-[9px]">
            {userData.filter((item) => !item.isRead).length}
          </span>
        </h1>
        <p
          className="text-sm text-[#5E6778] cursor-pointer lg:text-base hover:text-[#0A327B]"
          onClick={markAsRead}
        >
          Mark all as read
        </p>
      </header>

      <div className="mt-[24px] lg:mt-[31px] flex flex-col gap-[10px] lg:gap-[20px]">
        {userData.map((item, index) => {
          return (
            <div
              onClick={() => {
                handleSingleClick(index);
              }}
              className={`flex items-center gap-[13px] lg:gap-[19px] ${
                item.isRead
                  ? "bg-transparent"
                  : "bg-[#F7FAFD] p-[16px] lg:py-[18px] cursor-pointer"
              }`}
              key={index}
            >
              <img
                src={`./images/avatar-${item.author
                  .replace(" ", "-")
                  .toLowerCase()}.webp`}
                alt="avatar"
                className="w-[39px] lg:w-[45px]"
              />
              <div>
                <p>
                  <span className="text-sm font-extrabold lg:text-base">
                    {item.author}
                  </span>{" "}
                  <span className="text-sm lg:text-base">{item.type}</span>{" "}
                  {item.content.includes("webp") ? (
                    <img src={item.content} className="w-[39px] lg:w-[45px]" />
                  ) : item.type == "sent you a private message" ? (
                    <div className=" bg-white  lg:bg-[#E5EFFA] rounded-[5px] p-[16px] lg:p-[20px] border border-solid border-[#DDE7EE] mt-[13px] mb-[5px]">
                      {item.content}
                    </div>
                  ) : (
                    <span
                      className={`text-sm lg:text-base ${
                        item.type == "has joined your group" ||
                        item.type == "left the group"
                          ? "text-[#0A327B] font-extrabold cursor-pointer"
                          : "text-[#5E6778] font-extrabold cursor-pointer hover:text-[#0A327B]"
                      } ${
                        item.type == "sent you a private message"
                          ? "bg-[#DDE7EE]"
                          : ""
                      }`}
                    >
                      {item.content}
                    </span>
                  )}
                  {item.isRead ? (
                    ""
                  ) : (
                    <div className="w-[8px] h-[8px] rounded-full bg-[#F65552] inline-block ml-[8px]"></div>
                  )}
                </p>
                <p className="text-sm lg:text-base">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
