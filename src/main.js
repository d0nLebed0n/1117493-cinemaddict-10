'use strict';

const Count = {
  CARD: 5,
  SEGMENTS: 2,
  EXTRA: 2
};

const Nodes = {
  BODY: document.querySelector(`body`),
  HEADER: document.querySelector(`.header`),
  MAIN: document.querySelector(`.main`)
};

const createUserRank = () => {
  return (`<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`)
};

const createFilmCard = () => {
  return (`<article class="film-card">
  <h3 class="film-card__title">The Dance of Life</h3>
  <p class="film-card__rating">8.3</p>
  <p class="film-card__info">
    <span class="film-card__year">1929</span>
    <span class="film-card__duration">1h 55m</span>
    <span class="film-card__genre">Musical</span>
  </p>
  <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
  <a class="film-card__comments">5 comments</a>
  <form class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
  </form>
</article>`)
};

const createPopup = () => {
  return (`<section class="film-details" style="display: none">
  <form class="film-details__inner" action="" method="get">
    <div class="form-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="">
          <p class="film-details__age">18+</p>
        </div>
        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">The Great Flamarion</h3>
              <p class="film-details__title-original">Original: The Great Flamarion</p>
            </div>
            <div class="film-details__rating">
              <p class="film-details__total-rating">8.9</p>
            </div>
          </div>
          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">Anthony Mann</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">30 March 1945</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">1h 18m</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">USA</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                <span class="film-details__genre">Drama</span>
                <span class="film-details__genre">Film-Noir</span>
                <span class="film-details__genre">Mystery</span></td>
            </tr>
          </table>
          <p class="film-details__film-description">
            The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
          </p>
        </div>
      </div>
      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>
    <div class="form-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">0</span></h3>
        <ul class="film-details__comments-list"></ul>
        <div class="film-details__new-comment">
          <div for="add-emoji" class="film-details__add-emoji-label">
            <img src="images/emoji/smile.png" width="55" height="55" alt="emoji">
          </div>
          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">Great movie!</textarea>
          </label>
          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="sleeping" checked>
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="neutral-face">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-gpuke" value="grinning">
            <label class="film-details__emoji-label" for="emoji-gpuke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="grinning">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`)
};

const createNavigation = () => {
  return (`<nav class="main-navigation">
  <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
  <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
  <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
  <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
  <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
</nav>`)
};

const createSort = () => {
  return (`<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`)
};

const createFilmListTemplate = () => {
  return (`<section class="films">
    <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section>
</section>`)
};

const createExtraList = () => {
  return (`<section class="films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container"></div>
</section>`)
};


const createShowButton = () => {
  return (`<button class="films-list__show-more">Show more</button>`)
};

const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderElements = () => {

  renderElement(Nodes.HEADER, createUserRank(), `beforeend`);
  renderElement(Nodes.MAIN, createNavigation(), `beforeend`);
  renderElement(Nodes.MAIN, createSort(), `beforeend`);
  renderElement(Nodes.MAIN, createFilmListTemplate(), `beforeend`);

  const films = Nodes.MAIN.querySelector(`.films`);
  const filmsList = Nodes.MAIN.querySelector(`.films-list`);
  const filmsListContainer = Nodes.MAIN.querySelector(`.films-list__container`);

  new Array(Count.CARD).fill(``).forEach(() => renderElement(filmsListContainer, createFilmCard(), `beforeend`));
  renderElement(filmsList, createShowButton(), `beforeend`);
  new Array(Count.SEGMENTS).fill(``).forEach(() => renderElement(films, createExtraList(), `beforeend`));

  const filmsExtraArr = films.querySelectorAll(`.films-list--extra`);
  new Array(Count.EXTRA).fill(``).forEach(() => renderElement( filmsExtraArr[0].querySelector(`.films-list__container`), createFilmCard(), `beforeend`))
  new Array(Count.EXTRA).fill(``).forEach(() => renderElement( filmsExtraArr[1].querySelector(`.films-list__container`), createFilmCard(), `beforeend`))
  /*filmsExtraArr.forEach(() =>
    new Array(Count.EXTRA).fill(``).forEach(() => renderElement( filmsExtraArr[i].querySelector(`.films-list__container`), createFilmCard(), `beforeend`))

    не могу понять куда счётчик воткнуть, а this здесь window
  )*/
};



renderElements();