# Lottery

**<45개의 로또 추첨볼이 있다. 6개의 볼이 무작위로 추첨되어 1등에 당첨될 확률은?>**
<br>
- 시행 : 같은 조건에서 반복할 수 있고, 결과가 우연에 의해 결정된다.
- 표본공간 : 모든 결과 전체의 집합
- Event(사건) : 표본공간의 부분 집합
- 근원 사건 : 한 개의 원소로 이루어진 사건
<hr>
- Sample Space(확률) : Collection or a set of possible outcomes of a random experiment by using Symbol 'S'
  Discrete Sample Space; Countable (이산표본공간) <br>
  Continuos Sample Space; Uncountable (연속표본공간)
<hr>
- Probability P(A) = m/N (N개로 구성된 공간에서 사건이 m번 발생한다.) <br>
  => 통계적 실험을 반복하면, P(A); 어떤 사건의 수가 발생할 확률에 가까워진다.
<hr>
- Axiomatic definition of Probability : 한 사건이 발생화는 것은 일정한 법칙을 따른다.<br>
  => 한 가지 사건은 일정한 상수를 향한다. <br> <hr>
- Conditional Probability P(B|A) 조건부 확률; A가 발생하고 B가 일어날 확률
  => P(A교집합B) = P(B|A)P(A) = P(A|B)P(B) (단, P(A)>0)
<br>


### equation
i) 순서없이 중복으로 6개를 뽑을 경우; 순열 활용 
 전체 숫자의 경우의 수 / 전체 숫자 - 6개 숫자의 경우의 수 (6!)
<br>
 첫 번째 - 1/45 
 두 번째 - 1/44 
 세 번째 - 1/43 
 네 번째 - 1/42 
 다섯 번째 - 1/41 
 여섯 번째 - 1/40 
<br>
<hr>

ii) 각 time마다 공을 한개의 숫자를 뽑을 경우 + 6개를 뽑을 경우의 수 (6!)
<br>
 첫 번째 - 1/45 * 6 
 두 번째 - 1/44 * 5
 세 번째 - 1/43 * 4
 네 번째 - 1/42 * 3
 다섯 번째 - 1/41 * 2
 여섯 번째 - 1/40 * 1
<br>

*차이점 <br>
var = [1, 2, 3, 4, 5] 중에서 3개의 숫자를 고를 때,
i)를 활용하면 [1, 2, 3] != [2, 1, 3] != [3, 2, 1] 등 중복이 제거되지 않고 고를 수 있다. <br>
ii)를 활용하면 [1, 2, 3] = [2, 1, 3] = [3, 2, 1] 이기 때문에 중복이 제거된다.
<br>

### 방법
**START** ▶ 1. 45개의 숫자에서 무작위 1개 선택 ▶ 2. 숫자가 기존에 뽑힌 숫자와 같은가? <br>
▶(IF YES) 1.으로 회귀 <br>
▶(IF NO) 3. 6개 모두 선택했나? <br>
▶(IF YES) 4. 완료된 6개의 숫자 출력 ▶ **FINISH**
▶(IF NO) 1.으로 회귀 <br><br>

#### reference 
- BlockDMask 개발자 https://blockdmask.tistory.com/368 
- Cylogic 개발자 https://brunch.co.kr/@font/63


