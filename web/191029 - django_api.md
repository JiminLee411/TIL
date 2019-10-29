# 191029

## RESTful

> rest 구성
>
> * 자원 : URI
> * 행위 : HTTP Method
> * 표현 : Representations

* ```bash
  $ pip install djangorestframework
  ```

  

```bash
$ python manage.py dumpdata musics # musics의 정보를 출력해준다
$ python manage.py dumpdata musics > musics.json # musics의 정보를 json파일로 저장해준다
$ python manage.py dumpdata --indent 2 musics > musics.json # 보기 편하게 son파일 저장
```



## Serializers

보내주고 싶은 데이터의 형식을 json파일로 만들어서 보내주는 것..



```bash
$ pip install drf-yasg
```



url의미

GET reviews/ 리뷰 목록

POST reviews/ 리뷰 등록하기

GET reviews/1/ 1번 리뷰 가져오기

PUT reviews/1/ 1번 리뷰 수정하기

DELETE reviews/1/ 1번 리뷰 삭제하기





## API

> * GUI (Graphic User Interface) - 그래픽으로 유저와 상호작용하는 인터페이스
> * CLI (Command Line Interface) - 명령어로만 유저와 상호작용하는 인터페이스
> * API (Application Porgramming Interface) - 프로그래밍으로 어떠한 정보를 가져갈 수 있는 방법

