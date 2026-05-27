# 2. Code Question 2

Developers at Amazon are working on a text generation utulity for one of thei new products.

Currently, the utility generates only special strings. A string is special if theere are o matching adjacent characters. Given a string s of length n, generate a special string of length n that it lexicographically greater than s. If multiple such special strings are possible, then return the lexicographically smallest string among them.

Notes:

- Special String: A string is special if there ae no two adjacent characters that are the same.
- Lexicogtraphical Order: This is a generalization of the way workds are alphanetically ordered in dictionaries. For example, "abc" is lexicographically smaller than "abd" because 'c' comes befores 'd' in the alphabet.

A string a is lexicographically smaller than a string b if and only if one of the following holds:

- a is a prefix o b, but a is no equal to b. For example, "abc" is smaller than "abcd".
- In the first position where a and b differ, the characer in a comes before the character in b in the alphabet. For example, "abc" is smaller than "abd" because 'c' comes before 'd'.

Important Considerations:

- If the character is 'z', it is the last character in the alphabet and cannot be increased further. The string should not wrap around to 'a' after 'z'.
- The output string must not have any adjacent characters that are the same.

Example
Suppoose s = "abbd".

Some of the special string that are lexicographically greater than s are shown:

- abda
- abcd
- abca
- abcb

The lexicographically smallest special string that is greater than "abbd" is "abca".

Function Description
Complete the function getNextSpecialString in the editor belpw.

getNextSpecialString has the following paramter:
s: the input string

Return 
string: the lexicographically smallest string that is greater than s. if no suck special string exists, return "-1".

Constraints:

- 1 >= | s | <= 106
- s consists of lowercase English letters only.

Sample Case 0

STDIN           FUNCTION
---             ---
abccde  ->      S = "abccde"

Sample Ooutput
abcdab

Explanation
Some of the special string that are lexicographical greater that s are "abcdde", "abcdab", "abcdbc"

Sample Case 1

STDIN           FUNCTION
---             ---
zzab    ->      s = "zzab"

Sample Output
-1

Explanation
There is no special string of length 4 that is lexicographically greater than s.