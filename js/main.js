// Fancy jQuery Stuff!!


$(document).ready(function(){
	var player = $('#player'),
		playerWeapon,
		cpu = $('#cpu'),
		cpuWeapon,
		playerSelect = false,
		aClasses = ['scissors', 'rock', 'papers'];

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
				console.log(playerWeapon, cpuWeapon);

			cpu.removeAttr( "class" ).addClass(cpuWeapon);

			// Untentschieden
			if (playerWeapon == cpuWeapon) {
				alert('Unentschieden');
			} 

			// Scissors - Papers
			else if(playerWeapon == 'scissors' && cpuWeapon == 'papers') {
				alert('Spieler gewinnt');
			}

			// Scissors - Rock
			else if(playerWeapon == 'scissors' && cpuWeapon == 'rock') {
				alert('Computer gewinnt');
			}

			// Papers - Rock
			else if(playerWeapon == 'papers' && cpuWeapon == 'rock') {
				alert('Spieler gewinnt');
			}

			// Papers - Scissors
			else if(playerWeapon == 'papers' && cpuWeapon == 'scissors') {
				alert('Computer gewinnt');
			}

			// Rock - Scissors
			else if(playerWeapon == 'rock' && cpuWeapon == 'scissors') {
				alert('Spieler gewinnt');
			}

			// Rock - Papers
			else if(playerWeapon == 'rock' && cpuWeapon == 'papers') {
				alert('Computer gewinnt');
			}
		}
		else{
			alert('Please choose your Weapon')
		}
	})
});
