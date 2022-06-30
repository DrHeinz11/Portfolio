import { Breadcrumb } from "@chakra-ui/react";
import Links from "../../../components/Links";
import data from "../../../constant/NAV.JS";

function LinkList() {
  return (
    <Breadcrumb>
      {data?.map((e, index) => {
        return (
          <Links
            key={index}
            Url={e.Url}
            Title={e.Title}
            Hover={e.Hover}
            Color={e.Color}
          />
        );
      })}
    </Breadcrumb>
  );
}

export default LinkList;
