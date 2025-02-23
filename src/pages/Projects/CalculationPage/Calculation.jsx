import React from 'react';

const Calculation = () => {
  const [squareMeters, setSquareMeters] = React.useState('');
  const pricePerM2 = 20;

  return (
    <section className='pb-[100px]'>
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[50px] font-bold text-[#D18202] leading-[100px]"
        >
          Kalkulyator
        </h2>

        <div className=" flex  items-center gap-[16px]">
          <div className="flex flex-col gap-4 w-[40%]">
            <div className="grid grid-cols-2 gap-4">
              <h4 className="text-[32px] text-[#D18202] font-bold whitespace-nowrap">
                Binoni tanlang
              </h4>

              <select className="w-full max-w-[240px] py-3 px-4 rounded-lg bg-white text-[#151515] text-[16px] font-semibold outline-none">
                <option value="C Blok">C Blok</option>
                <option value="A Blok">A Blok</option>
                <option value="B Blok">B Blok</option>
              </select>

              <div className="w-full  flex items-center rounded-lg px-4 py-3 bg-white ">
                <input
                  type="number"
                  placeholder="Kvadraturani kiriting"
                  className="w-full outline-none bg-transparent text-[16px] text-gray-600 placeholder:text-gray-400"
                  value={squareMeters}
                  onChange={(e) =>
                    setSquareMeters(
                      e.target.value === '' ? '' : parseInt(e.target.value)
                    )
                  }
                />
                <span className="text-[#151515] font-semibold">m²</span>
              </div>

              <select className="w-full py-3 px-4 rounded-lg bg-white text-gray-700 text-[16px] font-semibold outline-none ">
                <option value="1 qavat">1 qavat</option>
                <option value="2 qavat">2 qavat</option>
                <option value="3 qavat">3 qavat</option>
              </select>
            </div>
          </div>

          <div className="bg-white py-[20px] px-[40px] rounded-[16px] flex items-center justify-between w-[100%]">
            <div>
              <h4 style={{fontFamily: "Playfair Display Bold"}} className="text-[#D18202] font-bold text-[32px] leading-[42px]">
                Balance
              </h4>
              <p className=" text-[18px]">Biznes markazi</p>
            </div>

            <div>
              <p className="text-[24px] font-bold leading-[30px]">${pricePerM2}</p>
              <p className=" text-[18px] mt-[10px]">Har bir m² uchun</p>
            </div>

            <div>
              <p className="text-[24px] font-bold leading-[30px]">${squareMeters ? (squareMeters * pricePerM2).toFixed(2) : "0.00"}</p>
              <p className=" text-[18px] mt-[10px]">Umumiy summa</p>
            </div>

            <button
              style={{
                border: '1px solid',
                borderSource:
                  'linear-gradient(180deg, #EBB956 0%, #D7AC56 100%)',
              }}
              className="py-[15px] px-[50px] bg-[#D18202] text-white text-[20px] font-semibold rounded-[70px]"
            >
              Band qilish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculation;
