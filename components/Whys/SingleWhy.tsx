"use client";

import { Why } from "@/types/why";
import bg from "../../public/images/ourServices/Tax-amico.svg";

const SingleWhy = ({ why }: { why: Why }) => {
  const { content, content_bold } = why;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          <b className="text-xl">{content_bold}</b> <br/> <br/>
          {content}
        </p>
      </div>
    </div>
  );
};

export default SingleWhy;
