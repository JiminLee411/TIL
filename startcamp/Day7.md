# 03 function

## 함수(function)

* 코드가 많아질수록 문제가 발생할 확률이 높아지며, 유지보수하기 힘들어진다.

  -> 간단하고 짧게, 반복하지 말아라

1. 함수의 선언과 호출

   ```python
   def func(parameter1, parameter2):
       code line1
       code line2
       return value
   ```

   * 함수 선언은 `def`로 시작하여 `:`으로 끝나고, 다음은 `4spaces 들여쓰기`로 코드 블록을 만듭니다.

   * 함수는 `매개변수(parameter)`를 넘겨줄 수도 있습니다.

   * 함수는 동작후에 `return`을 통해 결과값을 전달 할 수도 있습니다. (`return` 값이 없으면, None을 반환합니다.)

   * 함수는 호출을 `func(val1, val2)`와 같이 합니다.

     ```python
     # 직사각형의 둘레와 면적을 구하는 코드를 작성해주세요.
     a = int(input())
     b = int(input())
     
     def rectangle(height, width):
         # height, width 할당
         area = height * width
         perimeter = 2 * (height + width)
         return f'직사각형 둘레 : {perimeter}, 면적 : {area}입니다.'
     
     print(rectangle(a,b)) # print를 안해주면 프린트 못해.
     ```

     * 내장함수 목록 확인하기

       ```python
       dir(__builtins__) # dir : 해당 파라미터로 할 수 있는 모든 함수를 알려줌
                         # __ : 파이썬에서 만든 매직 메서드
       dir('1')
       dir(1)
       ```

   2. 함수 만들기

      ```python
      def my_max(num1, num2):
          print(f'{num1}이 더 큽니다.') if num1 > num2 else print(f'{num2}이 더큽니다.')
      def my_max2(num1, num2):
          return num1 if num1 > num2 else num2
      
      my_max( 5, 4)
      print(my_max2(3, 5))
      ```

   

   ## 함수의 return

   함수는 반환되는 값이 있으며, 이는 어떠한 종류의 객체여도 상관없습니다.

   단, **오직 한 개의 객체만** 반환됩니다.

   함수가 return 되거나 종료되면, 함수를 호출한 곳으로 돌아갑니다.

   ```python
   def my_func(a, b):
       return a, b
   # 숫자, 문자 두개를 반환하는 것처럼 보이지만, 실제로는 tuple이다. 즉 하나의 개체!
   ```

   1. 함수의 정의와 반환

      ```python
      # 여기에 my_list_max 함수를 만들어주세요.
      def my_list_max(li_a, li_b):
          return li_a if sum(li_a) > sum(li_b) else li_b
      def my_list_max1(li_a, li_b):
          if sum(li_a) > sum(li_b):
              return li_a
          else:
              return li_b
      
      my_list_max([10, 3], [5, 9])
      my_list_max1([10, 3], [5, 9])
      ```

   

   ## 함수의 인수

   `인수(arguments)` : 함수를 호출

   `인자(parameter)` : 함수 정의

1. 위치 인수 : 함수는 기본적으로 인수를 위치로 판단.

2. 기본 값(Default Argument Values) : 함수가 호출될 때, 인자를 지정하지 않아도 기본값을 설정할 수 있다.

   **활용법**

   ```python
   def func(p1=v1):
       return p1
   ```

   * 기본 값 활용 예제

     ex) 이름을 받아서 다음과 같이 인사하는 함수 greeting을 만들어보세요. 이름이 길동이면, "길동, 안녕?" 이름이 없으면 "익명, 안녕?" 으로 출력해주세요

     ```python
     # 아래에 greeting 함수를 만들어보세요.
     def greeting(name='익명'):
         print(f'{name}, 안녕?')
     
     greeting('길동')
     greeting()
     ```

     * 기본 인자 값이 설정되어 있더라도 기존의 함수와 동일하게 호출 가능하다.

     * 호출시 인자가 없으면 기본 인자 값이 활용된다.

     * 단, 기본 매개변수 이후에 기본 값이 없는 매개변수를 사용할 수는 없다.

       ```python
       # 오류 발생
       def greeting1(name='익명', age):
           print(f'{name}은 {age}살!')
       # => non-default argument follows default argument
       
       # 수정
       def greeting2(age, name='익명'):
           print(f'{name}은 {age}살!')
           
       greeting2(10000, '둘리')
       greeting2(10000)
       ```

