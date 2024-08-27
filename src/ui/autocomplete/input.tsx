import { useAutocomplete } from "./context.ts";
import { ChangeEvent, type ReactNode } from "react";

export function Input() {
  const {
    inputValue,
    setInputValue,
    setShowOptions,
    options,
    setFilteredOptions,
    onChange,
  } = useAutocomplete();

  function handleInputChange({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setInputValue(value);
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredOptions(filteredOptions);
    if (!filteredOptions.length) {
      onChange(value);
    }
  }

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onFocus={() => setShowOptions(true)}
      className="border p-2 w-full rounded-md"
      placeholder="Start typing..."
    />
  );
}

export function Label({ children }: { children: ReactNode }) {
  const { inputId } = useAutocomplete();

  return (
    <label htmlFor={inputId} className="block mb-1 text-sm font-medium">
      {children}
    </label>
  );
}
