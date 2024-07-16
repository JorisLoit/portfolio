import React from "react";

type ContentResumePropsType = {
  title: String;
  description: String;
};

const ContentResume = (props: ContentResumePropsType) => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{props.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{props.description}</p>
    </div>
  );
};

export default ContentResume;
