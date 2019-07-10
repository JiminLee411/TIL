# HTML & CSS

## HTML

`HTML` Hyper Text Markup Language의 약자로 웹 문서를 구조화 하는데 사용되는 언어이다. 

 `내용(content)` 와 `구조(structure)`을 담당.

```
HT - Hper Text, 문서와 문서가 링크로 연결되어 있다.
M - Markup, 태그로 이루어져 있다.
L - Language
```



1. HTML 태그의 형식

   ```
   <태그명 속성명1="속성값1"속성명2="속성값2">정보</태그명>
   ```

   * 태그(Element, 요소) : 컨텐츠를 감싸서 그 정보의 성격과 의미를 정의한다.
   * 속성(Attribute) : 태그의 부가적인 정보가 들어온다.

2. HTML 문서의 구조

   * HTML 문서는 파일의 확장자가 html 혹은 htm으로 끝난다.
   * 최상위 태그로 `<html>`을 사용한다. 그 하위에 `<html>` 태그와 `<body>` 태그를 컨텐츠로 가지고 있다.
   * `<head>` 태그는 문서를 설명하는 태그로 제목이나 키워드와 같은 정보를 담는다.
   * `<body>` 태그에는 문서의 내용이 위치한다.

   ```html
   <!DOCTYPE html>
   <html>
       <head>
           <meta charset ="utf-8">
           <title>웹페이지의 제목</title>
       </head>
       <body>
       </body>
   </html>
   ```

3. 여러가지 HTML 태그

   1. 기본적으로 태그는 `여는태그`와 `닫는태그` 로 구성된다.

      ```html
      <h1>제목1</h1>
      ```

   2.  `닫는태그` 가 없는 경우도 있다. (self-closing tag)

      ```html
      <img src="__"/>
      ```

   ```
   html - html 문서의 가장 상위 태그
   head - 문서의 정보(설명)를 담고 있는 헤드 태그
   title - 문서의 제목을 나태내는 타이틀 태그
   body - 문서의 본문(내용)을 담는 바디 태그
   link - 문서에 필요한 다른 파일을 가져올 때 사용하는 링크 태그 (필수속성:href)
   ```

   * `<html>및 <head>` 

     ```html
     <!DOCTYPE html>
     <html lang="ko">
         <head>
             <meta charset ="utf-8">
             <title>첫번째 HTML</title>
             <style>
                 h1 {
                     color : brown;
                     text-align: center;
                 }
                 p {
                     color : cornflowerblue;
                     text-align: right;
                 }
                 /* 클래스선택자 */
                 .green {
                     color : green;
                 }
                 /* 아이디선택자 */
                 #pink {
                     color : palevioletred;
                 }
                 /* 태크선택자 */
                 h2 {
                     color : black;
                 }
                 /* 우선순위
                 id > class > 태그
                 id는 문서에서 하나만 존재할 수 있다.
                 class는 문서에서 여러개 존재할 수 있다.
                 태그는 그냥 기본이다. 
                 */
             </style>
         </head>
         <body>
         </body>
     </html>
     ```

   * `<body>`

     ```html
     <body>
             <h1>Happy, Hacking!</h1>
             <h2 id="pink" class="red">안녕하세요.</h2>
             <h6>가장 작은 제목(heading)입니다.</h6>
             <P>내용내용. <br> 문단의 내용을 작성합니다.</P>
             <p class="green">나는 초록색이고 싶어요.</p>
             </style>
             <!-- a 태그는 href 속성으로 해당하는 링크를 설정한다. -->
             <a href="https://google.com">구글로 가자!</a>
             <br> 
             <!-- img 태그는 닫는 태그가 없다.
                 src 속성값은 이미지의 경로이다. 
             -->
             <img width="150" height="160"src="__이미지 주소__">
             <br>
             <iframe __동영상 주소__ ></iframe> -> 주소 붙여넣기하면 iframe부터 저절로 생성
         </body>
     ```

4. 태그의 구성

   ```html
   <img src="___" width="300" height="300" class="img-blue"/>
   <a href="https://google.com" class="blue">구글</a>
   ```

   * 태그별로 공통적으로 가질 수 있는 속성 : `id`, `class`, `style`
   * 각 태그별로 가질 수 있는 속성이 추가적으로 있다.
     * img - `src`, `width`, `height`
     * a-`href`

## css

css는 Cascading Style Sheets의 약자로, HTML을 꾸며주는 역할을 한다.

HTML을 꾸며주기 위하여, `선택자(selector)` 를 통해 특정한 element를 지정하여야 한다.

1. 선택자

   * 태그 선택자

     ```css
     p {
         color: red;
     }
     ```

     

   * class 선택자

     ```css
     .blue {
         color: blue;
     }
     ```

     

   * id 선택자

     ```css
     #pink {
         color: pink;
     }
     ```

   선택자 우선순위는 id선택자 > class선택자 > 태그선택자 순서로 적용된다.



## Flask

`Flask` 는 파이썬 기반의 micro framework 이다.



### 기본 활용법

1. 설치

   ```bash
   $ pip install flask
   ```

2. 기본 코드

   ```python
   from flask import Flask
   
   app = Flask(__name__)
   
   @app.route('/')
   def hello():
       return 'Hello'
   
   if __name__ == '__main__':
       app.run(debug=True)
   ```

3. 서버 실행

   ```bash
   $ flask run
   ```

   * 기본적으로 `flask run` 명령어는 `app.py` 파일을 실행시킨다. 만약 다른 파일명으로 만들었다면, 옵셩을 추가해야한다.
   * 마지막 두 줄을 작성해 놓았다면, 아래와 같이 실행도 가능하다.

   ```bash
   $ python app.py
   ```



## Variable routing

요청 오는 url을 변수화 하여 값을 사용할 수 있다.

```python
@app.route('/hi/<string:name>')
def hi(name):
    return f'{name}아 안녕?'
```



## Rendering Template

`HTML` 파일을 만들어 활용할 수 있다. 기본적으로 `templates` 폴더에 파일을 만들어야 한다.

```
app.py
templates/
	hi.html
	lunch.html
	index.html
```

```python
from flask import Flask, render_template
# ...
@app.route('/hi')
def hi():
    return render_template('hi.html')
```

`HTML` 파일에서 변수의 값을 출력하고자 한다면, 키워드 인자로 그 값을 넘겨줘야한다.

```python
return render_template('hi.html', name=name)
```

그리고 출력을 위해서는 `{{ }}` 사용한다.

```jinja2
<h1>{{name}} 안녕?</h1>
```



