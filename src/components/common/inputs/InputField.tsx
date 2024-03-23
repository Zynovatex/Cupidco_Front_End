import React from "react";

interface InputFieldProps {
  id: string;
  type: string;
  name: string;
  width?: string;
  label: string;
  value?: string;
  disabled?: boolean;
  backicon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  name,
  type,
  value,
  width,
  disabled,
  backicon,
  onChange,
}) => {
  return (
    <>
      {/* input field  */}
      <div className={`relative ${width} h-10`}>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          className={`
            ${backicon ? "pr-12" : "pr-5"}  
            font-Vollkorn peer  pl-5 w-[100%] h-10 md:h-12 bg-transparent focus:ring-transparent text-primary-purple font-normal disabled:bg-primary-purple disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-2 focus:border-2 border-t-0 focus:border-t-transparent text-sm md:text-base     py-2.5 rounded-[15px] border-primary-purple focus:border-primary-purple`}
          placeholder=" "
        />

        {/* input animate label  */}
        <label
          className={`  flex w-[100%] h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-purple transition-all -top-2 md:-top-1.5 peer-placeholder-shown:text-lg  md:text-[21px]  peer-focus:text-[15px] md:peer-focus:text-[20px]   before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-2  peer-placeholder-shown:before:border-transparent  before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-5.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-[15px] after:border-t-2  after:border-primary-purple after:border-r-2  peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-purple peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-primary-purple after:border-blue-gray-200 peer-focus:after:!border-primary-purple`}
        >
          <span className=" mt-[-4px]  font-Vollkorn text-primary-purple mr-1">
            {label}
          </span>
        </label>

        {/* input backicon  */}
        {backicon && (
          <div className="mt-[-29px] md:mt-[-33px] flex justify-end mr-4 text-lg">
            {backicon}
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
