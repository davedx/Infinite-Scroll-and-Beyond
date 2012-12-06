<?php

$offset = 0; // or perhaps $_GET['offset']
$limit = 10; // e.g. $_GET['limit']

// populate an array with dummy results
$results = array();

for($i = $offset; $i<$offset+$limit; $i++) {
	$results[] = array(
		'id' => $i,
		'user_id' => 7,
		'title' => "Title for $i",
		'origin' => "Origin for $i",
		'file_ext' => '.JPG'
		);
}
die(json_encode($results));

