# ASP 기본

## 큐(Queue)

> - FIFO(선입선출) 구조
>   - 구조 : 머리(Front), 꼬리(Rear)
>   - 기본 연산 : 삽입(enQueue) - rear 다음에 삽입, 삭제(deQueue) - front의 원소 삭제
> - 연산과정
>   - 공백큐 생성(**createQueue();**) : `front = rear = -1` -> 생성한 큐 이전 주소를 가리킴
>   - 원소 A 삽입(**enQueue(A);**) : `front = -1, rear = 0` -> rear만 마지막 원소를 가르킴
>   - 원소 B 삽입(**enQueue(B);**) : `front = -1, rear = 1` -> rear만 마지막 원소를 가르킴
>   - 원소 반환/삭제(**deQueue()**;) : `front = , rear = 1` -> 배열의 마지막 빈공간으로 front 이동
>   - **front와 rear의 위치** : front의 위치가 원소의 이전 주소를 가르키면 공백상태를 확인할 수 있다 -> 공백상태 : front = rear

### 1. 큐의 구현

- 선형큐

  - 1차원 배열

    - 큐의 크기 = 배열의 크기
    - front: 저장된 첫번째원소의 인덱스
    - rear: 저장된 마지막 원소의 인덱스

  - 상태 표현

    - 초기상태 : front = rear = -1
    - 공백상태 : front = rear
    - 포화상태 : rear = n-1

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

    - 함수 이용 : `pop()`을 이용하여 사용하는것보다 메모리와 시간 절약

      ```python
      from queue import Queue, PriorityQueue
      # from collections import deque
      import collections
      Q = collections.deque()
      ```

  - 문제점

    - 포화상태 잘못 인식 : 삽입 삭제 반복시 앞 인덱스가 비어있는데 포화상태로 인식

      - 해결방법1: 매 연산이 이우러질때마다 저장된 원소들을 배열의 앞부분으로 모두 이동 > 효율성 ↓

      - 해결방법2(원형큐): 논리적으로 배열의 처음과 끝 연결

      - **원형 큐** 구조

        - 초기 공백 상태 : `front = rear = 0`

        - Index 순환 : front와 rear이 마지막 인덱스(`n-1`)를 가리킬 경우, 배열의 처음인 인덱스 0으로 이동 -> 연산자 `mod`사용

        - front 변수 : 공백 상태와 포화상태 구분을 위해 front가 있는 자리는 항상 빈자리로 둠

        - 삽입 위치 및 삭제 위치

          |        | 삽입 위치                  | 삭제 위치                    |
          | ------ | -------------------------- | ---------------------------- |
          | 선형큐 | `rear = rear + 1`          | `front = front + 1`          |
          | 원형큐 | `rear = (rear  + 1) mod n` | `front = (fron t + 1) mod n` |

          - 공백 상태 : `front = rear`
          - 포화 상태 : `삽일할 rear의 다음 위치 = 현재 front`

        - 코드 구현

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

### 2. 우선순위 큐

- 특성

  - 우선순위를 가진 항목을 저장 : 우선순위가 높은 순서대로 먼저 Out
  - 적용 : 최단 경로 (시뮬레이션 시스템, 네트워크 트래픽 제어, 운영체제의 테스크 스케줄링)

- 구현

  - 배열 이용
  - 리스트 이용

- 함수

  ```python
  from queue import Queue, PriorityQueue
  # from collections import deque
  import collections
  
  # 또는
  from heapq import heappush, heappop
  ```

- 문제점 : 삽입/ 삭제시 원소 재배치 -> 소요 시간 및 메모리 낭비



### 3. 큐의 활용

- **버퍼**
  - 버퍼 : 데이터를 전송할때 데이터를 일시적으로 보관하는 메모리 영역
  - 버퍼링  : 버퍼를 활용하는 방식 또는 버퍼를 채우는 동작
  - 자료구조 : FIFO방식의 큐가 활용
- 활용 - Rivisit to 마이쮸

### 4. BFS

> 탐색의 시작점의 인접한 정점들을 먼저 모두 방문한 후에, 방문했던 정점을 시작점으로 인접 정점들을 다시 방문하는 방식

- DFS는 방문시 최단 경로 보장이 안됨
- BFS는 반드시 최단거리를 알 수 있다.

### 5. 최단경로

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

