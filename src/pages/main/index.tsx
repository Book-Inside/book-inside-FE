import Header from "@components/header";
import ParagraphLayout from "@components/layout/paragraph_layout";
import MainCase from "@components/main_case";
import MainLibrary from "@components/main_library";
import MainList from "@components/main_list";
import MainTaste from "@components/main_taste";

export default function MainPage() {
  return (
    <>
      <Header />
      <MainLibrary />
      <ParagraphLayout />
      <MainList />
      <ParagraphLayout />
      <MainCase />
      <ParagraphLayout />
      <MainTaste />
    </>
  );
}
