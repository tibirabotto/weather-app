interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}
const Input = (props: InputProps) => {
  const { ...rest } = props;
  return (
    <input
      type="text"
      name="element"
      className="w-362 h-78 bg-white rounded-full px-10 py-4 text-gray-600 text-2xl font-normal outline-none"
      placeholder="Search"
      {...rest}
    />
  );
};

export default Input;
