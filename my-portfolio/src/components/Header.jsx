/**
 * ヘッダーを表示するコンポーネント
 * @returns ヘッダーを表示する
 */
export default function Header() {
  // 画面に表示される部分
  return (
    <header className="flex">
      <img
        src="/src/assets/images/parts/logo.svg"
        className="hover"
        alt="logo"
      />

      <nav>
        <a href="#original">ORIGINAL</a>
        <a href="#fanArt">FAN ART</a>
        <a href="commission">COMMISSION</a>
      </nav>
    </header>
  );
}