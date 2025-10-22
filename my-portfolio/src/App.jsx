import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// components
import SlideShow from "./components/SlideShow";
import Header from "./components/Header";
import PageTopButton from "./components/PageTopButton";
import SNSLinkButton from "./components/SNSLinkButton";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <PageTopButton />

      <section id="firstView">
        <div id="sns">
          <h2>SNS LINKS:</h2>
          <div className="snsLinks">
            <SNSLinkButton />
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
