<?php

function countdown ($length) {

    $countdown = '<div id="countdown">';

    for ($i = 1; $i <= $length; $i++) {

        $countdown .= '<div class="number_container">
							<img class="up" id="number' . $i . '_up_back" src="" alt="0" />
							<img class="up" id="number' . $i . '_up_front" src="" alt="0" />
							<br />
							<img class="down" id="number' . $i . '_down_front" src="" alt="0" />
							<img class="down" id="number' . $i . '_down_back" src="" style="visibility: hidden;" alt="0" />
						</div>
						%s';
    }

    $countdown .= '</div>';

    $content = sprintf($countdown, '', '', '<span class="space"></span>', '',
        '<span class="colon">:</span>', '', '<span class="colon">:</span>', '', '');


    return $content;
}
