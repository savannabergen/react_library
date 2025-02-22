type DropdownProps = {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
};

export const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};