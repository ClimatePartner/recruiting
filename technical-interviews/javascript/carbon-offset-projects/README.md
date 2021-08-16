# Carbon Offset Projects Technical JS Interview
The goal of this exercise is to build a basic api that allows us to manage our carbon
offset projects. Allowed time should be 45mins ~  60mins.

## Interview Structure
1. Introduce exercise
2. **Implement add functionality**. This should allow the user to add a new offset project with the following parameters - technology (Eg. 'Wind', 'Solar'), country, offsetAmount (the initial amount of available CO2 for this project)
3. **Implement remove functionality**. This should allow the user to remove CO2 from a selected offset project. It would need the technology name, country and an offset amount to reduce.
4. **Implement projects filter** (Optional). This should allow us to search for projects by either the technology, country, minimum offset amount or any combination of the 3.
5. **Implement conversion function** (Optional). The result of this depends on the data structure used. If the candidate uses an Object, get them to return an array of with each item a separate project. If they chose an Array as their data structure get them to return a single nested Object.

**Bonus questions**
1. Make all requests asynchronous as if calling a real API

## Things to watch for
**Add**
  - What happens when you add the same project twice.
  - What happens if you don't give a technology name, country or original amount
  - 
**Remove**
- What happens if you try to remove from a technology or country that doesn't exist
- What happens when trying to remove more than the project currently has
- What happens when removing exactally as much as the project
  
**Filter**
- What happens when a filter doesn't match
  
**General**
- Data structures used
- State manipulation
- Uses newer syntax eg. Do they use a function and extend the prototype or go for Class. What array methods do they use etc.
- Handling of error and edge cases.
- Do they know more than one way implementing something

## Grading
Refer to the [coding chanllenge scorecard](https://climatepartner.atlassian.net/wiki/spaces/DS/pages/745472095/Coding+Challenge+Scorecard)

