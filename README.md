# PFSLab8

Procedura postępowania: <br />
 
1. Do repozytorium dodano podstawową wersję aplikacji na branch master. Wykorzystano polecenia: <br />
  git init # zainicjowano nowy projekt <br />
  git remote add pfslab8 git@github.com:Mmaoo/PFSLab8.git # utworzono połączenie ze zdalnym repozytorium <br />
  git add . # dodano wszystkie pliki do projektu git (master) <br />
  git commit -m "nodeJS" # zaakceptowano nowe zmiany <br />
  git push pfslab8 master # wysłano pliki do repozytorium github <br />
2. Dodano pliki Dockerfile, docker-compose oraz .travis dla wersji deweloperskiej i produkcyjnej <br />
3. Utworzono serwis deweloperski wykorzystując plik docker-compose2.yml za pomocą polecenia: <br />
  COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker-compose2.yml up <br />
  Serwis składa się z części webowej, gdzie na bierząco widać zmiany aplikacji oraz testowej, gdzie przy każdej zmianie automatycznie wykonywane są testy.<br />
  W serwisie dołączane są wolumeny aby mógł on na bierząco śledzić zmiany.<br />
4. Utworzono aplikację generującą liczby ciągu fibonacciego: <br />
  - Utworzono funkcję zwracającą określoną liczbę ciągu w pliku src/fibonacci.js <br />
  - Utworzono formularz i zwrot wyniku w pliku src/App.js <br />
5. Dodano testy w pliku src/App.test.js <br />
6. Do repozytorium dodano zmiany w aplikacji: <br />
  git checkout -b fibonacci master # utworzono nowy branch <br />
  git add . # dodano zmiany w projekcie (branch: fibonacci) <br />
  git commit -m "fibonacci" # zaakceptowano zmiany <br />
  git push pfslab8 master # wysłano pliki do repozytorium github # wysłano pliki do repozytorium gothub na nowym branchu <br />
  w repozytorium github utworzono nowy pull-request
  dołączono branch fibonacci do master 
