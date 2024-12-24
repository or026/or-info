const questions = {
    beginner: [
        { title: `センチメートルをメートルに変換`, question: `変数 centimetre に、センチ単位の長さが入っています。それをメートルに変換して表示してください。`, output: `124 cmは、 1.24 mです。`, func: ``, code: `centimetre ← 124\nmetre ← ******\ncentimetre と "cmは、" と metre と "mです。" を表示する`, hint: `a / b を用いると、aをbで割った数が計算できます。` },
        { title: `合格？不合格？`, question: `変数 score にテストの点数が入っている。このテストの点数が80点以上なら合格、それ以外なら不合格を表示してください。`, output: `79点なので不合格です。`, func: ``, code: `score ← 79\nもし ****** ならば\n    score と "点なので合格です。" を表示する\nを実行し,そうでなければ\n    score と "点なので不合格です。" を表示する\nを実行する`, hint: `a > b → a は b より大きい\na >= b → a は b 以上\na < b → a は b より小さい\na <= b → a は b 以下\na = b → a と b は等しい\na != b → a と b は等しくない` },
        { title: `偶数？奇数？`, question: `変数 kazu1 に入っている値が偶数か奇数かを判定してください。`, output: `kazu1は偶数です。`, func: ``, code: `kazu1 ← 16\n\nもし ****** = 0 ならば\n    "kazu1は偶数です" を表示する\nを実行し,そうでなければ\n    "kazu1は奇数です" を表示する\nを実行する`, hint: `偶数は、2で割ったあまりが0になると言い換えることができます。\n演算子 「%」を使うとあまりを出すことができます。例えば、「a % b」は「a を b で割ったあまり」が出てきます。` },
        { title: `「Hello, World!」を5回表示しよう`, question: `「Hello, World!」を5回表示してください。`, output: `Hello, World!\nHello, World!\nHello, World!\nHello, World!\nHello, World!`, func: ``, code: `i を 0 から *** まで 1 ずつ増やしながら,\n    "Hello, World!" を表示する\nを繰り返す`, hint: `i の値は繰り返しを行うたびに 1→2→3→... と1ずつ増えていく。1回目の値は i←0、2回目の値は i←1、...となるので、5回目の時は i の値がどうなっているかを考えよう。` },
        { title: `1から順番に加算する`, question: `1 + 2 + 3 + 4 + 5 の計算結果を、繰り返し（ループ）を使って計算してください。`, output: `15`, func: ``, code: `sum ← 0\ni を 1 から 5 まで 1 ずつ増やしながら,\n    sum ← ******\nを繰り返す\n    \nsum を表示する`, hint: `i は1から5までの値を順に取ります。繰り返しの中で sum に 現在の値 i を足すことで、合計を求めることができます。` },
        { title: `配列の要素を取得しよう`, question: `変数 Namae に入っている7つの都道府県の名前から「岩手県」を表示してください。`, output: `岩手県`, func: ``, code: `Namae ← {"北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県"}\nNamae[***] を表示する`, hint: `配列は0から始まる添字を使って、特定の要素を取得します。つまり、Namae[0]は「北海道」を取得します。` },
        { title: `配列の要素を全て表示しよう`, question: `変数 Namae に入っている7つの都道府県の名前を1行ずつすべて表示してください。`, output: `北海道\n青森県\n岩手県\n秋田県\n宮城県\n山形県\n福島県`, func: ``, code: `Namae ← {"北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県"}\ni を 0 から *** まで 1 ずつ増やしながら,\n    Namae[***] を表示する\nを繰り返す`, hint: `最後の添字はいくつでしょう。添字は0から始まります。` },
        { title: `配列の中の合計を求めよう`, question: `変数 Kazu の中に入っている数値をすべて合計した値を表示してください。`, output: `38`, func: ``, code: `Kazu ← {2, 2, 9, 8, 4, 7, 6}\nsum ← 0\ni を 0 から 6 まで 1 ずつ増やしながら,\n    sum ← ******\nを繰り返す\n    \nsum を表示する`, hint: `合計される値は、変数 sum に入ります。繰り返しで、配列 Kazu の要素を取り出して合計に加えます。` },
        { title: `文字列を繰り返して出力する関数`, question: `文字列と繰り返し回数を引数として受け取り、その文字列を指定された回数だけ繰り返した結果を返す関数 repeat(文字, 回数) を作成してください。`, output: `りんご\nりんご\nりんご\nりんご`, func: `repeat(文字, 回数) ...\n文字列と繰り返し回数を引数として受け取り、その文字列を指定された回数だけ繰り返した結果を返す。`, code: `関数 repeat(moji, kaisu)は\n    i を 0 から ****** まで 1 ずつ増やしながら,\n        *** を表示する\n    を繰り返す\nを実行する\n    \nfood ← "りんご"\nkai ← 4\nrepeat(***, ***)`, hint: `①繰り返し回数は引数 kaisu で指定されています。1回目のループ i←0、2回目のループ i←1、ということを考えてみてください。\n②表示したい文字列は引数 moji で指定されています。\n③関数を呼び出している側について、表示したい文字列は food 、繰り返したい回数は kai に代入されています。` },
        { title: `「Hello, World!」を5回表示しよう(2)`, question: `「Hello, World!」を5回表示してください。`, output: `Hello, World!\nHello, World!\nHello, World!\nHello, World!\nHello, World!`, func: ``, code: `i ← 0\ni <= ***  の間,\n    "Hello,World!" を表示する\n    i ← i + 1\nを繰り返す`, hint: `i の値は繰り返しを行うたびに 1→2→3→... と1ずつ増えていく。1回目の値は i←0、2回目の値は i←1、...となるので、5回目の時は i の値がどうなっているかを考えよう。\nまた、i ← i+1 は、iの値に1を足した値をiに入れ直す、という処理なので、繰り返し中の処理を実行するたびに1増えることになる。` },
        { title: `正方形の面積を表示しよう`, question: `1辺が1cm〜5cmの正方形の面積を表示してください。`, output: `1 cmの正方形の面積は、 1 cm²です\n2 cmの正方形の面積は、 4 cm²です\n3 cmの正方形の面積は、 9 cm²です\n4 cmの正方形の面積は、 16 cm²です\n5 cmの正方形の面積は、 25 cm²です`, func: `square(長さ)...\n整数を1つ引数として受け取り、1辺が引数で指定した長さの正方形の面積を計算する。`, code: `関数 square(nagasa)は\n    nagasa * nagasa を返す\nを実行する\n\ni を 1 から 5 まで 1 ずつ増やしながら,\n    menseki ← square(***)\n    iと "cmの正方形の面積は、"と mensekiと "cm²です"を表示する\nを繰り返す`, hint: `1辺が3cmの正方形の面積を計算するためには、正方形(3) と指定する。iの値は、1→2→... と値が変わるので、この関数とiを使うことで実行することができる。` },
        { title: `サイコロを表示しよう`, question: `1〜6のランダムな数字が表示されるサイコロを作る。ただし、以下の関数を使うこと。`, output: `さいころの値は、 6 が出ました`, func: `random() … \n0以上1未満のランダムな数字を戻り値とする。\n\n切り捨て(数値) … \n引数に 数値 をとる。数値を切り捨てた値を戻り値とする関数。`, code: `関数 random()は\n    実数乱数(0,1) を返す\nを実行する\n\nsaikoro ← *********\n"さいころの値は、" と saikoro と "が出ました" を表示する`, hint: `① 空欄に、random() にしてみてください。どんな値が出ますか？\n② random() * 6 にすると、最小値と最大値はどうなるでしょうか。\n③ ②の値を切り捨てると、最小値と最大値はどうなるでしょうか。また、最小値1、最大値6にするためにはどうすればよいでしょうか。` },
        { title: `配列の要素を全て表示しよう(2)`, question: `変数 Namae に入っている7つの都道府県の名前を1行ずつすべて表示してください。ただし、関数「要素数」を必ず使うこと。`, output: `北海道\n青森県\n岩手県\n秋田県\n宮城県\n山形県\n福島県`, func: `要素数(配列名)...\n引数に 配列 をとる。その配列の中にある要素数を戻り値とする関数。`, code: `Namae ← {"北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県"}\ni を 0 から ****** まで 1 ずつ増やしながら,\n    Namae[***] を表示する\nを繰り返す`, hint: `要素数(Hairetsu) はこの場合7が戻り値です。では、最後の添字は6ですが、要素数(Hairetsu) が7なので、1引くと...?` },
        { title: `配列の最大の値は？`, question: `変数 Hairetsu には、いくつか数値が入っている。この中で一番最大の値を出力できるようにしてください。`, output: `変数Hairetsuの要素の中で最大値は 89 です。`, func: ``, code: `Hairetsu ← {45, 69, 48, 9, 32, 89, 4}\nmax ← -999\ni を 0 から 要素数(Hairetsu) - 1 まで 1 ずつ増やしながら,\n    もし ****** ならば\n        max ← Hairetsu[i]\n    を実行する\nを繰り返す\n    \n"変数Hairetsuの要素の中で最大値は" と max と "です。" を表示する`, hint: `max に配列の要素の中で最大値を順番に更新していく処理をします。\n比較するための条件は「現在の要素 Hairetsu[i] が、これまでに見つかった最大値 max より大きい場合」です。` },
    ],
    intermediate: [
    ],
    advanced: [

    ]
};