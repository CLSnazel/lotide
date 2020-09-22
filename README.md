# Lotide

A mini clone of the [Lodash](https://lodash.com) library. As part of the first week of webdev bootcamp at [Lighthouse Labs](https://www.lighthouselabs.ca).

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @clsnazel/lotide`

**Require it:**

`const _ = require('@clsnazel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(inputString:String)`: returns an object, with each non-space character as keys, and count of occurances in the string as the value.
* `countOnly(arr:Array, countObj:Object)`: returns an object, counting the number of times a `key` appears in `arr` when `key:true` in the `countObj` 
* `eqArrays(actualArr:Array, expectedArr:Array)`: completes a deep comparison of two arrays, accepts nested arrays and objects.
* `eqObjects(obj1:Object, obj2:Object)`: completes a deep comparison of two object, accepts nested arrays and objects.
* `findKey(obj:Object, callback:Function)`: given a callback function that returns truthy, return the first key that triggers callback to return true.
* `findKeyByValue(obj:Object, val)`: given a value in val, return the first key that has a matching value to val.
* `flatten(arr:Array)`: given a multi-dimensional array, return a flattened array without any nesting.
* `head(arr:Array)`:  given an array, returns the first value in the array.
* `letterPositions(sentence:String)`: given a string, return an object with each non-space character in the sentence as a key. Each key has an array of index values of where it occurs in the string.
* `map(arr:Array, callback:Function)`: given an array, complete the callback with each array item as a parameter, and returns each callback result as a new array.
* `middle(arr:Array)`: given an array, returns the one or two middle values of that array as a new array.
* `tail(arr:Array)`: returns all items in the array excluding the first item, as a new array.
* `takeUntil(arr:Array, callback:Function)`: given a callback, will return the array up until an array element that causes the callback to return true.
* `without(initArr:Array, removeArr:Array)`: given two arrays, matching values between removeArr and initArr will be removed from initArr and returned as a new array.


