---
sidebar: auto
pageClass: api-document
---
# Custom Contents
Applied using the frontmatter configuration :

    ---
    sidebar: auto
    pageClass: api-document
    ---

Gravida rutrum quisque non tellus orci. In nibh `mauris` `cursus` `mattis` molestie a iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Tellus rutrum tellus `pellentesque` eu tincidunt tortor.

## Local Assets
This showcase have the assets in `assets` directory in the same path as the `md` file

    ![](./assets/028-idea.svg)

![](./assets/028-idea.svg)

### Custom Image Sizes
Image Assets can have custom size to be displayed via [markdown-it-imsize](https://www.npmjs.com/package/markdown-it-imsize)

#### Preserve Ratio
Resize Image Preserve ratio

    ![](./assets/028-idea.svg =50x)
    ![](./assets/028-idea.png =100x)
    ![](./assets/028-idea.svg =150x)

![](./assets/028-idea.svg =50x)
![](./assets/028-idea.svg =100x)
![](./assets/028-idea.svg =150x)

#### Force Width and Height
Or set both `width` and `height` value

    ![](./assets/028-idea.svg =200x100)
    ![](./assets/028-idea.png =200x100)

![](./assets/028-idea.svg =200x100)
![](./assets/028-idea.png =200x100)

## Custom Admonitions

### Default
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

### Additional
[TBD](https://friendlyuser.github.io/vuepress-theme-cool-starter/admonitions.html#examples)

### Notes
Display Sample of custom Notes, customize with combine `checked` `info` `warning` `error` and color `green` `red`

<aside class="admonition checked green">
<p>When you’re ready to take your integration live, replace your test publishable and secret <a href="/docs/keys">API keys</a> with live ones. Live payments cannot be processed if your integration is still using your test keys.</p></aside>

<aside class="admonition info">
  <p>Do not rely on the redirect to the <code>success_url</code> alone for fulfilling purchases as:</p>

  <ul>
    <li>Malicious users could directly access the <code>success_url</code> without paying and
gain access to your goods or services.</li>
    <li>Customers may not always reach the <code>success_url</code> after a successful payment.
It is possible they close their browser tab before the redirect occurs.</li>
  </ul>

  <p>See <a href="/docs/payments/checkout/fulfillment">after the payment</a> for more details.</p>
</aside>

<aside class="admonition warning">
<p>When you’re ready to take your integration live, replace your test publishable and secret <a href="/docs/keys">API keys</a> with live ones. Live payments cannot be processed if your integration is still using your test keys.</p></aside>

<aside class="admonition error red">
<p>When you’re ready to take your integration live, replace your test publishable and secret <a href="/docs/keys">API keys</a> with live ones. Live payments cannot be processed if your integration is still using your test keys.</p></aside>


### Notes on the Side
<aside class="admonition note error red">
<p>When you’re ready to take your integration live, replace your test publishable and secret <a href="/docs/keys">API keys</a> with live ones. Live payments cannot be processed if your integration is still using your test keys.</p></aside>

Accumsan lacus vel facilisis volutpat est velit egestas. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Lobortis feugiat vivamus at augue eget arcu. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. In tellus integer feugiat scelerisque varius morbi enim.

    admonition note error red

Duis ut diam quam nulla porttitor massa id neque. Pulvinar mattis nunc sed blandit libero volutpat. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Cras semper auctor neque vitae tempus. Malesuada proin libero nunc consequat interdum varius. Ultrices dui sapien eget mi proin sed libero enim. Ornare aenean euismod elementum nisi quis eleifend quam. Hendrerit dolor magna eget est lorem ipsum. Nunc congue nisi vitae suscipit tellus mauris a diam. Amet volutpat consequat mauris nunc congue nisi. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Convallis posuere morbi leo urna molestie.

