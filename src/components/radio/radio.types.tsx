export type RadioProps = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

export type RadioInputProps = {
  checked: boolean;
  disabled?: boolean;
  onChange: (e: any) => void;
};
