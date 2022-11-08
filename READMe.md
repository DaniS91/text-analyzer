_####Describe: wordCounter()####_

_Test: "It should return 1 if a passage has just one word."_
_Code:_
_const text = "hello";_
_wordCounter(text);_
_Expected Output: 1_

_Test: "It should return 2 if a passage has two words."_
_Code:_
_const text = "hello there";_
_wordCounter(text);_
_Expected Output: 2_

_Test: "It should return 0 for an empty string."_
_Code: wordCounter("");_
_Expected Output: 0_