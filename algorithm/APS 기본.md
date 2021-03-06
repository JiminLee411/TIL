# APS 기본

## 1. 배열 1( Array 1)

### 1.1 **알고리즘** 

* 알고리즘 : 문제를 해결하기 위한 절차. ( 텍스트 기반, 순서도 )

* 정확성 : 결과의 정확성

* 작업량 : 적은 연산을 통한 결과

  * 시간복잡도(Time Complexity) : 실제 걸리는 시간을 측정, 실행되는 명령문의 개수를 계산

  * 시간복잡도 : 가장 높은 차수의 항만 표시.

    ​	빅-오(O(n)) : 최악의 경우 ( 마지막에 성공하거나 실패하는 경우)

    ​	오메가(Ω(n)) : 최선의 경우 ( 첫번째에 성공)

    ​	씨타() : 빅-오와 오메가가 같을 경우

  * 순차 검색 : 처음부터 끝까지 검색하며 나간다.

  * 이진 검색: 임의의 숫자부터 검색을 하여 검색할 곳을 반으로 줄여나간다.

* 메모리 사용량 : 적은 메모리 이용

* 단순성 : 간단한 알고리즘

* 최적성 : 개선 필요 없는 최적화

  

### 1.2 **배열**

배열 : `동일한 자료형`의 변수들을 하나로 저장하여 사용하는 자료구조 / 인덱스 기반 데이터 처리

* c : 동일한 자료형으로 만들어야 자료형의 크기에 맞게 인덱스로 찾아갈수 있다.
*  파이썬 : list는 그냥 배열이 아닌 포인터 배열이다. `포인터 배열`로 각 방에는 `각 데이터의 주소값`이 저장돼있으므로 일정하 크기의 값을 가지고있어 인덱스로 찾아갈 수 있다. 



### 1.3 **정렬** 

정렬: 2개 이상의 자료를 특정 기준에 의해 재배열하는 것



#### 1.3.1 버블 정렬 (Bubble Sort) 

* 인접한 두개의 원소를 비교하며 자리를 교환
* 시간복잡도 : O(n^2)

```python
arr = [55, 7, 78, 12 ,42]
n = len(arr)

for j in rnage(n - 1, 0 , -1):
	for i in range(j): # n - 1 ~ 1만금 반벅
    	if arr[i] > arr[i + 1]:
        	arr[i], arr[i + 1] = arr[i + 1], arr[i]
            
print(arr)
```



#### 1.3.2 카운팅 정렬 ( Counting Sort)

* 항목의 순서 결정을 위해 각 항목이 몇개 있는지 세는 작업
* 양의 정수만 적용 가능. 또한, 최대값을 알고있어야 한다.(배열의 크기를 선언하기 위해)
* 시간복잡도 : O(n + k) -> n은 리스트 길이, k는 정수의 최대값

```python
arr = [0, 4, 1, 3, 1, 2, 4, 1]
# 양의 정수, 최대값을 알아야 된다.
# 최대값 = 4
cnt = [0] * 5 # 배열의 인덱스 n-1 = 4

# 빈도수 계산
for val in arr:
    cnt[val] += 1  # cnt = [1, 3, 1, 1, 2]
    
# 누적 빈도수 계산 - 정렬을 하기 위한 각 숫자의 마지막 숫자의 위치를 구해준다
for i in range(1, len(cnt)):
    cnt[i] = cnt[i - 1] + cnt[i] # cnt = [1, 4, 5, 6, 8]
    
# 구한 누적빈도수로 빈리스트에 숫자를 옮겨 준다.
for i in range(cnt[-1]-1):
    cnt[i]
    res[cnt[i-1]]
    
    
print(cnt)
```

```python
res = []
arr = [0, 4, 1, 3, 1, 2, 4, 1]
# 양의 정수, 최대값을 알아야 된다.
# 최대값 = 4
cnt = [0] * 5 # 배열의 인덱스 n-1 = 4

# 빈도수 계산
for val in arr:
    cnt[val] += 1  # cnt = [1, 3, 1, 1, 2]

for i in ragne(len(cnt)):
    for j in range(cnt[i]):
        # i가 cnt[i] 만큼 반복되는 것
        res.append(i)
print(res)
```

