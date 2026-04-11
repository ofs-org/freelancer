import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const selectVariants = cva(
  'w-full bg-surface border transition-all duration-200 outline-none cursor-pointer appearance-none pr-10',
  {
    variants: {
      variant: {
        default:
          'border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/50',
        error:
          'border-error focus:border-error focus:ring-2 focus:ring-error/20',
        disabled:
          'border-outline-variant/30 opacity-50 cursor-not-allowed bg-surface-container',
      },
      radius: {
        default: 'roundedDEFAULT',
        sm: 'rounded',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      radius: 'default',
    },
  }
);

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  label?: string;
  error?: string;
  placeholder?: string;
  options: Array<{ value: string; label: string }>;
}

export function Select({
  className,
  variant,
  radius,
  label,
  error,
  placeholder,
  options,
  id,
  ...props
}: SelectProps) {
  const selectId = id || React.useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-on-surface mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            selectVariants({ variant, radius, className }),
            'px-8 py-5 text-on-surface appearance-none bg-[length:24px_24px] bg-[right_1rem_center] bg-no-repeat',
            "[background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5%22%20stroke%3D%22%23454934%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]"
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-on-surface"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="mt-1.5 text-sm text-error">{error}</p>}
    </div>
  );
}

export { selectVariants };
