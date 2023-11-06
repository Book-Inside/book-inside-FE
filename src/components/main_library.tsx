import ProfileIcon from "@assets/icons/profile_icon";
import Btn from "./btn";
import BodyLayout from "./layout/body_layout";
import MainTitle from "./main_title";

export default function MainLibrary() {
  return (
    <BodyLayout>
      <div className="py-6">
        <MainTitle
          leftText="로그인 후 이용할 수 있어요"
          count={0}
          leftIcon={<ProfileIcon />}
        />
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