* 연습문제

  ```python
  # 배열 활용 예제 : Gravity
  # 밑에서부터 쌓이므로 제일 위에 있는 블럭만 비교하면 된다.
  # 그 후 해당 index의 값과 같거나 큰 index와의 index의 차를 구하면 된다.
  ```

  - 결정 문제

  ```python
  # Baby-gin Game
  # 1. 완전 검색 방법
  # 6장 중 3장씩 두 그룹으로 나눠서 모든 경우를 체크해보고 baby-gin이 있으면 true
  
  #
  ```


#### 1.3.3 완전 검색

- 문제의 해법의 모든 경우의 수를 나열해보고 확인
- Brute-force 혹은 generate-and-test 기법
- 최적화 문제 : 최적해를 구하는 문제(최소 혹은 최대가 되는 경우를 찾고 모든 후보해를 조사.)
  - 따져봐야할 경우의 수 : 순열(n!), 조합, 부분집합(2^n) -> 완전탐색
  - 해결법 : 탐색기반 - 백트래킹 + (가지치기) / BP : 문제간의 관계(재귀적관계)동적 계획법



## 2. 배열 2 ( Array 2)

### 2.1 **2차원 배열**

* 1차원 리스트를 묶어놓은 리스트

* 2차원 이상의 다차원 list는 차원에 따라 index를 선언

* 2차원 list의 선연 : 세로길이(행의 개수), 가로길이(열의 개수)를 필요로함

  * ```python
    arr = [[0, 1, 2, 3], [4, 5, 6, 7]] # 2행 4열의 2차원 List
    ```

  * | 0    | 1    | 2    | 3    |
    | ---- | ---- | ---- | ---- |
    | 4    | 5    | 6    | 7    |

* Python에서는 데이터 초기화를 통해 변수선언과 초기화가 가능함.

* 실수

  ```python
  list = [[0] * 3] * 3
  list1[0][0] = 1
  print(list) # => [[1,0,0],[1,0,0],[1,0,0]]
  
  arr1 = [[1,2],[3,4]]
  arr2 = [arr[0]]
  arr1[0][0] = 100
  print(arr1) # => [[100,2], [3,4]]
  print(arr2) # => [[100,2]]
  
  # => 방법
  list2 = [[0] * 3 for _ in range(3)]
  list2[0][0] = 1
  print(list2) # => [[1,0,0],[0,0,0],[0,0,0]]
  ```

  

* 2차원 배열의 접근

  * 배열 순회 : n X m 배열의 n*m개의 모든 원소 조사

  * 행 우선 순회 : 행단위로 (2중 for문 이용 -> 바깥 : 행 안 : 열)

  * 열 우선 순회 : 열단위로 (2중 for문 이용 -> 바깥 : 열 안 : 행)

  * 지그재그 순회 : 인덱스 값이 짝수인 경우는 오른쪽으로 홀수인 경우는 왼쪽으로

    ```python
    arr = [[1, 2], [3, 4]]
    N = len(arr)
    for i in arr:
        if i % 2 == 0: # 짝수 : ------>
            for j in range(N):
                pass
        else:          # 홀수 : <-------
            for j in range(N-1, -1, -1):
                pass
    ```

  * 델타를 이용한 2차 배열 탐색 : 2차 배열의 한 좌표에서 4방향의 인접 배열 요소를 탐색.

    (탐색할 행렬, 기준행, 열(ex. 상하좌우) 을 정해야한다)

  * 대각선 순회

    ```python
    N, M = len(arr), len(arr[0])
    for diag in range(0, N + M -1):
        x = 0 if diag < M else (diag - M + 1)
        y = diag if diag < M else M-1
    
        while x < N and y >= 0:
            print('%2d ' % arr[x][y], end='')
            x += 1
            y -= 1
    ```

    

