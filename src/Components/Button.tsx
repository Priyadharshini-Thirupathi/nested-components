type ButtonProps = {
  type: string;
  label: string;
  onClick: VoidFunction;
};
export default function Button({ type, onClick, label }: ButtonProps) {
  return (
    <>
      <button className={`${type}--btn`} onClick={onClick}>
        {label}
      </button>
    </>
  );
}
