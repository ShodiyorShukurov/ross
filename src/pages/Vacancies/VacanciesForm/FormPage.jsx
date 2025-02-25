import React, { useState } from 'react';
import { Loader2, FileText, Trash2, Download } from 'lucide-react';
import { getVacansies } from '../../../mock/vacansiesData';
import useVacansies from '../../../hooks/UseVacansies';
import { useTranslation } from 'react-i18next';

const FormPage = () => {
  const { t } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const vacanciesData = getVacansies(t);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFiles([{ file, loading: true }]);

      setTimeout(() => {
        setSelectedFiles([{ file, loading: false }]);
      }, 1500);
    }
  };

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Ism Familiya bo‘sh bo‘lishi mumkin emas!';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon raqam kiritilishi shart!';
    } else if (!/^\+998\d{9}$/.test(formData.phone)) {
      newErrors.phone =
        'Telefon raqam +998 bilan boshlanishi va 13 ta raqamdan iborat bo‘lishi kerak!';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email kiritilishi shart!';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email noto‘g‘ri formatda!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Ariza muvaffaqiyatli yuborildi!');
    }
  };

  return (
    <section className="py-[100px]" id="vacansiesPage">
      <div className="container">
        <div className="bg-white p-[60px] rounded-[20px]">
          <h2
            style={{ fontFamily: 'Playfair Display Bold' }}
            className="text-[50px] font-bold text-[#D18202] mb-6"
          >
            Ariza qoldirish
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{ fontFamily: 'SF Pro Regular' }}
          >
            <div className="grid grid-cols-4 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Ism Familiya"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full bg-[#F7F7F7] mb-4 py-[20px] pl-[15px] rounded-[10px] outline-0 text-[16px]"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}

                <input
                  type="text"
                  placeholder="+998 99 123 45 67"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-[#F7F7F7] mb-4 py-[20px] pl-[15px] rounded-[10px] outline-0 text-[16px]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#F7F7F7] mb-4 py-[20px] pl-[15px] rounded-[10px] outline-0 text-[16px]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}

                <select className="w-full bg-[#F7F7F7] mb-4 py-[20px] pl-[15px] rounded-[10px] outline-0 text-[16px]">
                  {vacanciesData.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="bg-[#D18202] text-white w-full py-[10px] rounded-[48px] text-[20px] mt-4"
                >
                  Ariza topshirish
                </button>
              </div>

              <div>
                {selectedFiles.length > 0 ? (
                  <div className="flex justify-center items-center w-full h-[75%] p-4 border-2 border-dashed border-[#D9D9D9] rounded-lg cursor-pointer bg-[#F5F5F5]">
                    <div className="mt-4 space-y-2 w-full">
                      {selectedFiles.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-white p-2 rounded-lg"
                        >
                          <FileText className="text-gray-600 w-5 h-5 mr-2" />
                          <span className="text-gray-700 text-sm flex-1 truncate">
                            {item.file.name}
                          </span>

                          {item.loading ? (
                            <Loader2 className="animate-spin text-blue-500 w-5 h-5" />
                          ) : (
                            <>
                              <a
                                href={URL.createObjectURL(item.file)}
                                download={item.file.name}
                                className="text-gray-500 hover:text-blue-600 w-5 h-5 cursor-pointer"
                              >
                                <Download />
                              </a>
                              <Trash2
                                className="text-gray-500 hover:text-red-600 w-5 h-5 cursor-pointer ml-2"
                                onClick={() => removeFile(index)}
                              />
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <label
                    className={`flex justify-center items-center w-full h-[72%] p-4 border-2 border-dashed border-[#D9D9D9] rounded-lg cursor-pointer hover:bg-[#F5F5F5]`}
                  >
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".doc, .docx, .pdf"
                    />
                    <div className="flex items-center justify-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_273_6)">
                          <path
                            d="M6.43766 28L6.41099 28.0267L6.38299 28H3.98966C3.63874 27.9996 3.30232 27.86 3.05431 27.6117C2.8063 27.3635 2.66699 27.0269 2.66699 26.676V5.324C2.66943 4.97384 2.80953 4.63869 3.05701 4.39096C3.30449 4.14322 3.6395 4.00279 3.98966 4H28.011C28.7417 4 29.3337 4.59333 29.3337 5.324V26.676C29.3312 27.0262 29.1911 27.3613 28.9436 27.609C28.6962 27.8568 28.3612 27.9972 28.011 28H6.43766ZM26.667 20V6.66667H5.33366V25.3333L18.667 12L26.667 20ZM26.667 23.7707L18.667 15.7707L9.10433 25.3333H26.667V23.7707ZM10.667 14.6667C9.95975 14.6667 9.28147 14.3857 8.78137 13.8856C8.28128 13.3855 8.00033 12.7072 8.00033 12C8.00033 11.2928 8.28128 10.6145 8.78137 10.1144C9.28147 9.61428 9.95975 9.33333 10.667 9.33333C11.3742 9.33333 12.0525 9.61428 12.5526 10.1144C13.0527 10.6145 13.3337 11.2928 13.3337 12C13.3337 12.7072 13.0527 13.3855 12.5526 13.8856C12.0525 14.3857 11.3742 14.6667 10.667 14.6667Z"
                            fill="#BFBFBF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_273_6">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div>
                        <p>Drag files here or click to select files</p>
                        <p className="text-xs text-gray-400">
                          Each file should not exceed 5MB
                        </p>
                      </div>
                    </div>
                  </label>
                )}
              </div>

              <div className="col-span-2">
                <p
                  style={{ fontFamily: 'SF Pro Display Light' }}
                  className="text-[20px] leading-[28px] "
                >
                  Bizning HR mutaxassislarimiz olingan barcha rezyumelarni
                  diqqat bilan ko'rib chiqadilar. Sizning ish tajribangiz,
                  ko'nikma va malakalaringiz hozirda mavjud bo'sh ish o'rinlari
                  talablariga javob bermasa ham, biz sizning rezyumeingizni
                  albatta ma'lumotlar bazamizga qo'shamiz va mos narsa paydo
                  bo'lganda siz bilan bog'lanamiz.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
