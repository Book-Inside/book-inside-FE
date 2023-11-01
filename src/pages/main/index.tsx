import Header from "@components/header";
import BodyLayout from "@components/layout/body_layout";
import MainTitleLayout from "@components/layout/main_title_layout";
import SubTitleLayout from "@components/layout/sub_title_layout";
import MainTitle from "@components/main_title";
import ProgressBar from "@components/progress_bar";
import SubTitle from "@components/sub_title";

export default function MainPage() {
  return (
    <>
      <Header />
      <BodyLayout>
        <MainTitleLayout>
          <MainTitle />
        </MainTitleLayout>
        <SubTitleLayout>
          <SubTitle />
        </SubTitleLayout>
        <ProgressBar progress={50} />
      </BodyLayout>
    </>
  );
}
