type BreadCrumbItemProp = {
  label: string;
  link: string;
};
export type BreadcrumbsProps = {
  items: BreadCrumbItemProp[];
  disabledItems: string[];
};