* 2차원 배열의 활용

  * 전치 행렬 : 대각선을 기준으로 대칭되게 변경.

    ```python
    arr = [[1,2,3],[4,5,6],[7,8,9]] # 3*3 행렬
    
    for i in range(3):
        for j in range(3):
            if i < j:
                arr[i][j], arr[j][i] = arr[j][i], arr[i][j]
    ```

  

### 2.2 비트연산자

- `&` : 비트 단위로 AND 연산, `|` : 비트 단위로 OR 연산

  `<<` : 피연산자의 비트 열을 왼쪽으로 이동, `>>` : 피연산자의 비트 열을 오른쪽으로 이동

- `<<` 연산자 : 1<< n -> 원소가 n개일 경우의 모든 부분집합의 수를 의미

- `&` 연산자: i & (1<<j) -> i의 j번째 비트가 1인지 아닌지를 리턴



### 2.3 검색

- 순차 검색 - 단순, 직관, 비효율

  - 정렬되어 있지 않은 경우

    평균 비교 회수 : (n+1)/2

    시간 복잡도 : O(n)

  - 정렬되어 있는 경우

    평균 비교 회수 : 검색 실패시 반으로 준다.

    시간 복잡도 : O(n)

- 이진 검색(Binary Search)

  - 자료의 가운데에 있는 항목의 키 값과 비교하여 다음 검색의 위치를 결정하고 다시 진행하는 방법

- 선택정렬

  - 가장 작은 값의 원서부터 차례대로 선택하여 위치를 교환

    ```python
    arr = [64, 25, 10, 22, 11]
    n = len(arr)
    
    for i in range(n - 1):
        minIdx = i
        for j in range(i + 1, n):
            if arr[minIdx] > arr[j]:
                minIdx = j
        arr[i], arr[minIdx] = arr[minIdx], arr[i]
    
    print(arr)
    ```

- 셀렉션 알고리즘(Selection Algorithm)

  - 저장되어 있는 자료로부터 k번째로 큰 혹은 작은 원소를 찾는 방법을 셀렉션 알고리즘이라 한다.
  - k가 비교적 작을때 유용하며 O(kn)의 수행시간을 필요로 한다.



## 3. 문자열 (stirng)

### 3.1 문자열

* char 타입 없음

* 텍스트 데이터의 취급방법이 통일

* 문자열 기호

  * 연결 : `+` , 문자열 + 문자열 -> 이어 붙이는 역할
  * 반복 : `*` , 문자열 * 수 -> 수만큼 문자열 반복

* 문자열 처리

  * 문자열은 시퀀스 자료형으로 분류. -> 시퀀스 자료형에서 사용할 수 있는 인덱싱, 슬라이싱 연산 가능

  * 메소드

    `replace()` , `split()` , `isalpha()` , `find()` 

  * 문자열은 immutable!

* 예제

  * `reverse`

    ```python
    # 1.
    s = 'Reverse this strings'
    res = s[::-1]
    print(res)
    # 2.
    word = 'algorithm'
    res = ''
    for i in range(len(word) - 1, -1, -1):
        res += word[i]
    print(res)
    ```

  * `atio()` 함수 구현

    ```python
    str = ''
    while str:
        
    ```

    

  

### 3.2 패턴 매칭

text에서 패턴이 등장하는 모든 위치를 찾는 문제

* 패턴 매칭 알고리즘

  * 고지식한 패턴 검색 알고리즘 (Brute Force)

    본문 문자열을 처음부터 끝까지 차례대로 순회하면서 패턴 내의 문자들을 일일이 비교하는 방식. (최악의 경우 시간복잡도 : O(MN) )

  * 카프-라빈 알고리즘

    * 해싱의 개념 사용 O(n)

  * KMP 알고리즘 (Knuth-Moriss-Pratt)

    * 불일치가 발생한 텍스트 스트링의 앞 부분에 어던 문자가 있는지를 미리 알고 있으므로, 불일치가 발생한 앞 부분에 대하여 다시 비교하지 않고 매칭을 수행
    * 패턴을 전처리하여 배열 next[M]을 구해서 잘못된 시작을 최소화함
      - next[M] : 불일치가 발생했을 경우 이동할 다음 위치
    * 시간 복잡도 : O(M+N)

  * 보이어-무어 알고리즘 (Boyer-moore)

    * 오른쪽에서 왼쪽으로 비교
    * 패턴에 오른쪽 끝에 있는 문자가 불일치하고 이 문자가 패턴 내에 존재하지 않는 경우, 이동거리는 패턴의 길이 만큼 이동한다.
    * 최악의 경우 수행시간 : O(mn)
    * 최선의 경우 : Ω(n)

    

