import View from './View';
import icons from 'url:../../img/icons.svg';
import previewVeiw from './previewVeiw';
class ResultsView extends View {
  _errorMessage = 'No recipes found for your query! Please try again.';
  _message = '';
  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    return this._data.map(result => previewVeiw.render(result, false)).join('');
  }
}

export default new ResultsView();