3. 키워드 인자(Keyword Arguments)

   * 키워드 인자는 직접적으로 변수의 이름으로 특정 인자를 전달할 수 있다.

     ```python
     # 키워드 인자 예시
     print('123', end='\t')
     print('123', end='\t')
     ```

   * 단, 키워드 인자를 활용한 뒤에 위치 인자를 활용할 수는 없습니다.

     ```python
     print(end='\t', '123')
     # => positional argument follows keyword argument
     ```

   * `prints()` 함수는 파이썬 표준 라이브러리의 내장함수 중 하나이다.

     ```python
     # 다음과 같이 구성된다.
     print(*objects, sep='', end='\n', file=sys.stdout, flush=False)
     # objects를 텍스트 스트림 file로 인쇄하는데, sep로 구분되고 end를 뒤에 붙입니다.
     ```

     ```python
     #예시
     print('안녕', '하세요', sep='/', end='끝!') # 안녕/하세요끝!
     print('안녕', '하세요', '1', '2', '3', sep='/', end='끝!') # 안녕/하세요/1/2/3끝!
     ```

4. 가변 인자 리스트

   * 정해지지 않은 임의의 숫자의 인자를 받기 위해서는 가변인자를 활용합니다.

   * 가변인자는 `tuple` 형태로 처리가 되며, `*`로 표현합니다.

   **활용법**

   ```python
   def func(*args):
   ```

   * 가변 인자 예시

     ```python
     # 가변 인자 예시 (print문은 *obejcts를 통해 임의의 숫자의 인자를 모두 처리합니다.)
     print('hi', '안녕', 'Guten Tag', '곤니치와', sep=',')
     # => hi,안녕,Guten Tag,곤니치와
     
     # args는 tuple!
     def my_func(*args):
         print(type(args))
         
     my_func(1, 2, 3, 4, 5)
     # => <class 'tuple'>
     ```

     ```python
     # 정수를 여러 개 받아서 가장 큰 값을 반환(return)하는 my_max()을 만들어주세요.
     # 아래에 코드를 작성해주세요.
     def my_max(*big):
         num = big[0]
         for i in big:
             if num < i:
                 num = i
         return num
     def my_max1(*numbers):
         max_value = numbers[0]
         # 하나씩 반복하면서, 큰 값을 기록한다.
         for value in numbers:
             # 만약에 큰 값보다 지금 값이 더 크면, 값을 바꾼다.
             if max_value < value:
                 max_value = value
         #반복문 끝나면 반환한다.
         return max_value
     def my_max2(*numbers):
         return sorted(numbers)[-1]
     
     my_max(-30, -2, -10, -4, -5)
     my_max1(-30, -2, -10, -4, -5)
     my_max2(-1, -100, -3, -30)
     ```

