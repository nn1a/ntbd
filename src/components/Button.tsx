export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  const mode = primary
    ? 'font-sans font-bold text-white bg-[#1ea7fd] border-0 rounded-full cursor-pointer inline-block leading-none'
    : 'font-sans font-bold text-[#333] bg-transparent border-0 rounded-full cursor-pointer inline-block leading-none shadow-inner shadow-[rgba(0,0,0,0.15)]';
  const sizeCss =
    {
      small: 'text-xs px-4 py-2',
      medium: 'text-sm px-5 py-3',
      large: 'text-base px-6 py-3',
    }[size] || '';

  return (
    <button className={`${sizeCss} ${mode} `} style={{ backgroundColor }} type="button" {...props}>
      {label}
    </button>
  );
};
