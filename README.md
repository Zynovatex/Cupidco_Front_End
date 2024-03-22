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