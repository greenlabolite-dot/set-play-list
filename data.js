/*
  ===========================================================
   セットプレー一覧 - データファイル
  ===========================================================
  新しいパターンを追加したいときは、このファイルだけ編集すれば
  自動的にサイトに反映されます（index.html は変更不要です）。

  【追加の手順】
  1. 図解画像を assets/img/ フォルダに入れる（jpg / png）
  2. 動画があれば assets/video/ フォルダに入れる（mp4）
  3. 下の該当カテゴリ（kickin / corner / clearance / freekick）の
     配列に、以下の形式で1件追加する

     {
       name: "パターン名（例: 横3）",
       tag: "①シリーズ など（無ければ空文字 "" でOK）",
       image: "assets/img/ファイル名.jpg",
       videos: ["assets/video/ファイル名.mp4"],  // 動画がなければ [] でOK
       memo: [
         "メモ1行目",
         "メモ2行目"
       ]  // メモがなければ [] でOK
     }

  4. ファイルを保存し、index.html を開き直せば反映されます。
  ===========================================================
*/

const PLAYS = {

  kickin: [
    {
      name: "横1",
      tag: "①シリーズ",
      image: "assets/img/kickin-yoko1.jpg",
      videos: [
        "assets/video/kickin-yoko1-1.mp4",
        "assets/video/kickin-yoko1-2.mp4",
        "assets/video/kickin-yoko1-3.mp4",
        "assets/video/kickin-yoko1-4.mp4"
      ],
      memo: [
        "全部ファー狙い。",
        "相手が人にタイトについているとき（一列目高く外撃ちが難しい時。）",
        "相手がゾーンorマンツーマンのとき、どっちにも使える。"
      ]
    },
    {
      name: "横2",
      tag: "②シリーズ",
      image: "assets/img/kickin-yoko2.jpg",
      videos: [
        "assets/video/kickin-yoko2-1.mp4",
        "assets/video/kickin-yoko2-2.mp4"
      ],
      memo: [
        "ブロック＆外撃ち＆コンテニュー狙い。",
        "相手がマンツーマンの場合、外撃ちを譲ってインサイド固めている場合。"
      ]
    },
    {
      name: "三角1",
      tag: "①シリーズ",
      image: "assets/img/kickin-sankaku1.jpg",
      videos: [
        "assets/video/kickin-sankaku1-1.mp4"
      ],
      memo: [
        "全部ファー狙い。",
        "相手が人にタイトについているとき（一列目高く外撃ちが難しい時。）",
        "相手がゾーンorマンツーマンのとき、どっちにも使える。"
      ]
    },
    {
      name: "三角2",
      tag: "②シリーズ",
      image: "assets/img/kickin-sankaku2.jpg",
      videos: [
        "assets/video/kickin-sankaku2-1.mp4",
        "assets/video/kickin-sankaku2-2.mp4"
      ],
      memo: [
        "ブロック＆外撃ち＆コンテニュー狙い。",
        "相手がマンツーマンの場合、外撃ちを譲ってインサイド固めている場合。"
      ]
    },
    {
      name: "縦1",
      tag: "①シリーズ",
      image: "assets/img/kickin-tate1.jpg",
      videos: [
        "assets/video/kickin-tate1-1.mp4"
      ],
      memo: [
        "全部ファー狙い。",
        "相手が人にタイトについているとき（一列目高く外撃ちが難しい時。）",
        "相手がゾーンorマンツーマンのとき、どっちにも使える。"
      ]
    },
    {
      name: "縦2",
      tag: "②シリーズ",
      image: "assets/img/kickin-tate2.jpg",
      videos: [
        "assets/video/kickin-tate2-1.mp4"
      ],
      memo: [
        "ブロック＆外撃ち＆コンテニュー狙い。",
        "相手がマンツーマンの場合、外撃ちを譲ってインサイド固めている場合。"
      ]
    }
  ],

  corner: [
    {
      name: "1-2",
      tag: "",
      image: "assets/img/corner-1-2.jpg",
      videos: ["assets/video/corner-1-2-1.mp4"],
      memo: []
    },
    {
      name: "1-3",
      tag: "",
      image: "assets/img/corner-1-3.jpg",
      videos: ["assets/video/corner-1-3-1.mp4"],
      memo: []
    },
    {
      name: "2-2",
      tag: "②シリーズ",
      image: "assets/img/corner-2-2.jpg",
      videos: [
        "assets/video/corner-2-2-1.mp4",
        "assets/video/corner-2-2-2.mp4",
        "assets/video/corner-2-2-3.mp4"
      ],
      memo: ["ニアカーテン、ニア外狙い。空いたらインサイド。"]
    },
    {
      name: "2-3",
      tag: "③シリーズ",
      image: "assets/img/corner-2-3.jpg",
      videos: ["assets/video/corner-2-3-1.mp4"],
      memo: ["インサイドこじあけ狙い。外撃ちでなかなか入らない時用。"]
    },
    {
      name: "3-2",
      tag: "",
      image: "assets/img/corner-3-2.jpg",
      videos: [
        "assets/video/corner-3-2-1.mp4",
        "assets/video/corner-3-2-2.mp4",
        "assets/video/corner-3-2-3.mp4"
      ],
      memo: []
    },
    {
      name: "3-3",
      tag: "",
      image: "assets/img/corner-3-3.jpg",
      videos: ["assets/video/corner-3-3-1.mp4"],
      memo: []
    }
  ],

  clearance: [
    {
      name: "3-0 / 3-1",
      tag: "",
      image: "assets/img/clearance-3-1.jpg",
      videos: [
        "assets/video/clearance-3-1-1.mp4",
        "assets/video/clearance-3-1-2.mp4"
      ],
      memo: [
        "3-1のクリアランス。いずれもシンプルにピヴォに当てていくためのクリアランスです。3-1は特に後ろで回してても点取れるわけじゃないので、シンプルに相手一列にしてピヴォに当てていきましょう。",
        "【3-0】シンプルに3枚配置でスタート。",
        "【3-1】シンプルにピヴォに当てていきたい、自陣を脱出したいときに使う。",
        "【手上げ】なかなかピヴォが収められない時、ピヴォに対する圧力が強い時に使う。",
        "※ピヴォが奥でもらう気なのに、ゴレが手前に投げてしまうとめちゃくちゃピンチになるので、意思表現がはっきり。迷ったら奥でいいです！"
      ]
    },
    {
      name: "3-2",
      tag: "",
      image: "assets/img/clearance-3-2.jpg",
      videos: ["assets/video/clearance-3-2-1.mp4"],
      memo: [
        "フィクソのカットからのカーテン。",
        "フィクソはカーテンした後しっかり降りる。相手の3枚目を引きつける。",
        "右サイドの選手はしっかり裏を狙いにいく素振りを見せる。もっとも、相手が来ないなら変に高い位置を取りすぎずに適切な位置で受ける。これはクリアランスだからといって普段のプレーと変わらない。冷静に。",
        "右サイドにつけたらシンプルにパラレラに走っていい。早めにセンターレーンあけてシンプルにピヴォあてする。",
        "相手がマーク変えてきたら、間のピヴォに当てる。"
      ]
    },
    {
      name: "3-3",
      tag: "",
      image: "assets/img/clearance-3-3.jpg",
      videos: ["assets/video/clearance-3-3-1.mp4"],
      memo: [
        "右サイドの選手が旋回したあと、カーテンできる位置までしっかり降りる。",
        "場合によってはボランチっぽくピヴォあて。",
        "相手が降りる選手にしっかりついてきた場合や、左アラのマークが左サイドを切ってくる場合はシンプルに右サイドにずれていくフィクソを使う。"
      ]
    },
    {
      name: "4-0",
      tag: "",
      image: "assets/img/clearance-4-0.jpg",
      videos: ["assets/video/clearance-4-0-1.mp4"],
      memo: ["抜け切らないでしっかり下がる。"]
    }
  ],

  freekick: [
    // まだパターンがありません。追加するときはここに書きます。
  ]

};
