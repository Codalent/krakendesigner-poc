function classNames(...classes: (string | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default classNames;
