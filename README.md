# Issues related to Radix slider and vitest

- https://github.com/radix-ui/website/discussions/810
- https://github.com/radix-ui/primitives/issues/1382#issuecomment-1122069313
- https://github.com/radix-ui/primitives/issues/1822
- https://github.com/radix-ui/primitives/issues/815

## To reproduce

1. Simply check out the project
2. Run `npm install`
3. Run `npm run test`

Notice that the App test will pass and the Slider test fails.
Both tests throw an error:

```
TypeError: target.setPointerCapture is not a function
```