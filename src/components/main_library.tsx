import ProfileIcon from "@assets/icons/profile_icon";
import Btn from "./btn";
import BodyLayout from "./layout/body_layout";

export default function MainLibrary() {
  return (
    <BodyLayout>
      <div className="py-6">
        <div className="mb-4 flex justify-between">
          <div className="flex items-center space-x-2">
            <ProfileIcon/>
            <span className="text-gray-900 font-bold text-xl">
              로그인 후 이용할 수 있어요
            </span>
          </div>
          <div className="flex items-end text-gray-500 text-sm font-medium">
            0권
          </div>
        </div>
        <div className="popup_box">
          <div className="flex flex-col space-y-4 items-center">
            <div className="main_library_popup_image w-[218px] h-[120px]" />
            <div className="flex flex-col space-y-2 items-center">
              <span className="text-gray-900 font-medium">
                읽고있는 책이 없어요
              </span>
            </div>
            <Btn text="독서 하러가기 >" color="point" />
          </div>
        </div>
      </div>
    </BodyLayout>
  );
}
