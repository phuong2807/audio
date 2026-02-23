export interface AudioItem {
  id: number;
  title: string;
  src: string;
  description: string;
  background: string;
}

export const audioList: AudioItem[] = [
  {
    id: 1,
    title: "Lời giới thiệu",
    src: "/audios/loi-gioi-thieu.mp3",
    description: "Giới thiệu tổng quan về di tích.",
    background: "/images/bg1.jpg",
  },
  {
    id: 2,
    title: "Tên gọi và lịch sử",
    src: "/audios/ten-goi-va-lich-su.mp3",
    description: "Giới thiệu về tên gọi và quá trình hình thành.",
    background: "/images/bg2.jpg",
  },
  {
    id: 3,
    title: "Khánh đồng Trấn Vũ",
    src: "/audios/khanh-dong-tran-vu.mp3",
    description: "Thông tin về khánh đồng nổi tiếng.",
    background: "/images/bg3.jpg",
  },
  {
    id: 4,
    title: "Tượng Huyền Thiên Trấn Vũ",
    src: "/audios/tuong-huyen-thien-tran-vu.mp3",
    description: "Giới thiệu về tượng Huyền Thiên.",
    background: "/images/home-bg.jpg",
  },
];