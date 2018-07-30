import 'jquery';

import 'jquery-ui/ui/widgets/sortable';

import 'popper.js';

import 'bootstrap';

import 'jquery-ui/ui/disable-selection';

import getMsg from './service/service';

require('font-awesome/css/font-awesome.css');

$(getMsg().then((msg) => {
  $('#test').html(msg);
}));
