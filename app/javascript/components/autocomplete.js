import '../stylesheets/autocomplete.css';
import autocomplete from 'js-autocomplete';

const autocompleteSearch = function() {
  const cryptos = JSON.parse(document.getElementById('search-data').dataset.cryptocurrencies);
  const searchInput = document.getElementById('query');

  if (cryptos && searchInput) {
    new autocomplete({
      selector: searchInput,
      minChars: 1,
      source: function(term, suggest){
          term = term.toLowerCase();
          const choices = cryptos;
          const matches = [];
          for (let i = 0; i < choices.length; i++)
              if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
          suggest(matches);
      },
    });
  }
};

export { autocompleteSearch };
