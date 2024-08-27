import { useAutocomplete } from "./context.ts";
import { type ReactNode } from "react";
import { cn } from "../../utils/cn.ts";

type OptionsProps = {
  children: (filteredOptions: string[]) => ReactNode;
};

export function Options({ children }: OptionsProps) {
  const { filteredOptions, showOptions } = useAutocomplete();

  return (
    showOptions && (
      <ul className="absolute mt-1 bg-white w-full overflow-hidden rounded-md shadow-lg text-black">
        {children(filteredOptions)}
      </ul>
    )
  );
}

type OptionProps = { value: string };

export function Option({ value }: OptionProps) {
  const { inputValue, setShowOptions, setInputValue, onChange } =
    useAutocomplete();

  function handleClick() {
    setShowOptions(false);
    setInputValue(value);
    onChange(value);
  }

  return (
    <li
      onClick={handleClick}
      className={cn(
        " cursor-pointer p-2 hover:bg-gray-100 active:bg-blue-200",
        inputValue === value && "bg-blue-100",
      )}
    >
      {value}
    </li>
  );
}
