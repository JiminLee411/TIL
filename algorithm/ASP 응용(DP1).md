# ASP 응용

## DP-1

> 동적계획법(DP)은 완적검색을 더 똑똑하게 하는 방법
>
> * Recursive + Memoization

* 토끼 수 구하기

  * 다음과 같은 조건에서 n번째 달의 토끼 수는?

    * 첫 달에는 새로 태어난 토끼 한 쌍만 존재
    * 두 달 이상이 된 토끼는 번식 가능
    * 번식 가능한 토끼 한 쌍은 매달 새끼 한 쌍을 낳는다
    * 토끼는 죽지 않는다

    ```
    f(n + 2) = f(n) + f(n + 1) 
    ```

    의 점화식으로 만들 수 있다.

* 수학적 귀납법

  >  주어진 등식이 `n = 1` 일 때 성립함을 증명하고, `n`일 때 성립한다고 가정한 후, `n + 1` 일 때 성립함을 증명하여 가능한 모든 `n`일때 성립함을 증명한다.

### 1. 동적 계획법

> 동적 계획 알고리즘은 그리디 알고리즘과 같이 *최적화 문제* 를 해결하는 알고리즘.
>
> * 먼저 작은 부분 문제들의 해들을 구하고 이들을 이용하여 보다 큰 크기의 부분 문제들을 해결하여, 최종적으로 원래 주어진 문제를 해결하는 알고리즘 설계 기법으로 다음과 같은 요건을 가지고 있어야 한다.
>
>   * *중복 부분문제 구조*
>* 큰 문제를 이루는 작은 문제들을 먼저 해결하고 작은 문제들의 최적해를 이용하여 순환적으로 큰 문제를 해결. -> 중복되는 작은 문제를 `table` 에 저장하여 필요할 때마다 참조를 통해 중복된 계산을 피한다.
>     
>* *최적 부분문제 구조*
>   * 동적 계획법은 주어진 문제가 최적화의 운칙을 만족해야 동적 계획법을 효율적으로 적용할 수 있다.
>  
>   * 최적화 원칙이란, 어떤 문제에 대한 해가 최적일 때 그 해를 구성하는 작은 문제들의 해 역시 최적이어야 한다는 것이다.
>
>    동적 계획법의 방법자체가 큰 문제의 최적 해를 작은 문제의 최적해들을 이용하여 구하기 때문에 만약 큰 문제의 최적해가 작은 문제들의 최적화의 해들로 구성되지 않는다면 동적 계획법을 적용할 수 없다.

* 분할 정복 vs 동적 계획법
  * 분할 정복
    * 연관 없는 부분 문제로 분할
    * 부분문제를 재귀적으로 해결
    * 부분문제의 해를 결합
    * 하향식 방법
    * ex ) 병합정렬, 퀵정렬
  * DP
    * 부분 문제들이 연관이 없으면 적용 불가.
    * 모든 부분 문제를 한번만 계산하고 결과를 저장하고 재사용
    * 분할 정복은 같은 부분 문제가 나타날 경우 다시 계산.
    * 상향식 방법
  
* 연습문제2

  1cm 파란 막대, 1cm 노란 막대, 2cm 빨간 막대 일때, 이 막대들을 연결하여 길이가 ncm인 막대를 만드는 방법의 수를 f(n)이라 할때, 

  ```python
  # 일반적
  stick = ['B', 'Y', 'RR']
  def makeStick(n, s):
      if n == 0:
          print(s)
      else:
          for i in stick:
              if n >= len(i):
                  makeStick(n - len(i), s + i)
  makeStick(50, '')
  ```

  * 점화식 이용 -> 값이 커질 수록 시간이 너무 길어

    ```python
    stcik = ['B', 'Y', 'RR']
    def makeStick(n):
        if n == 1: return 2
        if n == 2: return 5
        
        return makeStick(n - 1) * 2 + makeStick(n - 2)
    
    print(makeStick(50))
    ```

  * `+ memoization` 적용

    ```python
    stcik = ['B', 'Y', 'RR']
    memo = [-1] * 100
    def makeStick(n):
        if n == 1: return 2
        if n == 2: return 5
        if memo[n] != -1: return memo[n]
        
        memo[n] = makeStick(n - 1) * 2 + makeStick(n - 2)
        
        return memo[n]
    
    print(makeStick(50))
    ```

    