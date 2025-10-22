import React, { useState, useEffect } from "react";


/**
 * 4秒毎に画像が切り替わるスライドショーを表示するコンポーネント
 * "/src/assets/images/slideShow/"ディレクトリのファイルを表示する
 * 
 * @returns スライドショーを表示する
 */
export default function SlideShow() {
  // 現在の画像の番号を定義する
  const [currentIndex, setCurrentIndex] = useState(0);

  // Viteの機能: 特定フォルダ内の画像をまとめて取得
  const images = import.meta.glob("/src/assets/images/slideShow/*.{jpg,png,svg}", { eager: true, import: "default" });

  // 画像を配列に変換する
  const imageArray = Object.values(images);

  // 時間の経過で画像を切替える
  useEffect(() => {
    // 4秒ごとに実行する
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageArray.length);
      // %imageArray.lengthで最初に戻る
    }, 4000);

    // コンポーネントが画面から消えるときにスライドショーが停止するようにする
    return () => clearInterval(interval);
  }, [imageArray.length]);

  // 画面に表示される部分
  return (
    <div
      id="slideShow"
      style={{
        position: "relative",
        width: "100%",
        height: "640px",
        borderRadius: "16px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${imageArray[currentIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* ロゴ */}
      <img
        src="/src/assets/images/parts/logo.svg"
        alt="logo"
        className="logo"
        style={{
          position: "absolute",
          bottom: "32px",
          right: "32px",
          width: "33%",
        }}
      />
    </div>
  );
}
