import ProfileIcon from "@assets/icons/profile_icon";

export default function MainTitle() {
  return (
    <div className="main_title_box">
      <div className="main_title_profile_text">
        <ProfileIcon />
        <span className="text-xl">로그인 후 이용할 수 있어요</span>
      </div>
      <div className="font-normal text-sm text-gray-500 absolute bottom-0 right-0">
        0권
      </div>
    </div>
  );
}
