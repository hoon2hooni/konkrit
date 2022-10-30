import CollectionList from "@components/organisms/CollectionList";
import SectionLayout from "../molecules/SectionLayout";
import SectionTop from "../molecules/SectionTop";

function OpenseaTopCollections() {
  return (
    <SectionLayout>
      <SectionTop title={"많이 거래된 컬렉션"} showAll={"오픈씨 데이터 기준"} />
      <CollectionList />
    </SectionLayout>
  );
}

export default OpenseaTopCollections;
