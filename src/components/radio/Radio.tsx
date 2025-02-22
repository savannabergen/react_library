import React from 'react';

interface RadioProps {
label: string;
checked: boolean;
onChange: (checked: boolean) => void;
}

const Radio: React.FC<RadioProps> = ({
label,
checked,
onChange,
}) => {
return (
<div>
<input
type="radio"
checked={checked}
onChange={(e) => onChange(e.target.checked)}
/>
<span>{label}</span>
</div>
);
};

export default Radio;
