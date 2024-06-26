import React from "react";
// import { useTranslation } from "react-i18next";

interface UpcomingGameProps {
  title: string;
  img: string;
  text: string;
  id: string;
  createDate: string;
}

const UpcomingGame: React.FC<UpcomingGameProps> = ({
  title,
  img,
  text,
  id,
}) => {
  //   const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[2rem] items-center w-full">
      <div className="flex flex-row gap-[2rem]">
        <div className="w-3/5">
          <img className="w-full" src={img} alt="witcher_photo" />
        </div>
        <div className="w-2/5 flex flex-col gap-[2rem]">
          <p className="text-[1.8rem]">{title}</p>
          <p className="text-[1.4rem]">{text}</p>
          <p className="text-[1.4rem]">{text}</p>
          <div className="flex mt-auto">
            <p className="ml-auto">
              {" "}
              <i>09-09-2020</i>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[2rem] items-center">
        <p className="text-[1.4rem] font-semibold">
          <a href={`/blogs/${id}`}>asd</a>
        </p>
      </div>
    </div>
  );
};

export default UpcomingGame;
