# Bootstrap

> 더욱 간결한 방식으로 나타낸다.

### CDN (Content Delivery (Distribution) Network)

컨텐츠(CSS, JS, Image, Text 등)을 효율적으로 전달하기 위해 여러 노드에 가진 네트워크에 데이터를 제공하는 시스템.

* 개별 end-user의 가까운 서버를 통해 빠르게 전달 가능( 지리적 이점)
* 외부 서버를 활용함으로써 본인 서버의 부하가 적어짐.
* CDN은 보통 적절한 수준의 캐시 설정으로 빠르게 로딩할 수 있음.

* [intro](C:\Users\student\Desktop\Jimin\web\bootstrap\01_intro.html) 

### Utilities

1. [Spacing](C:\Users\student\Desktop\Jimin\web\bootstrap\02_spacing.html) 

   * 단축키
     * `m` : margin,`p` : padding
     * `t` : top, `b` : bottom, `l` : left, `r` : right, `x` : left, right, `y` : top, bottom

   `.m-0` : `margin:0;`

   `.mr-0` :  `margin-right:0;`

   `.mx-0` : `margin-left:0; margin-right:0;`

   `.py-0` : `padding-top:0; padding-bottom:0;`

   `.mt-1`: `margin-top: 0.25rem` -> 4px (브라우저 기본 rem은 16px이므로!)

   

   * 음수도 가능하다.

     `0` : 0			0px

     `n1` : -0.25	-4px
     
     `n2` : -0.5	  -8px
     
     `n3` : -1 		-16px
     
     `n4` : -1.5	  -24px
     
     `n5` : -3		 -48px
     
     

2. [Color](C:\Users\student\Desktop\Jimin\web\bootstrap\03_color.html) 

   * 다양한 활용법

     * `.text-'__color name__'`
     * `.alert-'__color name__'`
     * `.btn-'__color name__'`
     * `.navbar-dark.bg-'__color name__'`

     

3. Border (경계선 설정)

   * 활용법 (색 및 형태)

     * `border-color:'__color name__'`
     * `.rounded-` -> rounded-circle, rounded-pill, rounded-top

     

4. Display( 해당 위치 배경에 색을 넣어준다.)

   ```html
   <div class="d-inline bg-info rounded">인라인인라인</div>
   <div class="d-block bg-info rounded">인라인인라인</div>
   ```

   d-inline 해당 값의 크기 만큼만 색을 할당시킨다.

   

