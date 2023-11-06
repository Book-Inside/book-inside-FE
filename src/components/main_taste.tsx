import AddBtnIcon from "@assets/icons/add_btn_icon";
import ArrowRight from "@assets/icons/arrow_right";
import MainTitle from "./main_title";

export default function MainTaste() {
  return (
    <div className="p-6">
      <MainTitle
        leftText="내 취향 책 추천"
        rightIcon={<ArrowRight />}
        rightText="설정하기"
      />
      <div className="text-gray-700 -mt-2 mb-6">
        채소그로가 취향에 맞는 책을 추천해드릴게요
      </div>
      <div>
        <div className="w-[140px] h-[216px] shadow-app_bar flex items-center justify-center">
          <AddBtnIcon />
        </div>
      </div>
    </div>
  );
}
