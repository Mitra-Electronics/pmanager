interface FieldProps {
    label: string,
    type: string,
    placeholder: string,
    ref_form: React.MutableRefObject<any>,
    value?: string | null
}

const PeopleFormField = ({ label, type, placeholder, ref_form, value}: FieldProps) => {
    return (
        <div>
            <label className="label">
                <span className="text-lg label-text">{label}</span>
            </label>
            <input defaultValue={value ? value : ""} ref={ref_form} type={type} placeholder={placeholder} className="input input-bordered input-primary w-full max-w-xs lg:max-w-full" />
        </div>
    )
}

export default PeopleFormField