type DropdownProps = {
options: { label: string; value: string }[];
value: string;
onChange: (value: string) => void;
};

export default DropdownProps;