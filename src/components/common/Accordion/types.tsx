export interface AccordionProps {
  toggleAccordionHandler: (index: number) => void;
  index: number;
  isOpen: boolean;
  children?: any;
  title?: string;
  description?: any;
}
