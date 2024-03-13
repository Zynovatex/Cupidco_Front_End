import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const TagAdder = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTag();
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center mb-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter Your Tag"
          className="shadow appearance-none border rounded-lg py-2 px-3 text-grey-darker mr-2"
        />
        <button
          onClick={handleAddTag}
          className="flex items-center bg-[#f4d3cc] hover:bg-[#ffd2ce] text-primary-purple font-bold py-2 px-4 rounded-lg"
        >
          ADD +
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-white border rounded px-3 py-1"
          >
            {tag}
            <button
              onClick={() => handleRemoveTag(tag)}
              className="text-sm text-gray-500 ml-2"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <PrimaryButton
        label={"Save"}
        height="py-2"
        width="px-4"
        radius="rounded-lg"
        fontSize="text-xl"
      />
    </div>
  );
};

export default TagAdder;
