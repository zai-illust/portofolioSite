import React, { useState, useEffect } from "react";
import styled from "styled-components";

// スライドショーのラッパー
const SlideShowWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 640px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
`;

// ロゴのスタイル
const Logo = styled.img`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 33%;
`;

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
    <SlideShowWrapper style={{ backgroundImage: `url(${imageArray[currentIndex]})` }}>
      <Logo src="/src/assets/images/parts/logo.svg" alt="logo" />
    </SlideShowWrapper>
  );
}
