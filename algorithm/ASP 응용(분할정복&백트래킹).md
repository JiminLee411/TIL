# ASP 응용

## 분할정복 & 백트래킹

### 1. 분할 정복

#### 1. 병합정렬

* 연결리스트에 적합

* python List append(), pop(), slicing을 사용하면 시간이 너무 오래 소요됨

  ```python
  arr = [69, 10, 30, 2, 16, 8, 31, 22]
  tmp = [0] * len(arr)
  
  def mergeSort(lo, hi):  # 문제의 크기 - 정렬할 자료의 범위
      if lo == hi : return
      # 유도 사례
      mid = (lo + hi) >> 1
      mergeSort(lo, mid)
      mergeSort(mid + 1, hi)
      # 왼쪽과 오른쪽 자료들이 정렬된 상태
      i, j, k = lo, mid + 1, lo
      while i <=mid and j <=hi:
          if arr[i] < arr[j]:
              tmp[k] = arr[i]
              k, i = k + 1, i + 1
          else:
              tmp[k] = arr[j]
              k, j = k + 1, j + 1
      while i <= mid:
          tmp[k] = arr[i]
          k, i = k + 1, i + 1
      while j <= hi:
          tmp[k] = arr[j]
          k, j = k + 1, j + 1
      for  x in range(lo, hi + 1):
          arr[x] = tmp[x]
  
  mergeSort(0, len(arr) - 1)
  print(arr)
  ```



#### 2. 퀵정렬

> 병합 정렬은 두 부분으로 나누는 반면, 퀵정렬은 pivot을 기준으로 이보다 작은 것은 왼편, 큰 것은 오른편에 위치시킨다.

* 최악의 경우 분항이 안될 수 있다.

  * pivot을 어떻게 선택하는지, 어떤 데이터가 주어지는지에 때라 시간이 달라짐
  * pivot을 랜덤하게 고르는게 가장 성능이 좋다고 알려짐.
  * O(n^2)
  * 병합정렬의 경우 무조건 이분할 (n, n/2, n/4, ...) 이기 때문에 O(nlogn)

* A형 문제엔 X, Pro 시험에서는 무조건 구현

  ```python
  # 퀵 정렬
  arr = [69, 10, 30, 2, 16, 8, 31, 22]
  
  def quickSort(lo, hi):
      if lo >= hi: return
  
      # 피봇을 정해서 파티션 알고리즘 수행
      i, j = lo, hi   #arr[lo] : 피봇
      while i < j:
          while i <= hi and arr[lo] >= arr[i]: i += 1
          while arr[lo] < arr[j]: j -= 1
          if i < j:
              arr[i], arr[j] = arr[j], arr[i]
          arr[lo], arr[j] = arr[j], arr[lo]   # 피봇이 있어야할 위치로
  
      quickSort(lo, j - 1)
      quickSort(j + 1, hi)
  print(arr)
  quickSort(0, len(arr) - 1)
  print(arr)
  
  # 퀵 정렬 2
  arr = [69, 10, 30, 2, 16, 8, 31, 22]
  
  def quickSort(lo, hi):
      if lo >= hi: return
      i = lo - 1
      for j in range(lo, hi):
          if arr[j] < arr[hi]:
              i += 1
              arr[i], arr[j] = arr[j], arr[i]
      i += 1
      arr[i], arr[hi] = arr[hi], arr[i]
  
      quickSort(lo, j - 1)
      quickSort(i + 1, hi)
  print(arr)
  quickSort(0, len(arr) - 1)
  print(arr)
  ```




### 2. 백트래킹

> 여러가지 선택중 하나를 선택 -> 선택을 반복하면서 최종상태에 도달
>
> * 백트래킹 vs DFS
>
>   * 백트래킹은 가지치기가 가능하다. 
>   * 최악의 경우 여전히 지수함수 시간을 요함.
>
> * 백트래킹 기법
>
>   * 상태 공간 트리의 깊이 우선 검색을 실시
>   * 각 노드의 유망한지를 점검
>   * 유망하지 않으면, 그 노드의 부모노드로 돌아가서 검색을 계속 한다.
>
>   