$(function(){


	const doc =$(document);
	const elementDisplay = $('.classdeladiv');

	doc.on('scroll', function(){

		let positionActuelle = doc.scrollTop();

		elementDisplay.each(function(){


			// let decalage = $(this).offset().top;
			// if(decalage > 1){

			if(positionActuelle > 0){
			$(this).css('display','none')
			}else{
			$(this).css('display','block')
			}

		})
	})
})



{/* <script  src"https://code.jquery.com/jquery_3.4.1.min.js"
	   integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSF1Bw8HfCJo="
         crossorigin="anonymous"></script> */}