### 3.3 문자열 압축



### 3.4 실습 1, 2



## 4. 스택1

### 4.1 스택(stack)

* 선형구조 (LIFO - 후입선출)
* 자료구조 : 자료를 선형으로 저장할 저장소
* 연산
  * 삽입(push), 삭제(pop), 공백확인(isEmpty), 스택의 top의 item 반환(peek)

* `Fucntion call` : 함수 호출마다 함수의 지역변수, 매개변수 및 복쉬주소 등의 정보를 시스템 스택에 삽입.

### 4.2 재귀호출

* 재귀적으로 문제를 해결
  *  좀 더 작은 문제의 해를 이용해서 좀 더 큰 문제의 해를 구하는 과정 
    *  분할정복, DP

### 4.3 Memoization

* 재귀 호출의 단점인 같은 수를 여러번 호출 하는것을 방지

### 4.4 DP(Dynamic Programming)

* 작은 문제의 해를 해격하여 큰 문제를 해결하는 방식으로 최적화 문제를 해결
* **푸는 순서를 찾는것이 핵심 **

### 4.5 DFS

#### **+ 그래프**

> 그래프 : 아이템들과 이들 사이의 연결관계

- 자료 구조 :  `정점(Vertex)` + `간선(Edge)` 
  - |V| : 정점의 개수
  - |E|: 그래프에 포함된 간선의 개수
  - 최대 간선의 개수 : |V| * (|V| - 1) / 2
- 그래프 유형
  - 무향 그래프(Undirected Graph)
  - 유향 그래프(Directed Graph)
  - 가중치 그래프(Weighted Graph)
  - 사이클 없는 방향 그래프(DAG, Directed Acyclic Graph)
  - 완전 그래프 : 정점들에 대해 가능한 모든 간선을 가진다.
  - 부분 그래프 : 원래 그래프에서 일부의 정점이나 간선을 제외한 그래프

##### +.1 인접 정점

- 인접(Adjacency) :  두개의 정점에 간선이 존재하면 서로 인접해 있다고 한다.

##### +.2 그래프 표현

- 인접 행렬 (Adjacent matrix) 
  - |V| x |V|크기의 2차원 배열을 이용해서 간선 정보를 저장
  - 무향 그래프 : i번째 행의 합 = i번째 열의 합 = Vi의 차수
  - 유향 그래프
    - 행 i의 합 = Vi의 진출 차수
    - 열 i의 합 = Vi의 진입 차수
  - 인접 정점을 찾는데 시간 소모 많다.
- 인접 리스트 (Adjacent LIst)
  - 각 정점에 대한 인접 정점들을 순차적으로 펴현
  - 하나의 정점에 대한 인접 정점들을 각각 노드로 하는 연결리스트로 저장
  - 무향 그래프
    - 노드수 = 간선 수 * 2
    - 각 정점의 노드 수 = 정점의 차수
  - 유향 그래프
    - 노드수 = 간선의 수
    - 각정점의 노드 수 = 정점의 진출 차수
- 간선의 배열
  - 간선(시작 정점, 끝 정점)을 배열에 연속으로 저장
- 비선형구조인 그래프 구조는 그래프로 표현된 모든 자료를 검색해야함
  - 방법
    - DFS
    - BFS

#### 4.5.1 DFS(깊이우선탐색)