5.  정의되지 않은 인자들 처리

   정의되지 않은 인자들은 `dict` 형태로 처리가 되며, `**`로 표현합니다.

   주로 `kwagrs`라는 이름을 사용하며, `**kwargs`를 통해 인자를 받아 처리할 수 있습니다.

   **활용법**

   ```python
   def func(**kwargs):
   ```

   * 우리가 dictionary를 만들 때 사용할 수 있는 `dict()` 함수는 [파이썬 표준 라이브러리의 내장함수](https://docs.python.org/ko/3.6/library/functions.html)중 하나이며, 다음과 같이 구성되어 있다. 

     ```python
     class dict(**kwarg)
     class dict(mapping, **kwarg)
     class dict(iterable, **kwarg)
     # 새 딕셔너리를 만듭니다. dict 객체는 딕셔너리 클래스입니다.
     ```

   * 딕셔너리 생성 함수 예시

     ```python
     # 1.
     dict(사과='apple', 바나나='banana', 고양이는='cat')
     # 2.
     def my_func(**kwargs):
         print(type(kwargs))
         print(kwargs)
     my_func() #=> <class 'dict'>
     my_func(사과='apple') # => {'사과': 'apple'}
     ```

   * 정의되지 않은 인자 처리하기

     ```python
     # my_dict 함수를 만들어 실제로 dictionary 모습으로 출력 함수를 만들어보세요.
     def my_dict(**kwargs):
         a = ''
         for word, hi in kwargs.items():
             a += word+': '+hi+', '
         print(a)
     def my_dict1(**kwargs):
         result = []
         for word, hi in kwargs.items():
             result.append(f'{word} : {hi}')
         print(result)
         print(', '.join(result))
     
     my_dict1(한국어='안녕', 영어='hi')
     
     # 사실은 dict()는 출력이 아니라 딕셔너리를 리턴(반환)합니다. 
     # 리턴하는 my_fake_dict를 만들어주세요.
     def my_fake_dict(**kwargs):
         return kwargs
     my_fake_dict(한국어='안녕', 영어='hi', 독일어='Guten Tag')
     # => {'한국어': '안녕', '영어': 'hi', '독일어': 'Guten Tag'}
     ```

6. dictionary를 인자로 넘기기(unpacking arguments list)

   `**dict` 를 통해 함수에 인자를 넘길 수 있습니다.

   ```python
   my_dict = {'한국어': '안녕', '영어': 'hi', '독일어': 'Guten Tag'}
   my_fake_dict(**my_dict)
   ```

   * 회원가입 검증 예제

     ```python
     # 회원가입 로직을 검증하는 코드를 작성 해봅시다.
     # signup 함수는 username, password, password_confirmation을 인자로 받습니다.
     # password가 8자리 이상인지 확인을 합니다.
     # password와 password_confirmation이 일치하는지 확인을 합니다.
     
     my_account = {
         'username': '홍길동',
         'password': '1q2w3e4r',
         'password_confirmation': '1q2w3e4r'
     }
     
     def signup(username, password, password_confirmation):
         if len(password) == 8 and password == password_confirmation:
             print('Ok')
     def signup2(**kwargs):
         if len(kwargs['password']) >= 8 and kwargs['password'] == kwargs['password_confirmation']:
             print('OK')
             
     signup(**my_account)
     signup('홍길동', '1q2w3e4r', '1q2w3e4r') # value 값만 넣어도 ok
     signup(password='1q2w3e4r', password_confirmation='1q2w3e4r', username='홍길동')
     # 순서 바꿔도 되지만 꼭 key도 선언 해줘야해
     ```

   * URL 편하게 만들기

     ```python
     def my_url(key, targetDt, itemPerPage=10):
         base_url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
         url = f'{base_url}itemPerPage={itemPerPage}&key={key}&targetDt={targetDt}&'
         return url
     def my_url2(itemPerPage=10, **kwargs):
         base_url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
         base_url += f'imtePerPage={itemPerPage}&'
         for key, value in kwargs.items():
             base_url += f'{key}={value}&'
         return base_url
     
     api = {
         'key': 'abc',
         'targetDt': 'yyyymmdd'
     }
     my_url(**api)
     my_url2(1, **api)
     ```

   * 이름공간 및 스코프(Scope)

     파이썬에서 사용되는 이름들은 이름공간(namespce)에 저장되어 있습니다. 그리고, LEGB Rule을 가지고 있습니다.

     변수에서 값을 찾을 때 아래와 같은 순서대로 이름을 찾아나갑니다.

     * Local scope : 정의된 함수
     * Enclosed scope : 상위함수
     * Global scope : 함수 밖의 변수 혹은 import된 모듈
     * Built-in scope : 파이썬안에 내장되어 있는 함수 또는 속성

     ```python
     # 따라서 첫시간에 내장함수의 식별자를 사용할 수 없었던 예제에서 오류가 생기는 이유를 확인할 수 있습니다.
     print(str(4))
     str = 4
     print(str(5))
     del str
     ```

     * 전역 변수는 함수내에서 변경 불가능하다.

       ```python
       global_num = 3
       def localscope2():
           global_num = 5
           print(f'global_num이 {global_num}으로 설정되었습니다.')
           
       print(global_num)
       localscope2()
       print(global_num)
       # 3 global_num이 5으로 설정되었습니다. 3
       
       # for문 또한 글로벌한 공간이므로 생성된 변수는 없어지지않는다.
       # 함수는 독립적인 공간.
       
       # 굳이 전역에 있는 변수를 바꾸고 싶다면, 아래와 같이 선언할 수 있습니다.
       global_num = 5
       def localscope4():
           global global_num
           global_num = 3
           print('local에서 설정함', global_num)
       print(global_num)
       localscope4()
       print(global_num)
       # 5 local에서 설정함 3  3
       ```

     * 이름공간은 각자의 수명주기가 있다.

       * built-in scope : 파이썬이 실행된 이후부터 끝까지
       * Global scope : 모듈이 호출된 시점 이후 혹은 이름 선언된 이후부터 끝까지
       * Local/Enclosed scope : 함수가 실행된 시점 이후부터 리턴할때 까지



## 재귀 함수(recursive function)





