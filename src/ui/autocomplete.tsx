type AutocompleteProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Autocomplete({ value, onChange }: AutocompleteProps) {
  return (
    <input
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    />
  );
}
