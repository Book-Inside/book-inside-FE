import AddBtnIcon from "@assets/icons/add_btn_icon";
import ArrowRight from "@assets/icons/arrow_right";

export default function MainTaste() {
  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <span className="text-gray-900 font-bold text-lg">내 취향 책 추천</span>
        <div className="flex items-center space-x-1">
          <span className="text-gray-700 font-medium">설정하기</span>
          <ArrowRight />
        </div>
      </div>
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
