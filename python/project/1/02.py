import requests
import pprint
import csv
from datetime import datetime, timedelta

key = '896e0630e1c45d2f0cd6b6976b1e6391'
movieCdes = list()
i = 0
movieTotalInfo = {}
movies = []
with open('boxoffice.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    # 탈출조건
#     for idx,row in enumerate(reader):
#         if idx == 3:
#             break
    for row in reader:
        movies.append(row['movieCd'])
# print(movies)
for movieCd in movies:        
    api_url = f'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key={key}&movieCd={movieCd}'
    response = requests.get(api_url).json()     
    informations = response['movieInfoResult']['movieInfo']

    movieTotalInfo[movieCd] = {
        'movieCd': informations['movieCd'],
        'movieNm': informations['movieNm'],
        'movieNmEn': informations['movieNmEn'],
        'movieNmOg': informations['movieNmOg'],
        'openDt': informations['openDt'],
        'showTm': informations['showTm'],
        'genreNm': informations['genres'][0]['genreNm'],
        'watchGradeNm': informations['audits'][0]['watchGradeNm'] if informations['audits'] else None,
        'peopleNm': informations['directors'][0]['peopleNm'] if informations['directors'] else None
        }
print(movieTotalInfo)

with open('movie.csv', 'w', encoding='utf-8') as f:
    fieldnames = ['movieCd', 'movieNm', 'movieNmEn', 'movieNmOg', 'openDt','showTm', 'genreNm', 'watchGradeNm', 'peopleNm']
    csv_writer = csv.DictWriter(f, fieldnames=fieldnames)
    csv_writer.writeheader()
    for item in movieTotalInfo.values():
        csv_writer.writerow(item)
    