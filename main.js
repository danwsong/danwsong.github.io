new TypeIt('.greeting', {
    speed: 250,
    lifeLike: true,
    cursorChar: '_',
    startDelay: 1000
  })
  .type("<span class=\"tag\">&lt;h1&gt; </span>hey! i'm <span class=\"name\">dan</span>.<span class=\"tag\"> &lt;/h1&gt;</span>")
  .go();