* DFS 알고리즘
  1. 시작 정점 `v`를 결정하여 방문
  2. 정점 `v` 에 인접한 정점중에
     * 방문하지 않은 정점 `w` 가 있으면, 정점 `v`를 스택에 push하고 정점 `w` 를 방문한다. 그리고 `w`를 `v`로 하여 다시 **2.**를 반복한다.
     * 방문하지 않은 정점이 없으면, 탐색의 방향을 바꾸기 위해서 스택을 pop하여 받은 가장 마지막 방문 정점을 `v`로 하여 다시 **2.**를 반복한다.
  3. 스택이 공백이 될 때까지 **2.**를 반복한다.
* 단점
  * 출발점부터 정점까지 최단경로로 간다고 보장 X



## 5. 스택2

### 5.1.1 계산기

중위표현식 -> 후위표현식으로 변경

### 5.1.2 백트래킹

- 백트래킹 : 해를 찾는 도중에 막히면 되돌아가서 다시 해를 찾아가는 기법

  -> 최적화(optimization) 문제와 결정(decision) 문제를 해결할 수 있다.

- 결정문제 : 문제의 조건을 만족하는 해의 존재 여부를 '1' or '0'으로 답하는 문제

  - 미로찾기, n-Queen 문제, Map colring, 부분집합의 합
    - 깊이우선탐색 : 모든 경로 추적 -> 경우의 수 많음
    - 백트래킹 : 불필요한 경로 조기 차단 -> 최악의 경우에는 깊이우선탐색과 동일.

- 일반 백트래킹 알고리즘

  ```python
  def checknode(v): # node
      if promising(v):
          if there is a solution at v:
              write the solution
          else:
              for u in each child of v:
                  checknode(u)
  ```

  

### 5.1.3 분할정복

- 설계 전략
  - 분할(Divide)
  - 정복(Conqure)
  - 통합(Combine)



## 6. 큐(Queue)

### 6.1 큐

* FIFO(선입선출) 구조
  * 구조 : 머리(Front), 꼬리(Rear)
  * 기본 연산 : 삽입(enQueue) - rear 다음에 삽입, 삭제(deQueue) - front의 원소 삭제
* 연산과정
  * 공백큐 생성(**createQueue();**) : `front = rear = -1` -> 생성한 큐 이전 주소를 가리킴
  * 원소 A 삽입(**enQueue(A);**) : `front = -1, rear = 0` -> rear만 마지막 원소를 가르킴
  * 원소 B 삽입(**enQueue(B);**) : `front = -1, rear = 1` -> rear만 마지막 원소를 가르킴
  * 원소 반환/삭제(**deQueue()**;) : `front = , rear = 1` -> 배열의 마지막 빈공간으로 front 이동
  * **front와 rear의 위치** : front의 위치가 원소의 이전 주소를 가르키면 공백상태를 확인할 수 있다 -> 공백상태 : front = rear

#### 6.1.1 큐의 구현

