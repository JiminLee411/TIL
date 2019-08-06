# Bootstrap 2

## Layout

### 1. [08_grid.html](C:\Users\student\Desktop\Jimin\web\bootstrap\08_grid.html)

* 배치를 파워풀하게 할 수 있다. -> 원하는대로 배치 가능

* Grid Option (Column의 합 : 12)

  ![](C:\Users\student\Desktop\Jimin\TIL\web\img\grid_option.PNG)

  1. grid 기본

     ```html
     <h2>컨테이너 밖</h2> 
     <div class="container">
       <h2>컨테이너 안</h2> <!-- container의 마진이 생긴다 -->
     </div>
     <div class="container-fluid"> <!-- 마진을 없애주고 패딩이 조금 있다. -->
       <h2>fluid 컨테이너</h2>
     </div>
     ```

     ![1565061725749](C:\Users\student\AppData\Roaming\Typora\typora-user-images\1565061725749.png)

     * 한 줄을 나뉘서 등분

       ```html
       <div class="container">
           <div class="row">
             <!-- 총 12칸을 3등분, 즉 4칸씩 할당한다. (div.col-4*3) -->
             <div class="col-4">
               <div class="bg-primary text-center text-white">1/3</div>
             </div>
             <div class="col-4">
               <div class="bg-primary text-center text-white">1/3</div>
             </div>
             <div class="col-4">
               <div class="bg-primary text-center text-white">1/3</div>
             </div>
           </div>
         </div>
       ```

       ![](C:\Users\student\Desktop\Jimin\TIL\web\img\grid_1_3.jpg)

     * 균등하지 않게 배치

       ```HTML
         <div class="container">
           <div class="row">
             <div class="col-3"> <!-- 3칸 할당 -->
               <div class="bg-success text-center text-white">1</div>
             </div>
             <div class="col-6"> <!-- 6칸 할당 -->
               <div class="bg-success text-center text-white">2</div>
             </div>
             <div class="col-3"> <!-- 3칸 할당 -->
               <div class="bg-success text-center text-white">1</div>
             </div>
           </div>
         </div>
       ```

       ![](C:\Users\student\Desktop\Jimin\TIL\web\img\grid_1_2_1.PNG)

     * column이 12를 넘어가면 overflow 발생

       3, 6, 5 씩 할당한다면 12가 넘어가 다음과 같이 overflow가 발생한다.

       ![](C:\Users\student\Desktop\Jimin\TIL\web\img\gird_overflow.PNG)

     * Offset : 띄우기 -> 5칸 띄우고 2칸 할당

       ```html
       <div class="col-2 offset-5"></div>
       ```

     *  **반응형(breakpoint) **

       `col` : 567px보다 작으면

       `col-sm` : 567 ~ 767px

       `col-md` : 768 ~ 991px

       `col-lg` : 992px ~ 

       ```html
       <div class="col-12 col-sm-6 col-md-4 col-lg-3"> 
           <!-- 
             총 12개를
             576보다 작으면, 1개 (col)
             576 ~ 767 2개 (col-sm)
             768 ~ 991 3개 (col-md)
             992 ~ 4개 (col-lg)
         -->
       </div>
       ```

       

### 2.Flex

### 2.1 [09_flex.html](C:\Users\student\Desktop\Jimin\web\bootstrap\09_flex.html)

* style에서 flex설정

  * flex 선언

    * container(감싸고 있는 부모 요소), items(구성하고 있는 아이템 요소)

    ```css
    .container {
      height: 100vh;
      border: 10px solid royalblue;
      display: flex; /* 선언 */
    }
    ```

  * flex의 방향 설정 : item들이 쌓이는 방향을 설정할 수 있음.

    _(row가 방향의 기본값 -> 기본 선언시 inline처럼 가능)_

    * column, row, column-reverse, row-reverse

    ```css
    flex-direction: column-reverse;
    ```

  * container 내부에 item 배치 (`wrap`)

    *   no-wrap이 기본값, wrap, wrap-reverse

    ```css
    flex-wrap: wrap;
    ```

### 2.2 [10_flex_정렬.html](C:\Users\student\Desktop\Jimin\web\bootstrap\10_flex_정렬.html)

* **flex-grow** : 남은 여백을 나눠 가진다. (기본값은 0)

* **justify-content**( x축)

  flex-direction이 row일 때, 가로 정렬

  ​                        	column 일 때, 세로 정렬

   flex-start(왼쪽 - 방향시작)

   center(가운데)

   flex-end(오른쪽 - 방향의 끝)

    space-between(사이에 여백)

    space-around(item 좌우 여백 동일)

    space-evenly(item 및 외곽 여백 동일)

* **align-items** (y축)

  flex-start(시작점)

  center(가운데)

   flex-end(끝)

   baseline : 폰트를 바꿔서 확인!

### 2.2 [11_flex_item.html](C:\Users\student\Desktop\Jimin\web\bootstrap\11_flex_item.html)

* 각각의 item에 적용

  ```css
  /* 꼭 flex 선언 후에 각 item에 적용 가능 */
  .container {
    height: 100vh;
    border: 10px solid royalblue;
    display: flex;
  } 
  /* 모든 item에 적용 */
  .item {
    width: 200px;
    height: 300px;
    line-height: 300px;
  }
  /* 3번째 item에 적용 (1~ 12번째 까지 이용가능) */
  .item3 {
    align-self: flex-end;
  }
  ```

  * `align-self: flex-end` : 맨 밑으로 보내기
  * `align-self: flex-start` : 맨 위로 보내기
  * `align-self: center` : 중앙으로 보내기 
  * `order: 1;` : 순서 변경 (-1이 제일 앞!)

### 2.3 [12_flex_bootstrab.html](C:\Users\student\Desktop\Jimin\web\bootstrap\12_flex_bootstrab.html)

* bootstrap을 적용해 보기

### 2.4 [13_flex_layout.html](C:\Users\student\Desktop\Jimin\web\bootstrap\13_flex_layout.html)

* layout 구성해보기