import Items from "@components/organisms/Items";
import SectionLayout from "../molecules/SectionLayout";
import SectionTop from "../molecules/SectionTop";

function ItemsOnSale() {
  return (
    <SectionLayout>
      <SectionTop title={"지금 판매중인 아이템"} showAll={"아이템 전체보기"} />
      <Items />
    </SectionLayout>
  );
}

export default ItemsOnSale;
