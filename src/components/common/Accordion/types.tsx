export interface AccordionProps {
  deleteEndPointHandler: any;
  toggleAccordionHandler: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number
  ) => void;
  index: number;
  isOpen: boolean;
  children?: any;
  title?: string;
  description?: any;

  endpoint: any;
}
