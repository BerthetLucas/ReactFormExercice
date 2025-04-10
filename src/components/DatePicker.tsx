interface DatePickerProps {
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const DatePicker = ({
  label,
  value,
  onChange,
  name,
  placeholder = 'Sélectionner une date',
  disabled = false,
}: DatePickerProps) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      {label && (
        <label
          className={`text-sm ${
            disabled
              ? 'text-gray-400 dark:text-gray-500'
              : 'text-gray-700 dark:text-gray-300'
          }`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className={`w-4 h-4 ${
              disabled
                ? 'text-gray-400 dark:text-gray-500'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          type="date"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`border text-sm rounded-lg block w-full pl-10 p-2.5 
                    ${
                      disabled
                        ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    }`}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
