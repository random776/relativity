import { useState } from "react";
import { TextField } from "@mui/material";
import { MathComponent } from "mathjax-react";

function App() {
  // $1
  const [velocity, setVelocity] = useState<number>(0);
  const lightVelocity = 299792;
  const beta = velocity / lightVelocity;
  const gamma = 1 / Math.sqrt(1 - beta ** 2);

  // $2
  const [beta2, setBeta2] = useState<number>(0);
  const calculatedGamma = 1 / Math.sqrt(1 - beta2 ** 2);
  const [gamma2, setGamma2] = useState<number>(1);
  const calculatedBeta = Math.sqrt(gamma2 ** 2 - 1) / gamma2;

  // $3
  const [betaS, setBetaS] = useState<number>(0);
  const [betaSDash, setBetaSDash] = useState<number>(0);
  const betaSum = (betaS + betaSDash) / (1 + betaS * betaSDash);

  return (
    <>
      <h2>特殊相対論数値計算ツール</h2>
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
      <p>
        S'系のS系に対する速さ <span className={"power"}>{velocity}</span>{" "}
        m/sで、
      </p>
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

      <h3>3. 速度の合成則</h3>
      <p>
        S系から見てS'系で速さβで動いており、S'系から見てS''系が速さβ'で動いているとき、S系から見たS''系の速さは、
      </p>
      <p>
        <MathComponent
          display={false}
          tex={String.raw`\beta_{sum} = \frac{\beta + \beta '}{1 + \beta \beta '}`}
        ></MathComponent>
      </p>
      <p>と表すことができる。</p>
      <p>
        <TextField
          type="text"
          label="β(0〜1)の値を入力"
          onChange={(e) => {
            setBetaS(parseFloat(e.target.value));
          }}
        />
      </p>
      <p>
        <TextField
          type="text"
          label="β'(0〜1)の値を入力"
          onChange={(e) => {
            setBetaSDash(parseFloat(e.target.value));
          }}
        />
      </p>

      <p>
        <MathComponent
          display={false}
          tex={String.raw`\beta_{sum} = ${betaSum}`}
        ></MathComponent>
      </p>

      <p style={{ margin: 10 }}>
        {" "}
        ＊ このサイトの制作者「かっちゃん」へのお問い合わせは
        <a href="https://random776.github.io/kacchan_home" className="btn4">
          こちら
        </a>
        から。
      </p>
    </>
  );
}

export default App;
