
> hexlet-linq@0.0.3 documentation /Users/mokevnin/projects/js-linq
> documentation "build" "src/index.js" "-f" "md"

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

# from

Convert array to enumerable collection

**Parameters**

-   `collection` **\[any]** 

# Enumerable

Enumerable

## constructor

Constructor

**Parameters**

-   `collection` **\[any]** 
-   `operations` **\[any]?** 

## where

Where

**Parameters**

-   `fn` **function (value: any, index: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)): [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## select

Select

**Parameters**

-   `fn` **function (value: any, index: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)): any** 

## orderBy

OrderBy

**Parameters**

-   `fn` **function (value: any): any** 
-   `direction` **\[(`"asc"` \| `"desc"`)]**  (optional, default `'asc'`)

## length

Length

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

## build

Build

**Parameters**

-   `fn` **function (coll: \[any]): any** 

## toArray

To Array