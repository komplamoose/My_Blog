import { atom } from "jotai";

const metaData = {
  title: "나 사나이 강보석",
  description: "강보석 블로그",
  author: "Komplamoose",
};

interface CustomMetaType {
  title: string;
  description: string;
  date: string;
}

export const customMetaAtom = atom({
  title: "나 사나이 강보석",
  description: "강보석 블로그",
  date: "",
});

export default metaData;
