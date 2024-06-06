import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Button({
  children,
  type = 'primary',
  onClick,
  disabled,
  style,
}: {
  children: ReactNode;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  style?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer opacity-100',
        type === 'primary'
          ? 'bg-blue-500 hover:bg-blue-600 disabled:hover:bg-blue-500'
          : 'bg-slate-100 hover:bg-slate-200 disabled:hover:bg-slate-100',
        'w-full whitespace-nowrap rounded-lg px-6 py-2 text-white transition-colors md:w-auto',
        style,
      )}
    >
      {children}
    </button>
  );
}
