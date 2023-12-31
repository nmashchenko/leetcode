# My LeetCode Journey 🚀

## Introduction

Hello there! 👋 This is where I chronicle my coding grind, breaking down each problem I tackle on LeetCode. Follow along to see my thought processes, the challenges I've encountered, and the strategies that have worked for me!

[![LeetCode user pRod1gy_](https://img.shields.io/badge/dynamic/json?style=for-the-badge&labelColor=black&color=%23ffa116&label=Solved&query=solvedOverTotal&url=https%3A%2F%2Fbadge.xyli.tech/%2Fapi%2Fusers%2FpRod1gy_&logo=leetcode&logoColor=yellow)](https://leetcode.com/pRod1gy_/)

![Accepted all](https://badges.peiyuan.ch/leetcode/pRod1gy_/rate?difficulty=all)
![Accepted easy](https://badges.peiyuan.ch/leetcode/pRod1gy_/rate?difficulty=easy)
![Accepted medium](https://badges.peiyuan.ch/leetcode/pRod1gy_/rate?difficulty=medium)
![Accepted hard](https://badges.peiyuan.ch/leetcode/pRod1gy_/rate?difficulty=hard)

![Solved all](https://badges.peiyuan.ch/leetcode/pRod1gy_/solved?difficulty=all)
![Solved easy](https://badges.peiyuan.ch/leetcode/pRod1gy_/solved?difficulty=easy)
![Solved medium](https://badges.peiyuan.ch/leetcode/pRod1gy_/solved?difficulty=medium)
![Solved hard](https://badges.peiyuan.ch/leetcode/pRod1gy_/solved?difficulty=hard)

---

## 📈 Progress Overview

- **Total Problems Solved**: 4
- **Easy Problems**: 4
- **Medium Problems**: 0
- **Hard Problems**: 0

---

## 💡 Some important notes for me

Best playlist to code: https://open.spotify.com/playlist/5LodgsmFfRYAojTwEZ9ulR?si=bcf8faee8e4b4f2a

---

## 🧠 Problem Breakdowns

### Easy 🟢

#### 1. [Two Sum](https://leetcode.com/problems/two-sum/description/)

- **Approach**: Simple approach by just going through all element of array
- **Challenges**: No challenges
- **Time Complexity**: 0(n^2)
- **Space Complexity**: 0(1)

#### 2. [Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)

- **Approach**: Compare original string to reversed one
- **Challenges**: No challenges
- **Time Complexity**: 0(n)
- **Space Complexity**: 0(n)

#### 3. [Roman To Int](https://leetcode.com/problems/roman-to-integer/description/)

- **Approach**: The problem here is that we can meet next values that can be combination of prev+next, so what we do here is basically, when we see a number that is less than the next number, we substract first digit and then add second (like IV: substract 1 from total and add 5 results in 4)
- **Challenges**: Coming up with the optimized version, originally just hardcoded values (which is not cool lol)
- **Time Complexity**: 0(n)
- **Space Complexity**: 0(1)

#### 4. [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

- **Approach**: Sort array to make sure all common strings will be next to each other, then just compare first and last element letters and see when they don't equal to each other, on that point we found substring
- **Challenges**: Come up with sorting
- **Time Complexity**: O(n log n)
- **Space Complexity**: 0(1)

#### 5. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

- **Approach**: Create a map of valid parentheses and basically use stack to solve, go through each char of string and if it's opening parentheses, add to stack, otherwise pop and check if it's valid, also make sure that stack is empty in the end
- **Challenges**: No challenges
- **Time Complexity**: O(n)
- **Space Complexity**: 0(n)

#### 6. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/)

- **Approach**: Create new list with head node, then just go through lists (while they both exists) and compare which number is less and add this number to head (don't forget to advance pointer on original lists, finally check if any list still has items and add all of that items to the end)
- **Challenges**: Refresh mind on linked lists (lol)
- **Time Complexity**: O(m + n)
- **Space Complexity**: 0(1)

#### 7. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

- **Approach**: Make set from array and then just return length of this array, also fill the original array with values to match the problem description
- **Challenges**: Understand the problem (lol x2)
- **Time Complexity**: O(n)
- **Space Complexity**: 0(n)

### Medium 🟡

#### 1. [Problem Name with Link]

- **Approach**: Brief description of your approach.
- **Challenges**: What challenges did you face and how did you overcome them?
- **Time Complexity**: Your analysis.
- **Space Complexity**: Your analysis.

... [Repeat for other medium problems]

### Hard 🔴

#### 1. [Problem Name with Link]

- **Approach**: Brief description of your approach.
- **Challenges**: What challenges did you face and how did you overcome them?
- **Time Complexity**: Your analysis.
- **Space Complexity**: Your analysis.

... [Repeat for other hard problems]

---

## 🏆 Milestones

- **08/28/23**: Started the grind

---
