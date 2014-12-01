/* 	------------------------------------------------------------------------
 *	Schere-Stein- Papier v 1.2
 *	Copyright Manuel Künstler
 *	------------------------------------------------------------------------ */

$(document).ready(function(){

	/*	------------------------------------------------------------------------
	 *	Global Variables
	 *	------------------------------------------------------------------------ */
	
	var player = $('#player'),
		playerWeapon,
		cpu = $('#cpu'),
		cpuWeapon,
		playerSelect = false,
		aClasses = ['scissors', 'rock', 'papers'],
		highscore = 0;

	/*	------------------------------------------------------------------------
	 *	Global Functions
	 *	------------------------------------------------------------------------ */

	 function message(text) {
	 	$('.message h1').stop().text(text).fadeIn('fast').delay(500).fadeOut('slow');
	};

	function playerWin(){
		message('Du hast gewonnen!');
		highscore++;
		$('#highscore').text(highscore);
	};

	function cpuWin(){
		message('Du hast verloren!');
		highscore = 0;				
		$('#highscore').text(highscore);
	};


	/*	------------------------------------------------------------------------
	 *	Core Functions
	 *	------------------------------------------------------------------------ */

	// player select
	$('.controlls button').click(function(){
		var weapon = $(this).attr('id');
		
		$('.controlls button, #player').removeAttr( "class" ); //reset
		$(this).addClass('active');
		player.addClass(weapon);
		playerSelect = true;
	})

	// play action
	$('#start-game').click(function(){
		if(playerSelect){
			var random = Math.round(Math.random()*2),
				playerWeapon = player.attr('class');
				cpuWeapon = aClasses[random];

			cpu.removeAttr( "class" ).addClass(cpuWeapon);


			// Untentschieden
			if (playerWeapon == cpuWeapon) {
				message('Unentschieden');
			} 

			// Scissors - Papers
			else if(playerWeapon == 'scissors' && cpuWeapon == 'papers') {
				playerWin();
			}

			// Scissors - Rock
			else if(playerWeapon == 'scissors' && cpuWeapon == 'rock') {
				cpuWin();
			}

			// Papers - Rock
			else if(playerWeapon == 'papers' && cpuWeapon == 'rock') {
				playerWin();
			}

			// Papers - Scissors
			else if(playerWeapon == 'papers' && cpuWeapon == 'scissors') {
				cpuWin();
			}

			// Rock - Scissors
			else if(playerWeapon == 'rock' && cpuWeapon == 'scissors') {
				playerWin();
			}

			// Rock - Papers
			else if(playerWeapon == 'rock' && cpuWeapon == 'papers') {
				cpuWin();
			}

			// Log
			$('.log-list').prepend('<li> Spieler: ' +playerWeapon+' - CPU: ' +cpuWeapon+'</li>');
		}
		else{
			alert('Please choose your Weapon')
		}
	})
});
