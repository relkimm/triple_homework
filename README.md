# 트리플(triple) - homework

### How to run

---

프로젝트는 아래와 같이 터미널 환경에서 실행하면 됩니다. 우선 git clone 을 통해 소스 코드를 내려 받은 후, 프로젝트에 필요한 패키지를 npm install 명령어로 설치합니다. 패키지 설치가 완료되면, npm start 로 어플리케이션을 실행시킬 수 있습니다. 개발 서버는 3000번 포트로 설정되어 있으므로, http://localhost:3000 에서 실행한 어플리케이션을 확인할 수 있습니다.

<br>

    1. git clone https://github.com/relkimm/triple_homework.git
    2. cd triple_homework
    3. npm install
    4. npm start

<br>

### Project environment

---

프로젝트는 [cra(create-react-app)](https://create-react-app.dev/) 를 통해 생성했습니다. 간단한 프로젝트는 cra 를 통해 생성하는 편이며, 빌드 최적화 등 다양한 설정이 필요한 경우에는 직접 프로젝트 설정을 하고 있습니다. 최근 모바일 프로젝트에서는 아래와 같이 프로젝트 환경을 구성했습니다.

- webpack
- swc
- eslint
- prettier
- husky
- lint-staged
- tsconfig

공통 라이브러리 개발에서는 아래와 같이 프로젝트 환경을 구성했습니다.

- monorepo
- yarn workspace
- rollup
- babel
- ...

<br>

### Tech stack

---

기술 스택은 다음과 같습니다. 타입스크립트는 자바스크립트의 런타임 오류를 최소화하기 위해 사용하게 되었습니다. 또한 개인적인 경험으로 타입스크립트는 타입 지정을 통해 명확한 코드를 작성할 수 있어서 다른 개발자 분들과 협업하기도 좋았던 것 같습니다.
<br>
<br>
그리고 별도의 상태 관리 라이브러리는 사용하지 않았습니다. 아직까지 컴포넌트 간의 상태를 공유하는 케이스가 없었으며, 앞으로 케이스가 많아진다면 클라이언트 상태는 [jotai](https://jotai.org/), 서버 상태는 [react-query](https://tanstack.com/query/v4) 를 통해 관리할 예정입니다.
<br>
<br>
추가로 css 는 컴포넌트 별 css 파일을 만들어서 해당 컴포넌트에서 import 하는 방식으로 구성했습니다. css 모듈화를 통해 css 전역 오염을 방지할 수 있었습니다. 프로젝트 규모가 커진다면, module css 또는 css-in-js 방식인 [styled-component](https://styled-components.com/), [emotion.js](https://emotion.sh/docs/introduction) 를 사용해도 괜찮을 것 같습니다.
<br>

- Typescript
- React
- css

<br>
