import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SlideShow from "./components/SlideShow";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="flex">
        <img src="assets/images/parts/logo.svg" className="hover" alt="logo" />

        <nav>
          <a href="">ORIGINAL</a>
          <a href="">FAN ART</a>
          <a href="">COMMISSION</a>
        </nav>
      </header>

      <nav id="toTop">
        <img src="assets/images/parts/TOP.svg" alt="to top" />
      </nav>

      <section id="firstView">
        <div id="sns">
          <h2>SNS LINKS:</h2>
          <div className="snsLinks">
            <a href="https://bsky.app/profile/zaiillust.bsky.social" target="_blank" className="snsLink hover"></a>
            {/* 他のSNSリンクもここに */}
          </div>
        </div>

      <SlideShow />
      </section>

      <main>
        <h2>GALLERY</h2>

        <section id="original" className="gallery">
          <div className="container">
            <div className="descliption">
              <h3>一次創作</h3>
              <p>
                手癖で描いてます。服を考えるのが好きです。<br />
                うちよそもやってます。
              </p>
            </div>

            <img src="assets/images/original/2025-09-29-1.jpg" className="eyechatch" alt="eyechatch" />
          </div>

          <div className="illusts">
            {Array.from({ length: 10 }).map((_, i) => (
              <img key={i} src="" className="square hover" alt={`illust-${i}`} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App
