/*
MIT License
Copyright (c) 2018 Cybozu
https://github.com/kintone/SAMPLE-Table-row-count-plug-in/blob/master/LICENSE
*/

jQuery.noConflict();
(function($, PLUGIN_ID) {
  'use strict';
  // Get configuration settings
  var CONF = kintone.plugin.app.getConfig(PLUGIN_ID);
  var $form = $('.js-submit-settings');
  var $cancelButton = $('.js-cancel-button');
  var $table = $('select[name="js-select-table-field"]');
  var $number = $('select[name="js-select-number-field"]');

  function setDropDown() {
    // Retrieve field information, then set dropdown
    return KintoneConfigHelper.getFields(['SUBTABLE', 'NUMBER']).then(function(resp) {
      var $tableDropDown = $table;
      var $numberDropDown = $number;
      var i;
      var $option;
      for (i = 0; i < resp.length; i++) {
        $option = $('<option></option>');
        switch (resp[i].type) {
          case 'SUBTABLE':
            $option.attr('value', resp[i].code);
            $option.text(resp[i].code);
            $tableDropDown.append($option.clone());
            break;
          case 'NUMBER':
            $option.attr('value', resp[i].code);
            $option.text(resp[i].label);
            $numberDropDown.append($option.clone());
            break;
          default:
            break;
        }
      }
      // Set default values
      if (CONF.table_row) {
        $tableDropDown.val(CONF.table_row);
      }
      if (CONF.row_count) {
        $numberDropDown.val(CONF.row_count);
      }
    }, function() {
      return alert('Failed to retrieve fields information');
    });
  }
  $(document).ready(function() {
    // Set dropdown list
    setDropDown();
    // Set input values when 'Save' button is clicked
    $form.on('submit', function(e) {
      var config = [];
      var table_row = $table.val();
      var row_count = $number.val();
      e.preventDefault();

      config.table_row = table_row;
      config.row_count = row_count;
      kintone.plugin.app.setConfig(config, function() {
        alert('The plug-in settings have been saved. Please update the app!');
        window.location.href = '/k/admin/app/flow?app=' + kintone.app.getId();
      });
    });
    // Process when 'Cancel' is clicked
    $cancelButton.on('click', function() {
      window.location.href = '/k/admin/app/' + kintone.app.getId() + '/plugin/';
    });
  });
})(jQuery, kintone.$PLUGIN_ID);
