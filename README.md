# Project Euler 071 - Ordered Fractions

Consider the fraction, n/d where n and d are positive integers.  If n &lt; d and HCF(n,d) = 1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for d &le; 8 in ascending order of size:

1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, **2/5**, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

It can be seen that 2/5 is the fraction immediately to the left of 3/7.

By listing the set of reduced proper fractions for d &le; limit in ascending order of size, find the numerator of the fraction immediately to the left of 3/7.

Information at [Project Euler 071](https://projecteuler.net/problem=71)

## UX

**Getting Started**

In the input field enter a whole number between 3 and 1000000 (without leading zeros) and select the Submit Button.  Unless you have made an invalid input, you will see the value of the numerator of the fraction immediately to the left of 3/7 as well as the number you have entered.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 3 or greater than 1000000
- Including leading zeros (e.g. 08)
- Entering a number, but it is not an integer

As a user, if I select the Reset Button, I can clear the information or start again.

As a user, if I enter 8 and submit, I expect `orderedFractions(8)` to return a number.

As a user, if I enter 8 and submit, I expect `orderedFractions(8)` to return 2.

As a user, if I enter 10 and submit, I expect `orderedFractions(10)` to return 2.

As a user, if I enter 9994 and submit, I expect `orderedFractions(9994)` to return 4283.

As a user, if I enter 500000 and submit, I expect `orderedFractions(500000)` to return 214283.

As a user, if I enter 1000000 and submit, I expect `orderedFractions(1000000)` to return 428570.

User Stories on function `orderedFractions(limit)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 071](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-71-ordered-fractions)

**Information Architecture**

The function `orderedFractions(limit)` returns a number, where `limit` is a number between 3 and 1000000.

## Features

Allows the user to enter a number in order to get the numerator of the fraction to the left of 3/7 from a list of reduced proper fractions.  Performs checks on valid user input.  If the input is not valid, an error message is displayed instead.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.3.0-alpha1 and Google Fonts.

## Testing

Ensure all user stories have been met.

In the terminal, enter:

    python3 -m http.server

Select Open Preview.  Input various numbers (e.g. 8, 9994, 500000 and 1000000) and check if the result matches the user story.  If it does not, then check typing.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-071) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)