export default function Button({
  bg,
  linear,
  children,
  ctaLink,
  borderWhite,
  fullw,
}) {
  return (
    <>
      <a
        href={ctaLink}
        className={`${bg && linear ? "bg-main-linear text-white" : bg && !linear ? "bg-white text-purple" : !bg && !linear ? (borderWhite ? "border border-white  text-white hover:bg-white hover:text-purple " : "border border-purple text-purple hover:bg-purple hover:text-white") : ""}  rounded-full px-4 py-3  font-semibold text-[1rem] w-fit flex items-center justify-center gap-3 hover:scale-98 hover:shadow-xs hover:shadow-purple duration-100 ease-in ${fullw ? "w-full" : ""} `}
      >
        {children}
      </a>
    </>
  );
}
