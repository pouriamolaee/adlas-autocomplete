import { createContext, useContext } from "react";

type AutocompleteContextType = {
  inputValue: string;
  showOptions: boolean;
  setInputValue: (value: string) => void;
  setShowOptions: (showOptions: boolean) => void;
  options: string[];
  filteredOptions: string[];
  setFilteredOptions: (filteredOptions: string[]) => void;
  onChange: (value: string) => void;
  inputId: string;
};

export const AutocompleteContext = createContext<AutocompleteContextType>({
  inputValue: "",
  setInputValue: () => {},
  showOptions: false,
  setShowOptions: () => {},
  options: [],
  filteredOptions: [],
  setFilteredOptions: () => {},
  onChange: () => {},
  inputId: "",
});

export function useAutocomplete() {
  return useContext(AutocompleteContext);
}
