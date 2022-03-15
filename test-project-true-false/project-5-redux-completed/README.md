### 234

# Local State

- form input

# Cross-Component State

- Modal
- props drilling

# App-Wide State

- user authentication
- props drilling

### 235

# why redux?

- context는 중소 어플리케이션에 적합하다. (규모에 따라 복잡성 초래)
- auth는 적합하지만 데이터 변경이 자주 많이 있다면 context 사용이 좋지 않다

### 236

# redux Concepts

- Store - Central Data (State)
- Reducer - Changes Store Data (!== useReducer, normal Function)
- Action - Dispatch action (=== javaScript object)

### 237

- x

### 238

- x

### 239

- x

### 240

1. store

- createStore
- defaultState
- createStore(reducerFunction)
- export default store
-

2. reducer
   - reducerFunction (counter,auth...)
   - state,action

### 242

1. useSelector - 자동으로 최신 데이터를 받는다.
   리덕스 스토어에서 데이터가 바뀔 떄마다

### 243 ~ 246

type: 명칭이 동일해야 action을 받는다.
useDispatch - 컴포넌트에서 액션을 호출해서 사용한다.
액션이 호출되면 리듀서 함수로 특정한 type과 일치하는 함수가
호출되어 Mutate 상태가 된다. 이 change는 store로 전달되어
컴포넌트에 변환된 UI로 반영된다.

### 247

& 중요한 법칙!

- state.counter++
  => 절대 기존의(=원본) state를 변행해서는 안된다!

- 객체와 배열은 js에서 참조값이다
  => 기존의 state를 변형시킨다.
  => 중첩된 객체를 복사하거나 삭제 할 떄는
  항상 새로운 객체를 반환해야된다!
  => 그 결과 아무것도 변경하지 않은 완전히
  새로운 객체를 생성한다.
  => state가 변할 떄, 항상 새로운 객체나 배열을 만들어라!

### 248

- type의 상수를 활용해서 action.type을 오타없이 액션을 전달
  할 수 있게 해준다.

### 249

- redux-toolkit 의 헤택
  => state.counter++ 와 같은 코드는 state를 직접 변하기 떄문
  에 절대로 사용해서는 안되는 코드였지만 toolkit에서는 가능하다.

=> 이유는 createSlice 함수 사용 시, 기존 상태를 절대로 바꿀 수 없기 떄문이다.

=> 또한 toolkit 에는 이전 redux에서 사용 하는 Immer 라이브
러리가 내장되어서 자동으로 원래 있는 상태를 복제한다.

### 250

- toolkit configureStore 는 기존 Store와 다르게
  여러 개의 리듀서를 하나의 리듀서로 합칠 수 있다는 장점이있다.

  ### 251

  - toolkit 작성 순서

- 1. initialState 정의하기
- 2. createSlice 함수 만들기
- 3. name,initialState,reducers 작성하기
- 4. reducers 내부에 각 reducer 매서드 함수 작성하기
- 5. createSlice.actions 매서드 이용하기
     => 이떄 기존 redux의 type 처럼 액션 객체를 생성할 필요가 없다. (임의로 type 액션 객체를 만들어낸다)
     액션 생성자 매서드가 어떤 액션이 발생했는지 인식한다.
     마치 아래와 같다.

  - 기존 Redux
    const incrementHandler = () => {
    dispatch({ type: INCREMENT });
    };

  - Redux-toolKit
    const incrementHandler = () => {
    dispatch(counterActions.increment());
    };

- 6. store 에 configureStore를 써서 reducer를 key
     이름으로 하고 counterSlice.reducer 를 value로 할당한다.

- 7. components로 넘어가서 handler 함수에 호출하려는 액션을 선택한다.
- const incrementHandler = () => {
  dispatch(counterActions.increment());
  };

  ### 252

  - 다중 슬라이스 작성
  - => 슬라이스가 여러개라도 리덕스 스토어는 오직 1개이다.

### 253

- useSelector((state) => state.counter.counter);
  에서 고려사항으로 state와 연결되는 첫 counter은 reducer 객체 안에 있는 counter key를 의미하고 두번쨰 counter는 initialCounterState
  의 counter 를 의미한다.

- components 에서 action을 dispatch 할때,
  dispatch(counterActinos.increment()) 형태로 사용하면 된다.

### 254 ~ 256

- 코드 분할 방법
  1. export default authSlice.reducer;
  2. import authReducer from "./auth";
  3. auth: authReducer

### 257 ~ 258

- side-effects cause
  1. inside the components (useEffect)
  2. inside the action creators
