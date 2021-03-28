import React from 'react'
import './Works.css'

interface WorkProps {
  title: string
  image: string
  children?: React.ReactNode
}

function Work(props: WorkProps) {
  return (
    <div className="work">
      <h3 className="workTitle">{props.title}</h3>
      <img className="workImage" src={props.image} />

      <div className="workDescription">
        {props.children}
      </div>
    </div>
  )
}

function Works() {
  return (
    <div className="Works">
      <h2>Works</h2>
      <div className="works">
        <Work
          title="[2019-] Uplight：全周囲ディスプレイを搭載した携帯型ゲーム機"
          image="https://i.imgur.com/2fsTLtv.png"
        >
          <p>
            立体物の死角を見に行くという操作を取り入れた、手に持って遊ぶゲーム機。
            スクリーンの形状変更を可能にするため、
            小型プロジェクタと魚眼レンズにより内側から映像を投影するオムニプロカム機構を使用。
          </p>
          <p>
            東京ゲームショウ2019
            インディーゲーム選考ブースの展示を経て
            センス・オブ・ワンダーナイト ファイナリストに採択され、
            Best Technological Game Awardを受賞。
          </p>

          <div className="workLinks">
            <a href="https://imedia-lab.net/iml-projects/uplight/" target="_blank">
              プロジェクト紹介ページ
            </a>
            <a href="https://expo.nikkeibp.co.jp/tgs/2019/sown/sensefinal.html" target="_blank">
              センス・オブ・ワンダーナイト2019
            </a>
          </div>

          <h4>貢献</h4>
          <p>
            ゲームコントローラ・スクリーン回転機構・スピーカなどの電装の設計実装
            （通信プログラム、モータ駆動プログラム、多チャンネルアンプ装置など）、
            Unityゲームと電装を繋ぐC#・MATLAB・Pythonミドルウェアの作成、
            CAD・3Dプリンタ・高出力レーザ加工機を使った加工、など
          </p>
        </Work>
      </div>
    </div>
  )
}

export default Works
