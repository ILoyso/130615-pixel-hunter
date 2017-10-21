const getStats = (gameResuts) => String.raw`<div class="stats">
      <ul class="stats">
        ${[...gameResuts.results].map((level) => `<li class="stats__result stats__result--${level}"></li>`)}
      </ul>
    </div>`;

export default getStats;
