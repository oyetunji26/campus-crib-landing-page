import React from "react";

type SectionTagProps = {
  title: string;
  otherStyles?: string;
};

const SectionTag: React.FC<SectionTagProps> = ({ title, otherStyles }) => {
  return (
    <div
      className={`bg-[#E6CDBF24] shadow-2xs section-tag-color w-fit text-xs capitalize p-2 rounded-2xl flex items-center justify-center gap-2 ${otherStyles}`}
    >
      <div className="section-tag-ellipse" />
      <p>{title}</p>
    </div>
  );
};

export default SectionTag;
