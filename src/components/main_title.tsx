import ProfileIcon from "@assets/icons/profile_icon";

export default function MainTitle() {
  return (
    <div className="flex relative">
      <div className="flex items-center space-x-2">
        <ProfileIcon />
        <span className="text-xl">로그인 후 이용할 수 있어요</span>
      </div>
      <div className="font-normal text-sm text-gray-500 absolute bottom-0 right-0">
        0권
      </div>
    </div>
  );
}
