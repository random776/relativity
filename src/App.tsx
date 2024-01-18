import { useState } from "react";
import { TextField } from "@mui/material";
import { MathComponent } from "mathjax-react";

function App() {
  const [velocity, setVelocity] = useState<number>(0);
  const lightVelocity = 299792;
  const beta = velocity / lightVelocity;
  const gamma = 1 / Math.sqrt(1 - beta ** 2);

  const [beta2, setBeta2] = useState<number>(0);
  const calculatedGamma = 1 / Math.sqrt(1 - beta2 ** 2);
  const [gamma2, setGamma2] = useState<number>(1);
  const calculatedBeta =  Math.sqrt(gamma2 ** 2 - 1) / gamma2;

  return (
    <>
      <h2>特殊相対論ツール</h2>
      <h3>1. ローレンツ変換</h3>
      <p>静止系Sに対して別の慣性系S'がx方向に速度vで動いているとき、</p>
      <p>
        <MathComponent
          display={false}
          tex={String.raw`x' = \gamma (x - \beta ct)`}
        ></MathComponent>
      </p>
      <p>
        <MathComponent
          display={false}
          tex={String.raw`ct' = \gamma (ct - \beta x)`}
        ></MathComponent>
      </p>
      <TextField
        type="text"
        label="速さ(m/s)を入力"
        onChange={(e) => {
          setVelocity(parseFloat(e.target.value));
        }}
      />
      <p>S'系のS系に対する速さ <span className={"power"}>{velocity}</span> m/sで、</p>
      <p>
        <MathComponent
          display={false}
          tex={String.raw`\beta = \frac{v}{c} = ${beta}`}
        ></MathComponent>
      </p>
      <p>
        <MathComponent
          display={false}
          tex={String.raw`\gamma = \frac{1}{\sqrt{1 - \beta^2}}= ${gamma}`}
        ></MathComponent>
      </p>

      <h3>2. βとγとの換算</h3>

      <p>(1) β→γ</p>

      <TextField
        type="text"
        label="β(0〜1)の値を入力"
        onChange={(e) => {
          setBeta2(parseFloat(e.target.value));
        }}
      />
      <p>
        <MathComponent
          display={false}
          tex={String.raw`\gamma = ${calculatedGamma}`}
        ></MathComponent>
      </p>

      <p>(2) γ→β</p>

      <TextField
        type="text"
        label="γ(1〜)の値を入力"
        onChange={(e) => {
          setGamma2(parseFloat(e.target.value));
        }}
      />
      <p>
        <MathComponent
          display={false}
          tex={String.raw`\beta = ${calculatedBeta}`}
        ></MathComponent>
      </p>

      <p style={{ margin: 10 }}>
        {" "}
        ＊ このサイトの制作者「かっちゃん」へのお問い合わせは
        <a
          href="https://random776.github.io/kacchan_home"
          className="btn4"
        >
          こちら
        </a>
        から。
      </p>
    </>
  );
}

export default App;
