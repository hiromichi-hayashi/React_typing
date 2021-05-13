# 英単語タイピングゲーム(web版)

制限時間１分の英単語タイピングゲーム

入力が正なら緑、誤なら赤を表示

時間経過後、入力結果をモーダルで表示、Twitter結果を投稿できる

[React_typing URL](https://chatbot-demo-d5a78.web.app/).

## 使用機能

React/Material-UI/react-share

### `TextBox.jsx`
```
    const QuestionText = useCallback(() => {
        let word = "";
        word = dictionary[randomcount(2000)];
        let text = word.letter.slice(0);
        setExplantion(word);
        setQuestion(text);
    }, []);
```
dictionary.jsからデータを受け取り、stateに格納

```
<Text color='green' text={question.slice(0, corectType)} />
    {isMisstype ? (
        <Text color={"red"} text={question.slice(corectType)} />
    ) : (
        <Text color="gray" text={question.slice(corectType, question.length)} />
    )}
```
入力されたkeyを三項演算子を用いて判定

### `AlertDialog.jsx`

```
<TwitterShareButton
    url="https://chatbot-demo-d5a78.web.app"
    title={`あなたのタイピング結果\n\n総タイピング:${props.typeCount}回\nミスタイピング: ${props.missCount}回\n正タイピング${props.typeCount - props.missCount}回\n`}
>
    <Button
        color="primary"
        size="small"
    >
        <TwitterIcon size={32} round />
        シェアする
    </Button>
</TwitterShareButton>
```
Twitterアイコンボタンでシェアボタンを作成

クリックでTwitterに移動
## 参考資料・教材

[typeee](https://qiita.com/shinhiro/items/47ea79132443347198a2)