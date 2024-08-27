import Autocomplete from "./ui/autocomplete";

const options = [
  "Life is a lie 🤮",
  "Just go by 🫠",
  "You can even fly 🤠",
  "So Have no tie 🤗",
  "Look me in the eye 🤨",
];

export default function App() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Autocomplete onChange={console.log} options={options}>
        <Autocomplete.Input />
        <Autocomplete.Options>
          {(filteredOptions) =>
            filteredOptions.map((option) => (
              <Autocomplete.Option value={option} key={option} />
            ))
          }
        </Autocomplete.Options>
      </Autocomplete>
    </main>
  );
}
