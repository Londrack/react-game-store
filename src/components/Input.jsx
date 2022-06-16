export default function Input({
    id,
    name,
    placeholder,
    type = 'text',
    addClassInput = '',
    addClassLabel = '',
    value = '',
    edit = true,
    required = true
}) {
  const inputClasses = 'mb-5 mt-1 py-1 px-2 h-8';
  return (
    <>
        <label
          className={`${addClassLabel} text-grey-400 font-sm mb-1`}
          htmlFor={id}
        >{name}</label>
        { edit
            ? <input
                className={`input ${addClassInput} ${inputClasses}
                bg-grey-200 border-0 radius-sm font-md text-white`}
                type={type}
                name={id}
                placeholder={placeholder}
                required={required}
                defaultValue={value}
              />
            : <p className={`show-value ${inputClasses}`}>{value}</p>
        }
    </>
  )
}
