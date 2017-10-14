import data from '../statsData';

const getStats = (gameResuts) => String.raw`<div class="stats">
      <ul class="stats">
        ${[...gameResuts.results].map((level) => `<li class="stats__result stats__result--${level}"></li>`)}
      </ul>
    </div>`;

const statsStr = getStats(data);

export default statsStr;
