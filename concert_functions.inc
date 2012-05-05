<?php

/**
 * @file
 * Functions file for Concerts module.
 *
 */


function _concert_content_type_venue_options_list() {
 
 $results = db_select('node', 'n')
    ->fields('n', array('nid', 'title'))
    ->condition('n.status', 1)
    ->condition('n.type', 'venue')
    ->execute();
    
 $options = array();
 foreach ($results as $node) {
  $options[$node->nid] = $node->title;
 }
 return $options;
}

/**
function _concert_content_type_venue_options_list()  {
  $options = array(
    1 => 'Option A',
    2 => 'Option 2',
    3 => 'Option C',
    4 => 'Option 4',
    5 => 'Option E',
    6 => 'Option 6',
  );
  return $options;
}
**/