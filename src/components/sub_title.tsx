import ArrowRight from "@assets/icons/arrow_right";

export default function SubTitle() {
  return (
    <div className="sub_title_box">
      <span>책 목록</span>
      <div className="sub_title_all">
        <span className="text-base font-normal">전체보기</span>
        <ArrowRight />
      </div>
    </div>
  );
}
