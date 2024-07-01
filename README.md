# webpack

Dependencies

---

- babel
- eslint
- javascript
- typescript
- tailwindcss
- css - sass
- imagemin

---

### Run commands

1. `yarn install` install dependencies
2. `yarn run dev` development server
3. `yarn run build` build project
4. `yarn run optimize` optimize images

### Image optimizer

Config file `optimizer.mjs`

```js
/// this config clone folders and optimize images
(async (input, output, sizes) => {
  /// config ...
})("unoptimized", "public/images", [1080]);
```
