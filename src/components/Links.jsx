import { BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
function Links({
  Key,
  FontSize = "xl",
  Url,
  Title,
  Hover = "primary.orange",
  Color = "white",
}) {
  return (
    <BreadcrumbItem key={Key} margin="0 10px">
      <BreadcrumbLink
        fontSize={FontSize}
        fontWeight={"300"}
        letterSpacing="2px"
        color={Color}
        _hover={{ color: `${Hover}` }}
        href={Url}
      >
        {Title}
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}

export default Links;
