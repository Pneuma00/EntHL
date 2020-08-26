# EntHL
EntHL (Entry Highlighter) 는 엔트리 게시글을 위한 코드 하이라이팅 유저스크립트입니다.
엔트리 커뮤니티 게시글에서 아래 코드를 개발자 도구(Ctrl+Shift+J) 콘솔에 입력하면 실행됩니다.
```js
import('https://pneuma714.github.io/EntHL/enthl.min.js')
```

게시글 작성 시 다음 형태로 작성하면 EntHL 실행시 코드박스로 변환됩니다.
```
<code>
일반 텍스트
</code>
```
또는
```
<code/언어명>
// 해당 언어 코드
</code>
```

우측 상단의 원 모양 버튼을 누르면 코드박스의 테마가 바뀌고, 클립 버튼을 누르면 코드가 복사됩니다.
현재 지원하는 테마는 다음과 같습니다.
* Atom One Dark
* Atom One Light
* Solarized Dark
* Solarized Light