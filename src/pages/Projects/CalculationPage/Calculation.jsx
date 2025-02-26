import React from 'react';

const Calculation = ({ module }) => {
  const [squareMeters, setSquareMeters] = React.useState('');
  const pricePerM2 = 20;

  return (
    <section className="pb-12 md:pb-[100px]">
      <div className="container mx-auto px-4">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-3xl md:text-[56px] font-bold text-[#D18202] leading-tight md:leading-[100px]"
        >
          {module?.calculator_page.title}
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[16px] mt-6 md:mt-[50px]">
          <div className="flex flex-col gap-4 w-full md:w-[40%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h4
                style={{ fontFamily: 'SF Pro Display Bold' }}
                className="text-xl sm:text-[32px] text-[#D18202] whitespace-nowrap"
              >
                {module?.calculator_page.subtitle}
              </h4>

              <select
                style={{ fontFamily: 'SF Pro Bold' }}
                className="w-full py-3 px-4 rounded-lg bg-white text-[#151515] text-sm sm:text-[16px] outline-none"
              >
                <option value={module?.calculator_page.block1}>
                  {module?.calculator_page.block1}
                </option>
                <option value={module?.calculator_page.block2}>
                  {module?.calculator_page.block2}
                </option>
                <option value={module?.calculator_page.block3}>
                  {module?.calculator_page.block3}
                </option>
                <option value={module?.calculator_page.block4}>
                  {module?.calculator_page.block4}
                </option>
              </select>

              <div
                style={{ fontFamily: 'SF Pro Regular' }}
                className="w-full flex items-center rounded-lg px-4 py-3 bg-white"
              >
                <input
                  type="number"
                  placeholder={module?.calculator_page.area_input}
                  className="w-full outline-none bg-transparent text-sm sm:text-[16px] text-gray-600 placeholder:text-gray-400"
                  value={squareMeters}
                  onChange={(e) =>
                    setSquareMeters(
                      e.target.value === '' ? '' : parseInt(e.target.value)
                    )
                  }
                />
                <span
                  style={{ fontFamily: 'SF Pro Semi Bold' }}
                  className="text-[#151515] text-sm sm:text-base"
                >
                  m²
                </span>
              </div>

              <select
                style={{ fontFamily: 'SF Pro Regular' }}
                className="w-full py-3 px-4 rounded-lg bg-white text-gray-700 text-sm sm:text-[16px] outline-none"
              >
                <option value={module?.calculator_page.floor1}>{module?.calculator_page.floor1}</option>
                <option value={module?.calculator_page.floor2}>{module?.calculator_page.floor2}</option>
                <option value={module?.calculator_page.floor3}>{module?.calculator_page.floor3}</option>
              </select>
            </div>
          </div>

          <div className="bg-white py-4 md:py-[20px] px-6 md:px-[40px] rounded-[16px] flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-0">
            <div>
              <h4
                style={{ fontFamily: 'Playfair Display Bold' }}
                className="text-[#D18202] font-bold text-xl md:text-[32px] leading-8 md:leading-[42px]"
              >
               {module?.hero.title}
              </h4>
              <p
                style={{ fontFamily: 'SF Pro Display Medium' }}
                className="text-sm md:text-[18px]"
              >
                {module?.calculator_page.calculator_business}
              </p>
            </div>

            <div>
              <p
                style={{ fontFamily: 'SF Pro Bold' }}
                className="text-lg md:text-[24px] leading-6 md:leading-[30px]"
              >
                ${pricePerM2}
              </p>
              <p
                style={{ fontFamily: 'SF Pro Regular' }}
                className="text-sm md:text-[18px] mt-2 md:mt-[10px]"
              >
                {module?.calculator_page.area_sum_text}
              </p>
            </div>

            <div>
              <p
                style={{ fontFamily: 'SF Pro Bold' }}
                className="text-lg md:text-[24px] leading-6 md:leading-[30px]"
              >
                $
                {squareMeters ? (squareMeters * pricePerM2).toFixed(2) : '0.00'}
              </p>
              <p
                style={{ fontFamily: 'SF Pro Regular' }}
                className="text-sm md:text-[18px] mt-2 md:mt-[10px]"
              >
                {module?.calculator_page.total_amount}
              </p>
            </div>

            <button
              style={{
                fontFamily: 'SF Pro Display Medium',
                border: '1px solid',
                borderImageSource:
                  'linear-gradient(180deg, #EBB956 0%, #D7AC56 100%)',
              }}
              className="py-2 md:py-[15px] px-6 md:px-[50px] bg-[#D18202] text-white text-base md:text-[20px] rounded-[70px] w-full md:w-auto cursor-pointer"
            >
             {module?.calculator_page.calculator_button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculation;
