import React, { Fragment, useState } from "react";

function classNames(...classes: boolean[]) {
  return classes.filter(Boolean).join(" ");
}

const Section1 = () => {
  return (
    <>
      <div className="flex-auto py-5 px-10 mr-10 justify-center content-center md:mt-10 md:ml-30">
        <h3 className="text-4xl py-1 text-[#434242]">A Ozonioterapia é <text className="text-pink-300">prevenção, saúde e bem-estar.</text></h3>
        <p className="text-2xl py-2 leading-8 text-[#434242] max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          reiciendis modi itaque illo ipsum voluptas dolores numquam optio nulla
          deserunt velit, reprehenderit nihil exercitationem aspernatur
          obcaecati explicabo architecto aperiam unde.
        </p>

      </div>
    </>
  );
};

export default Section1;
