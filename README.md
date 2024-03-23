### Cupidco-Fontend ###


# radio button function 
const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | undefined;
  }>({});

  const handleOptionChange = (groupName: string, value: string) => {
    setSelectedOptions({ ...selectedOptions, [groupName]: value });
  };


# fonts 
Titles - PlayfairDisplay
Descriptions - Vollkorn
Links - Yrsa

# InputField {src/components/common/inputs/InputField.tsx}
before:rounded-tl-[15px] before:border-t-1   peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2
# if you want change border size before focus, use this
placeholder-shown:border-2
