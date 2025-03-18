import React from 'react';

const MoreInfoNews = ({ module }) => {
 
  return (
    <section className="pt-[40px] lg:pt-[60px]">
      <div className="container">
        <h2 className="text-[24px] lg:text-[32px] leading-[28px] lg:leading-[38px] w-full max-w-[1100px] font-bold">
          {module?.title}
        </h2>
        <p
          className="text-[16px] lg:text-[18px] leading-[24px] w-full max-w-[1100px] mt-[24px]"
          dangerouslySetInnerHTML={{ __html: module?.desc }}
        />
      </div>
    </section>
  );
};

export default MoreInfoNews;
