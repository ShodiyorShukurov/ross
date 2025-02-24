import React from 'react';
import buttonIcon from '../../../assets/logo/right.svg';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
  });

  const [errors, setErrors] = React.useState({
    fullName: '',
    phone: '',
  });

  const validateInput = (name, value) => {
    let error = '';

    if (!value) {
      error = 'Bu maydon to‘ldirilishi shart!';
    } else {
      if (name === 'fullName') {
        if (value.length < 5) error = 'Kamida 5 ta belgi kiritish kerak.';
        else if (!/[A-Z]/.test(value))
          error = 'Kamida bitta KATTA harf bo‘lishi kerak.';
        else if (!/[a-z]/.test(value))
          error = 'Kamida bitta kichik harf bo‘lishi kerak.';
      }

      if (name === 'phone') {
        const phoneRegex = /^\+998\d{9}$/;
        if (!phoneRegex.test(value))
          error =
            'Telefon raqam +998 bilan boshlanishi va 12 ta raqam bo‘lishi kerak.';
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateInput(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      validateInput(key, formData[key]); // Real vaqt tekshirish
      if (!formData[key]) newErrors[key] = 'Bu maydon to‘ldirilishi shart!';
    });

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log('Form jo‘natildi:', formData);
    }
  };

  return (
    <section className="mt-[100px]">
      <div className="container  ">
        <div className="flex justify-around bg-[#fff] pt-[50px]  pb-[70px] mb-[50px]">
          <div>
            <h3
              style={{ fontFamily: 'Playfair Display Bold' }}
              className="text-[#D18202] font-bold text-[36px] leading-[47px] w-full max-w-[550px]"
            >
              Ko'proq ma'lumot olishni xohlaysizmi?
            </h3>
            <p style={{ fontFamily: 'SF Pro Display Light' }} className=" font-light text-[20px] leading-[24px] w-full max-w-[500px] mt-[30px]">
              O'zingizni kontaktingizni qoldiring va menejerimiz sizga yanada
              qiziqarli tafsilotlar bilan tanishtiradi
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="w-full min-w-[620px]" style={{ fontFamily: 'SF Pro Display Medium' }}>
              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full bg-transparent border-b py-3 text-black placeholder:text-#AAAAAA focus:border-[#D18202] transition-all outline-none  ${
                  errors.fullName ? 'border-red-500 mb-[10px]' : 'border-black mb-[40px]'
                }`}
                placeholder="Ismingiz"
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm mb-[20px] ">{errors.fullName}</p>
              )}

              {/* Phone */}
              <div >
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 text-black placeholder:text-#AAAAAA focus:border-[#D18202] transition-all outline-none ${
                    errors.phone ? 'border-red-500 mb-[10px]' : 'border-black'
                  }`}
                  placeholder="Phone"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <button style={{ fontFamily: 'SF Pro Display Regular' }} className="bg-[#D18202] text-white text-[18px] leading-[26px] pl-[30px] py-[2px] pr-[2px] rounded-[48px] mt-[24px] flex items-center cursor-pointer">
                Malumotlarni yuborish
                <span className="w-[46px] h-[46px] bg-white rounded-full flex justify-center items-center ml-[20px]">
                  <img
                    src={buttonIcon}
                    alt="buttonIcon"
                    width={20}
                    height={20}
                  />
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
