# Stale Closure in setInterval within a React useEffect Hook

This example demonstrates a common error in React when using `setInterval` inside a `useEffect` hook.  The issue stems from a stale closure over the `count` variable.

## The Problem

The `setInterval` callback function uses the initial value of `count` from when the `useEffect` runs, not the updated value. This results in the counter not incrementing correctly or incrementing with unexpected jumps.

## The Solution

The correct way is to use a functional update within `setCount` to ensure that you are always using the latest state value.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the counter's behavior.  It will not increment smoothly.