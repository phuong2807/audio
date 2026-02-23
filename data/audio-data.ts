export interface AudioItem {
  id: number;
  title: string;
  src: string;
  description: string;
  background: string;
}

export const audioList: AudioItem[] = [
//   {
//     id: 1,
//     title: "Lời giới thiệu",
//     src: "/audios/loi-gioi-thieu.mp3",
//     description: "Giới thiệu tổng quan về di tích.",
//     background: "/images/bg1.jpg",
//   },
  {
    id: 2,
    title: "Miếu Ngọc Trục",
    src: "/audios/ten-goi-va-lich-su.mp3",
    description: "Miếu Ngọc Trục.",
    background: "/images/bg2.jpg",
  },
  {
    id: 3,
    title: "Đình Ngọc Trục",
    src: "/audios/khanh-dong-tran-vu.mp3",
    description: "Đình Ngọc Trục.",
    background: "/images/bg3.jpg",
  },
  {
    id: 4,
    title: "Quán Ngọc Trục",
    src: "/audios/tuong-huyen-thien-tran-vu.mp3",
    description: "Quán Ngọc Trục.",
    background: "/images/home-bg.jpg",
  },
];