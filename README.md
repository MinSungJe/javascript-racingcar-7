# javascript-racingcar-precourse

## ❗ 요구사항 점검

초간단 자동차 경주 게임을 구현한다.

- [ ] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- [ ] 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [ ] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [ ] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [ ] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [ ] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- [ ] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## ⛳ 구현할 기능 목록
- [ ] **1. 자동차 객체 생성**
    - 배열 속 이름 하나마다 하나의 객체 생성
    - 자동차의 이름, 위치 정보를 포함

- [ ] **2. 횟수 한 번동안의 자동차 이동로직 구현**
    - 0에서 9사이의 숫자 무작위 추첨 (`MissionUtils.Random.pickNumberInRange(0, 9);`)
    - 주어진 숫자가 4이상이면 한 칸 전진

- [ ] **3. 우승자 선정로직 구현**
    - 모든 자동차 객체의 위치 정보를 확인
    - 가장 멀리간 인원 선정
    - 공동 우승 고려(쉼표(`,`)를 이용하여 구분)

- [ ] **4. 경주할 자동차 이름 입력부**
    - 안내문: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
    - 이름은 쉼표(`,`) 기준으로 구분
    - 5자를 초과하는 이름을 받을 시 에러 메세지 제공, 애플리케이션 종료

- [ ] **5. 시도할 횟수 입력부**
    - 안내문: `시도할 횟수는 몇 회인가요?`
    - 숫자를 입력으로 받음
    - 조건에 맞지 않는 입력을 받을 시 에러 메세지 제공, 애플리케이션 종료

- [ ] **6. 경기 진행 상황 출력**
    - 출력 양식
        ```
        pobi : -
        woni : 
        jun : -

        pobi : --
        woni : -
        jun : --

        ... 반복
        ```
    - 출력 양식에 맞춰 자동차 객체의 이름과 위치를 적절히 배치
    - 시도할 횟수만큼 반복 시행 및 출력

- [ ] **7. 최종 우승자 출력**
    - 출력 양식: `최종 우승자 : pobi, jun`