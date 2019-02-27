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

    function setDropDown() {
        // Retrieve field information, then set dropdown
        // eslint-disable-next-line no-undef
        return KintoneConfigHelper.getFields().then(function(resp) {
            var $tableDropDown = $('#select_table_field');
            var $numberDropDown = $('#select_number_field');
            for (var i = 0; i < resp.length; i++) {
                var $option = $('<option></option>');
                switch (resp[i].type) {
                    case "SUBTABLE":
                        $option.attr('value', resp[i].code);
                        $option.text(resp[i].code);
                        $tableDropDown.append($option.clone());
                        break;
                    case "NUMBER":
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
        }, function(resp) {
            return alert('Failed to retrieve fields information');
        });
    }
    $(document).ready(function() {
        // Set dropdown list
        setDropDown();
        // Set input values when 'Save' button is clicked
        $('#check-plugin-submit').click(function() {
            var config = [];
            var table_row = $('#select_table_field').val();
            var row_count = $('#select_number_field').val();
            // Check required fields
            if (table_row === '' || row_count === '') {
                alert('Please set required field(s)');
                return;
            }
            config.table_row = table_row;
            config.row_count = row_count;
            kintone.plugin.app.setConfig(config);
        });
        // Process when 'Cancel' is clicked
        $('#check-plugin-cancel').click(function() {
            history.back();
        });
    });
})(jQuery, kintone.$PLUGIN_ID);
