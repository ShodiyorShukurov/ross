import React from 'react';
import buttonIcon from '../../../assets/logo/right.svg';
import bg from '../../../assets/images/form.png';
import { useTranslation } from 'react-i18next';
import { API } from '../../../utils/Constants';

const Contact = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = React.useState(false);

  const [data, setData] = React.useState({
    fullName: '',
    phone: '',
    category: 'Sheet1',
  });

  const [errors, setErrors] = React.useState({
    fullName: '',
    phone: '',
  });

  const validateInput = (name, value) => {
    let error = '';

    if (!value) {
      error = t('contact_page.error');
    } else {
      if (name === 'fullName') {
        if (value.length < 5) error = t('contact_page.name_error1');
        else if (!/[A-Z]/.test(value)) error = t('contact_page.name_error2');
        else if (!/[a-z]/.test(value)) error = t('contact_page.name_error3');
      }

      if (name === 'phone') {
        const phoneRegex = /^\+998\d{9}$/;
        if (!phoneRegex.test(value))
          error = t('contact_page.phone_number_error');
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    validateInput(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(data).forEach((key) => {
      validateInput(key, data[key]);
      if (!data[key]) newErrors[key] = t('contact_page.error');
    });

    setIsLoading(true);
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      const formData1 = new FormData();
      formData1.append('fullName', data.fullName);
      formData1.append('phone', data.phone);
      formData1.append('category', data.category);

      try {
        const response = await fetch(API, {
          method: 'POST',
          body: formData1, // ✅ `Content-Type` avtomatik aniqlanadi
        });

        if (!response.ok) {
          throw new Error(`Server xatosi: ${response.status}`);
        }

        const result = await response.json();
        console.log('✅ Serverdan javob:', result);

        if (result.status === 'success') {
          alert(t('contact_page.success')); // ✅ Foydalanuvchi alertni yopishi kerak

          setTimeout(() => {
            window.location.reload(); // ✅ Alert yopilgandan keyin sahifani yangilaydi
          }, 100); // ⏳ 100ms kutish (alertdan keyin)

          setData({
            fullName: '',
            phone: '',
            message: '',
          });
        } else {
          alert('Xatolik: ' + result.message);
        }
      } catch (error) {
        console.error('❌ Fetch xatosi:', error);
        alert(t('contact_page.error_message'));
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="py-[60px] sm:py-[100px]" id="contact">
      <div className="container">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 bg-[#fff] rounded-[16px]"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top left',
            backgroundSize: 'contain',
          }}
        >
          <div className="px-[16px] pt-[32px] sm:px-[50px] sm:pt-[50px]">
            <h3
              style={{ fontFamily: 'Playfair Display Bold' }}
              className="text-[#D18202] font-bold text-[32px] sm:text-[36px] leading-[42px] sm:leading-[47px] w-full max-w-[550px]"
            >
              {t('contact_page.title')}
            </h3>
            <p
              style={{ fontFamily: 'SF Pro Display Light' }}
              className=" text-[16px] sm:text-[20px] leading-[24px] w-full max-w-[500px] mt-[10px] sm:mt-[20px] md:mt-[30px]"
            >
              {t('contact_page.subtitle')}
            </p>
          </div>

          <div className="px-[16px] py-[32px] sm:p-[50px]">
            <form
              onSubmit={handleSubmit}
              className="w-full "
              style={{ fontFamily: 'SF Pro Display Medium' }}
            >
              <input
                type="text"
                name="fullName"
                value={data.fullName}
                onChange={handleChange}
                className={`w-full bg-transparent border-b py-3 text-black placeholder:text-#AAAAAA focus:border-[#D18202] transition-all outline-none  ${
                  errors.fullName
                    ? 'border-red-500 mb-[10px]'
                    : 'border-black mb-[40px]'
                }`}
                placeholder={t('contact_page.name')}
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm mb-[20px] ">
                  {errors.fullName}
                </p>
              )}

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 text-black placeholder:text-#AAAAAA focus:border-[#D18202] transition-all outline-none ${
                    errors.phone ? 'border-red-500 mb-[10px]' : 'border-black'
                  }`}
                  placeholder={t('contact_page.phone_number')}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <button
                style={{ fontFamily: 'SF Pro Display Regular' }}
                className={`bg-[#D18202] text-white text-[18px] leading-[26px] pl-[30px] py-[2px] pr-[2px] rounded-[48px] mt-[24px] flex items-center cursor-pointer w-full sm:w-fit ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading
                  ? t('contact_page.loading_text')
                  : t('contact_page.button_text')}
                <span className="w-[46px] h-[46px] bg-white rounded-full flex justify-center items-center ml-auto sm:ml-[20px]">
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-[#D18202]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  ) : (
                    <img
                      src={buttonIcon}
                      alt="buttonIcon"
                      width={20}
                      height={20}
                    />
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
