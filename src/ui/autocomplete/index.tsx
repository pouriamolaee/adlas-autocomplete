import { type ReactNode, useRef, useState } from "react";
import { AutocompleteContext } from "./context.ts";
import { Input, Label } from "./input.tsx";
import { Option, Options } from "./options.tsx";
import { useOutsideClick } from "../../hooks/use-outside-click.ts";

type AutocompleteProps = {
  onChange: (value: string) => void;
  options: string[];
  children: ReactNode;
  inputId?: string;
};

export default function Autocomplete({
  onChange,
  children,
  options,
  inputId = "autocomplete-input",
}: AutocompleteProps) {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, () => setShowOptions(false));

  return (
    <AutocompleteContext.Provider
      value={{
        options,
        inputValue,
        setInputValue,
        filteredOptions,
        setFilteredOptions,
        showOptions,
        setShowOptions,
        onChange,
        inputId,
      }}
    >
      <div className="relative" ref={wrapperRef}>
        {children}
      </div>
    </AutocompleteContext.Provider>
  );
}

Autocomplete.Input = Input;
Autocomplete.Label = Label;
Autocomplete.Options = Options;
Autocomplete.Option = Option;
