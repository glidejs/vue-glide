# vue-glide

> ⚠️ WIP ⚠️

A Glide.js extension for Vue

### Installation

```
npm install --save vue-glide
```

### Usage

```js
import VueGlide from "@glidejs/vue-glide/src";

Vue.use(VueGlide);

new Vue({
  // ...
});

// OR
import Glide from "@glidejs/vue-glide/src/components/Glide";
import GlideTrack from "@glidejs/vue-glide/src/components/Track";
import GlideSlide from "@glidejs/vue-glide/src/components/Slide";

new Vue({
  components: {
    Glide,
    GlideTrack,
    GlideSlide,
  },

  // ...
});
```

Inside a component

```html
<template>
  <glide>
    <glide-track>
      <glide-slide>
        <a href="https://placeholdit.co/i/2000x1000?bg=0000ff">
          <img src="https://placeholdit.co/i/2000x1000?bg=0000ff" alt="">
        </a>
      </glide-slide>

      <glide-slide>
        <a href="https://placeholdit.co/i/2000x1000?bg=aaffaa">
          <img src="https://placeholdit.co/i/2000x1000?bg=aaffaa" alt="">
        </a>
      </glide-slide>

      <glide-slide>
        <a href="https://placeholdit.co/i/2000x1000?bg=ff0000">
          <img src="https://placeholdit.co/i/2000x1000?bg=ff0000" alt="">
        </a>
      </glide-slide>
    </glide-track>

    <div class="glide__arrows" data-glide-el="controls">
      <button
        class="glide__arrow glide__arrow--left"
        data-glide-dir="<">
        Previous
      </button>

      <button
        class="glide__arrow glide__arrow--right"
        data-glide-dir=">">
        Next
      </button>
    </div>
  </glide>
</template>
```

Import the glidejs stylesheet (scss)

```scss
@import "~@glidejs/glide/src/assets/sass/glide.core";
@import "~@glidejs/glide/src/assets/sass/glide.theme"; // (optional)
```

## Credits

- [Jędrzej Chałubek](https://github.com/jedrzejchalubek) - Creator
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
