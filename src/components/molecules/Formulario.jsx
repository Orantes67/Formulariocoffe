import Input from "../atomos/Input";

function Formulario({ text, type, label, placeholder, value, onChange, checked }) {
  return (
    <div>
      <Input type={type} placeholder={placeholder} label={label} value={value} onChange={onChange} checked={checked} />
    </div>
  );
}

export default Formulario;
