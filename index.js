window.addEventListener("load", () => {
		const sounds = document.querySelectorAll(".sound");
		const SoundBox = document.querySelectorAll(".SoundBox div");
        
		 SoundBox.forEach((SoundBoxNew, index) => {
			SoundBoxNew.addEventListener("click", function() {
				sounds[index].currentTime = 0 ;
				sounds[index].play();
			});
		});
});

