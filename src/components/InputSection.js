const InputSection = (props) => {
  const { handleChange, errors, question, name, placeholder, value } = props;



  return (
    <div className="w-[416px] h-[68px] flex flex-col ">
      <div className="flex flex-row gap-[5px]">
        <p className="text-[14px] font-[700] text-[#334155] ">{question}</p>
        <p className="text-[14px] font-[700] text-[#E14942]">*</p>
      </div>
      <input
        name={name}
        className={`${
          errors.length > 0 ? "" : ""
        }, w-full h-[44px] border-[1.5px] border-solid border-[#CBD5E1] rounded-[8px] flex items-center text-[16px] font-[500] p-[12px]`}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
      {errors.length > 0 && (
        <p className="text-red-500">{errors}</p>
      )}
    </div>
  );
};

export default InputSection;
