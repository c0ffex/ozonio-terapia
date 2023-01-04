import React, { Fragment, useState } from "react";

function classNames(...classes: boolean[]) {
  return classes.filter(Boolean).join(" ");
}

const Section1 = () => {
  return (
    <>
      <div className="flex-auto py-5 px-10 mr-10 justify-center">
        <h3 className="text-4xl py-1">A Ozonioterapia Mogi é <p className="text-pink-300">prevenção, saúde e bem-estar.</p></h3>
        <p className="text-2xl py-2 leading-8 text-gray-800">
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
