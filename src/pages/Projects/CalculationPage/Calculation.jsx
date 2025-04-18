import React from 'react';
import { useTranslation } from 'react-i18next';

const Calculation = ({ module }) => {
  const [squareMeters, setSquareMeters] = React.useState('');
  const [selectedFloor, setSelectedFloor] = React.useState(
    module?.calculator_page.floor1 ? module?.calculator_page.floor1 : '1 qavat'
  );

  const { t } = useTranslation();

  const [pricePerM2, setPricePerM2] = React.useState(
    module?.id !== 2
      ? module?.calculator_page.area_sum
      : selectedFloor == '1 qavat'
      ? module?.calculator_page.area_sum1
      : module?.calculator_page.area_sum2
  );

  React.useEffect(() => {
    setPricePerM2(
      module?.id !== 2
        ? module?.calculator_page.area_sum
        : selectedFloor == '1 qavat'
        ? module?.calculator_page.area_sum1
        : module?.calculator_page.area_sum2
    );
  }, [selectedFloor, module]);

  return (
    <section className="pb-12 md:pb-[100px]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[32px] md:text-[56px] font-bold text-[#D18202] leading-tight md:leading-[100px]"
        >
          {module?.calculator_page.title}
        </h2>

        <div className="flex flex-col lg:flex-row items-start md:items-center gap-[16px] mt-6 md:mt-[50px]">
          <div className="flex flex-col gap-2 w-full lg:w-[40%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[130px]">
              <h4
                style={{ fontFamily: 'SF Pro Display Bold' }}
                className="text-xl sm:text-[26px] text-[#D18202] leading-[100%]"
              >
                {module?.calculator_page.subtitle}
              </h4>

              <select
                style={{ fontFamily: 'SF Pro Bold' }}
                className="w-full py-3 px-4 rounded-lg bg-white text-[#151515] text-[16px] sm:text-[18px] outline-none h-fit"
              >
                <option value={module?.calculator_page.block1}>
                  {module?.calculator_page.block1}
                </option>
                {module?.calculator_page.block2 ? (
                  <option value={module?.calculator_page.block2}>
                    {module?.calculator_page.block2}
                  </option>
                ) : (
                  ''
                )}
                {module?.calculator_page.block3 ? (
                  <option value={module?.calculator_page.block3}>
                    {module?.calculator_page.block3}
                  </option>
                ) : (
                  ''
                )}
                {module?.calculator_page.block4 ? (
                  <option value={module?.calculator_page.block4}>
                    {module?.calculator_page.block4}
                  </option>
                ) : (
                  ''
                )}
              </select>

              <div
                style={{ fontFamily: 'SF Pro Regular' }}
                className="w-full flex items-center rounded-lg px-4 py-3 bg-white"
              >
                <input
                  type="number"
                  placeholder={module?.calculator_page.area_input}
                  className="w-full outline-none bg-transparent text-[16px] sm:text-[18px] text-gray-600 placeholder:text-gray-400"
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
                  {t('project.m')}
                </span>
              </div>

              <select
                style={{ fontFamily: 'SF Pro Regular' }}
                className="w-full py-3 px-4 rounded-lg bg-white text-gray-700 text-[16px] sm:text-[18px] outline-none"
                value={selectedFloor}
                onChange={(e) => setSelectedFloor(e.target.value)}
              >
                {module?.calculator_page?.floor1 && (
                  <option value={module.calculator_page.floor1}>
                    {module.calculator_page.floor1}
                  </option>
                )}
                {module?.calculator_page?.floor2 && (
                  <option value={module.calculator_page.floor2}>
                    {module.calculator_page.floor2}
                  </option>
                )}
                {module?.calculator_page?.floor3 && (
                  <option value={module.calculator_page.floor3}>
                    {module.calculator_page.floor3}
                  </option>
                )}
                {module?.calculator_page?.floor4 && (
                  <option value={module.calculator_page.floor4}>
                    {module.calculator_page.floor4}
                  </option>
                )}
                {module?.calculator_page?.floor5 && (
                  <option value={module.calculator_page.floor5}>
                    {module.calculator_page.floor5}
                  </option>
                )}
                {module?.calculator_page?.floor6 && (
                  <option value={module.calculator_page.floor6}>
                    {module.calculator_page.floor6}
                  </option>
                )}
                {module?.calculator_page?.floor7 && (
                  <option value={module.calculator_page.floor7}>
                    {module.calculator_page.floor7}
                  </option>
                )}
              </select>
            </div>
          </div>

          <div className="bg-white py-4 md:py-[20px] px-6 md:px-[25px] rounded-[16px] flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-1.5 h-full">
            <div>
              <h4
                style={{ fontFamily: 'Playfair Display Bold' }}
                className="text-[#D18202] font-bold text-[24px] md:text-[26px] leading-8 md:leading-[100%] max-w-[300px]"
              >
                {module?.hero.title}
              </h4>
              <p
                style={{ fontFamily: 'SF Pro Display Medium' }}
                className="text-[16px] md:text-[18px]"
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
                className="text-[16px] md:text-[18px] leading-[100%] mt-[1px] md:mt-[10px]"
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
                className="text-[16px] md:text-[18px] leading-[100%] mt-[1px] md:mt-[10px]"
              >
                {module?.calculator_page.total_amount}
              </p>
            </div>

            <a
              href="#contact"
              style={{
                fontFamily: 'SF Pro Display Medium',
                border: '1px solid',
                borderImageSource:
                  'linear-gradient(180deg, #EBB956 0%, #D7AC56 100%)',
              }}
              className="py-2 md:py-[15px] px-6 md:px-[25px] 2xl:px-[50px] bg-[#D18202] text-white text-base md:text-[20px] leading-[100%] rounded-[70px] w-full md:w-auto cursor-pointer text-center"
            >
              {module?.calculator_page.calculator_button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculation;