* 선형큐

  * 1차원 배열

    * 큐의 크기 = 배열의 크기
    * front: 저장된 첫번째원소의 인덱스
    * rear: 저장된 마지막 원소의 인덱스

  * 상태 표현

    * 초기상태 : front = rear = -1
    * 공백상태 : front = rear
    * 포화상태 : rear = n-1

    ```python
    Q = [0] * 10
    front rear = -1
    def enqueue(item):
        global rear
        # full 상태 체크
        if rear == N - 1:
            return
        rear += 1
        Q[rear] = item
        
    def dequeue():
        globalr front
        # empty 상태 체크
        if front == rear:
            return
        front += 1
        return Q[front]
    
    Q = []
    Q.append(1)
    while len(Q) > 0:
        Q.pop(0)
    ```

    * 함수 이용 : `pop()`을 이용하여 사용하는것보다 메모리와 시간 절약

      ```python
      from queue import Queue, PriorityQueue
      # from collections import deque
      import collections
      Q = collections.deque()
      ```

  * 문제점

    * 포화상태 잘못 인식 : 삽입 삭제 반복시 앞 인덱스가 비어있는데 포화상태로 인식

      * 해결방법1: 매 연산이 이우러질때마다 저장된 원소들을 배열의 앞부분으로 모두 이동 > 효율성 ↓

      * 해결방법2(원형큐): 논리적으로 배열의 처음과 끝 연결

      * **원형 큐** 구조

        * 초기 공백 상태 : `front = rear = 0`

        * Index 순환 : front와 rear이 마지막 인덱스(`n-1`)를 가리킬 경우, 배열의 처음인 인덱스 0으로 이동 -> 연산자 `mod`사용

        * front 변수 : 공백 상태와 포화상태 구분을 위해 front가 있는 자리는 항상 빈자리로 둠

        * 삽입 위치 및 삭제 위치

          |        | 삽입 위치                  | 삭제 위치                    |
          | ------ | -------------------------- | ---------------------------- |
          | 선형큐 | `rear = rear + 1`          | `front = front + 1`          |
          | 원형큐 | `rear = (rear  + 1) mod n` | `front = (fron t + 1) mod n` |

          * 공백 상태 : `front = rear`
          * 포화 상태 : `삽일할 rear의 다음 위치 = 현재 front`

        * 코드 구현

          ```python
          Q = [0] * 10
          front rear = -1
          def enqueue(item):
              global rear
              # full 상태 체크
              if front == (rear + 1) % N:
                  return
              rear = (rear + 1) % N
              Q[rear] = item
              
          def dequeue():
              globalr front
              # empty 상태 체크
              if front == rear:
                  return
              front += (front + 1) % N
              return Q[front]
          ```

### 6.2 우선순위 큐

* 특성

  * 우선순위를 가진 항목을 저장 : 우선순위가 높은 순서대로 먼저 Out
  * 적용 : 최단 경로 (시뮬레이션 시스템, 네트워크 트래픽 제어, 운영체제의 테스크 스케줄링)

* 구현

  * 배열 이용
  * 리스트 이용

* 함수

  ```python
  from queue import Queue, PriorityQueue
  # from collections import deque
  import collections
  
  # 또는
  from heapq import heappush, heappop
  ```

* 문제점 : 삽입/ 삭제시 원소 재배치 -> 소요 시간 및 메모리 낭비



### 6.3 큐의 활용

* **버퍼**
  * 버퍼 : 데이터를 전송할때 데이터를 일시적으로 보관하는 메모리 영역
  * 버퍼링  : 버퍼를 활용하는 방식 또는 버퍼를 채우는 동작
  * 자료구조 : FIFO방식의 큐가 활용
* 활용 - Rivisit to 마이쮸

### 6.4 BFS

> 탐색의 시작점의 인접한 정점들을 먼저 모두 방문한 후에, 방문했던 정점을 시작점으로 인접 정점들을 다시 방문하는 방식

* DFS는 방문시 최단 경로 보장이 안됨
* BFS는 반드시 최단거리를 알 수 있다.

### 6.5 최단경로

> BFS 의 최대 장점은 최단경로와 최단경로트리를 알 수 있다는 것이다.

```python
def BFS(s): # s=시작점
    # 큐를 생성, 방문표시
    Q = []
    visit = [False] * (V + 1) # 1 ~ V까지
    # 시작점을 방문하고 큐에 삽입
    visit[s] = True
    print(s)
    D[s], P[s] = 0, s
    Q.append(s)
    # 빈큐가 아닐동안
    while Q:
        # 큐에서 하나 꺼내온다. v
        v = Q.pop(0)
        for w in G[v]:
            # v에 방문하지 않은 인접정점을 모두 찾아서
            if not visit[w]:
                # 차례로 방문하고 큐에 삽입
                visit[w] = True; print(w)
                D[w] = D[v] + 1
                P[w] = v
                Q.append(w)
import sys
sys.stdin = open("BFS_input.txt", "r")

V, E = map(int, input().split())
G = [[] for _ in range(V + 1)]
D = [0] * (V + 1) # 최단거리를 저장
P = [0] * (V + 1) # 최단경로트리

for i in range(E):
    u, v = map(int, input().split())
    G[u].append(v)
    G[v].append(u)

BFS(1)
print(D)
print(P)
```



## 7. 리스트(list)



## 8. 트리

z