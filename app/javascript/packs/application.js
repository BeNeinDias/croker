//= require Chart.bundle
//= require highcharts
import "bootstrap";
import { initCharts } from '../components/charts';
import { bindSweetAlertButtonDemo } from '../components/sweetalert';
import { removeFlashes } from '../components/removeFlashes';
import { initTables } from '../components/tablesort';
import { autocompleteSearch } from '../components/autocomplete';
import { toggleActiveClass } from '../components/toggleActiveClass';

// import '../components/buysellcharts';


initCharts();
bindSweetAlertButtonDemo();
removeFlashes();
initTables();
autocompleteSearch();
toggleActiveClass();

