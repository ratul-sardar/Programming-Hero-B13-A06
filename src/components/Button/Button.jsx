export default function Button({ bg, linear, children }) {
  return (
    <>
      <a
        href="#"
        className={`${bg && linear ? "bg-main-linear text-white" : bg && !linear ? "bg-white text-purple" : !bg && !linear ? "border border-purple text-purple" : ""}  rounded-full px-4 py-3  font-semibold text-[1rem] space-x-2.51 hover:scale-98 hover:shadow-xs hover:shadow-purple`}
      >
        {children}
      </a>
    </>
  );
}
