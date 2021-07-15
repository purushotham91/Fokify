import icons from 'url:../../img/icons.svg';
import previewVeiw from './previewVeiw';
import View from './View';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');

  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it.';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => previewVeiw.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
