import React, { useState, useEffect } from "react";

export default function ThumbnailGrid() {
  // 画像の数を制御する
  const [currentIndex, setCurrentIndex] = useState(0);

  // Viteの機能: 特定フォルダ内の画像をまとめて取得
  const images = import.meta.glob("/src/assets/images/original/*.{jpg,png,svg}", { eager: true, import: "default" });

  // 画像を配列に変換する
  const imageArray = Object.values(images);
  
  return (
    <div className="illusts">
      {Array.from({ length: 10 }).map((_, i) => (
        <img
          key={i}
          src=""
          className="square hover"
          alt={`illust-${i}`}
        />
      ))}
    </div>
  );
}