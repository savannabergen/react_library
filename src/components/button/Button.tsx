type ButtonProps = { children: string; disabled: boolean; };

export const Button = ({ children, disabled }: ButtonProps) => {
return (
<button disabled={disabled}>{children}</button>
);
};