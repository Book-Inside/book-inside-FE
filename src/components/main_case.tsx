import AddBtnIcon from "@assets/icons/add_btn_icon";
import ArrowRight from "@assets/icons/arrow_right";

export default function MainCase() {
  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <span className="text-gray-900 font-bold text-lg">내 책장</span>
        <div className="flex items-center space-x-1">
          <span className="text-gray-700 font-medium">전체보기</span>
          <ArrowRight />
        </div>
      </div>
      <div>
        <div className="w-[140px] h-[216px] shadow-app_bar flex items-center justify-center">
          <AddBtnIcon />
        </div>
      </div>
    </div>
  );
}
