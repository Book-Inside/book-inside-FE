import Header from "@components/header";
import BodyLayout from "@components/layout/body_layout";
import MainTitleLayout from "@components/layout/main_title_layout";
import MainTitle from "@components/main_title";

export default function MainPage() {
  return (
    <>
      <Header />
      <BodyLayout>
        <MainTitleLayout>
          <MainTitle />
        </MainTitleLayout>
      </BodyLayout>
    </>
  );
}
