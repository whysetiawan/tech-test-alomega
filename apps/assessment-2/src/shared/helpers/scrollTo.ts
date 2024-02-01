export function scrollTo(target: string) {
  if (!document) {
    return () => {};
  }
  const element = document.getElementById(target);
  const elementPosition = element?.getBoundingClientRect().top;

  return (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const headerOffset = 0;
    const offsetPosition = elementPosition ?? 0 + window.scrollY - headerOffset;
    e.preventDefault();
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
}
