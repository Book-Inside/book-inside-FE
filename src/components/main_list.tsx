import ArrowRight from "@assets/icons/arrow_right";
import ReadingIcon from "@assets/icons/reading_icon";

export default function MainList() {
  return (
    <div className="p-6">
      <div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-900 font-bold text-lg">책 목록</span>
          <div className="flex items-center space-x-1">
            <span className="text-gray-700 font-medium">전체보기</span>
            <ArrowRight />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="shadow-dropdown flex items-center space-x-2 rounded-xl">
            <div className="pl-3">
             <ReadingIcon/>
            </div>
            <div className="py-3 pr-[37px]">
              <span>읽고 있는 책</span>
              <div className="text-gray-900">
                <span className="font-semibold text-lg">0</span>
                <span>권</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
