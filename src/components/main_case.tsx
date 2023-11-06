import AddBtnIcon from "@assets/icons/add_btn_icon";
import ArrowRight from "@assets/icons/arrow_right";
import MainTitle from "./main_title";

export default function MainCase() {
  return (
    <div className="p-6">
      <MainTitle
        leftText="내 책장"
        rightIcon={<ArrowRight />}
        rightText="전체보기"
      />
      <div>
        <div className="w-[140px] h-[216px] shadow-app_bar flex items-center justify-center">
          <AddBtnIcon />
        </div>
      </div>
    </div>
  );
}
