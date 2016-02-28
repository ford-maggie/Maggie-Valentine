function myIntro(){
     alert("Happy Valentine's Day!\n\nMaggie F. loves you and now she’ll prove it. She’s ready to share her secret with the world....Maggie is actually a Fortune Teller...a visionary, really. Normally, her gift is limited to predicting forthcoming NEW YORKER articles, but with the help of some coding magic (and the coding gods), she can now predict your FUTURE!!\n\nLet's get started!");
     };

myIntro(); 

function warning(){
     if (confirm("WARNING...\n\nWhat you learn about your future today may be potentially harmful. Maggie F. is not responsible for the despair that may or may not follow.\n\nAre you sure you want to continue?") === true) {
     		alert("Yay! Don't worry! Maggie F. won't be too brutal. Let's begin...you just need to answer a few questions."); 
     	} else {
     		alert("Too bad! You are playing anyways! Let's begin, bitch...you just need to answer a few questions.");
     	}; 
	}; 

warning(); 

var getNames = function() {
	var girls = prompt("gimme the names of 3 girls.\n\nyou probably shouldn’t list your momma or sister or aunt or 1st/2nd cousins. just a suggestion though! but you really shouldn’t.", "Separate with commas!!").toUpperCase();
  
var girlsSeparated = girls.split(",");

if (girlsSeparated.length !== 3) { 
	alert("Did you remember to separate the girls with commas? try again!"); 
	getNames();  
} else {
	response.girlOne = girlsSeparated[0]; 
	response.girlTwo = girlsSeparated[1];
	response.girlThree = girlsSeparated[2]; 
};
}; 

var response = {}; 
getNames(); 

var anotherGirl = function() {
	var lesbian = prompt("Ah! Trust me! you don't want to include " + response.girlOne + ". The coding gods may or may not have seen her outside an STD clinic a couple weeks back. plus, she’s kinda let herself go recently and that’s no fun.", "gimme one more girl, please!").toUpperCase(); 

window.lesbian = lesbian; 

}; 

anotherGirl(); 

var getBoys = function () {
	var boys = prompt("List 3 BFFs. Like, if you got a horrible, excruciating disease tomorrow that causes your penis to fall off, who would tell first? no mommas or daddies.", "Separate the BFFs with commas!!").toUpperCase(); 

var boysSeparated = boys.split(","); 

if (boysSeparated.length !== 3) {
	alert("Did you remember to separate the BFFs with commas? try again!"); 
	getBoys();  
} else {
	answer.boyOne = boysSeparated[0]; 
	answer.boyTwo = boysSeparated[1];
	answer.boyThree = boysSeparated[2]; 
};
}; 

var answer = {}; 
getBoys(); 


var pretty = function() {
	var denial = prompt("Do you believe you are pretty?", "YES or NO?").toUpperCase(); 

	if (denial === "YES") {
		alert("But not prettier than Maggie F.! Best to know that now!"); 
	} else if (denial === "NO") {
		alert("Awwww, I'm sorry! someone finds you beautiful! just not Maggie F."); 
	} else {
		alert("ughh, let's try this again. YES or NO? no smartass answers!"); 
		pretty(); 
	};
}; 

pretty(); 

var girlProfession = function() {
	var jobs = prompt("The coding gods have issued an ultimatum…financial ruin or marrying someone. You choose the latter because you like buying pretty things. Which profession would you prefer your new wife had? List 3 professions!\n\nKeep in mind that your wife is only a 5 and even though her BMI is well within the normal range, she’s not exactly what you dreamed of when you were 12 and trying on socks every morning before school.\n\nwhich means...no models allowed!", "Separate with commas, please!").toUpperCase();  

var profSeparated = jobs.split(","); 

if (profSeparated.length !== 3) {
	alert("Separate the jobs with commas! try again!"); 
	girlProfession();  
} else {
	future.jobOne = profSeparated[0]; 
	future.jobTwo = profSeparated[1];
	future.jobThree = profSeparated[2]; 
};
}; 

var future = {}; 
girlProfession(); 

var getCities = function() {
	var city = prompt("list 3 of your favorite cities. Ones you might want to live in!", "Separate with commas! oh, and Maggie F.'s birthday is Feb. 24th.").toUpperCase(); 

var citySeparated = city.split(","); 

if (citySeparated.length !== 3) {
	alert("Separate with commas! follow instructions!"); 
	getCities(); 
} else {
	place.cityOne = citySeparated[0]; 
	place.cityTwo = citySeparated[1];
	place.cityThree = citySeparated[2]; 
}; 
}; 

var place = {}; 
getCities(); 

var anotherCity = function() {
	var deathCity = prompt("Uh oh! you don't want to list" + place.cityTwo + ". The coding gods see BLOOD and BEARS and MISSING TEETH and IMPOTENCE...just lots of ugliness if you move there. Pick another city!", "Maggie F's birthday is Feb. 24th, and she expects a multitude of cookies sent to her at that time.").toUpperCase(); 

window.deathCity = deathCity; 

}; 

anotherCity();

var death = prompt("Pick a random STD. doesn't mean you will get it! just for fun...trust the power of Maggie F. :)").toUpperCase(); 

var diseases = {
	HERPES: 'TEACHABLE MOMENT: 1 out of 4 women have genital herpes. and 1 out of 2 women (unmarried!) from the ages 40 to 50 have genital herpes...meaning, say NO to the Cougars! and those who self identify as poly.\n\nand always remember, VD stands for more than just Valentine\'s Day. Oh, and the coding gods forsee a special woman in your future...her name starts with an L. STAY FAR AWAY. NO MATTER HER HOTNESS. Trust the code. Trust.',
	CHLAMYDIA: 'if you didn\'t want babies, this STD is for you! congrats! causes infertility in women!\n\nand always remember, VD stands for more than just Valentine\'s Day. Oh, and the coding gods forsee a hot bitch in your future. She hates men, so she seeks out boys who aren\'t as hot as her and infects them with Chlamydia so they can\'t procreate. Trust the coding gods. Stay away from any woman hotter than you!', 
	HPV: 'TEACHABLE MOMENT: HPV will not affect you! yay! however, it will cause women to die from an excruciating death...cervical cancer. If you are a masochist/misogynist, this STD is for you!\n\nand always remember, VD stands for more than just Valentine\'s Day.', 
	HIV: 'TEACHABLE MOMENT: HIV really sucks...but you know that. Herpes, on the other hand, you may not know about. 1 out of 4 women have genital herpes. and 1 out of 2 women (unmarried!) from the ages 40 to 50 have genital herpes...meaning, say NO to the Cougars! and those who self identify as poly.\n\nand always remember, VD stands for more than just Valentine\'s Day.',
	AIDS: 'TEACHABLE MOMENT: AIDS really sucks...but you know that. Herpes, on the other hand, you may not know about. 1 out of 4 women have genital herpes. and 1 out of 2 women (unmarried!) from the ages 40 to 50 have genital herpes...meaning, say NO to the Cougars! and those who self identify as poly.\n\nand always remember, VD stands for more than just Valentine\'s Day.',
	HEPATITIS: 'TEACHABLE MOMENT: Causes liver disease! no more alcohol for you! the most boring of the STDs.\n\nand always remember, VD stands for more than just Valentine\'s Day.',
	CRABS: 'Ah, man that\'s gonna hurt! TEACHABLE MOMENT: you can avoid crabs if you choose to go Brazilian or choose to do Brazilians.\n\nand always remember, VD stands for more than just Valentine\'s Day.', 
	GONORRHEA: 'TEACHABLE MOMENT: even though you think gonorrhea is a curable/treatable disease, there\'s a SUPER STRAIN in town. Slutty humans who have this SUPER DUPER STRAIN are resistant to antibiotics, and now their babies will be born blind.\n\nOh, and the coding gods forsee a girl in your future...she\'s super hot and hates men. She seeks out men who aren\'t as hot as her. STAY AWAY. FAR AWAY. Trust the coding gods. Stay away from any woman hotter than you!', 
	SYPHILIS: 'TEACHABLE MOMENT: you get sores but you probably won\'t die. plus, it\'s curable, so you won\'t die metaphorically either...you know, cry all day and every day because you have an STD and you want to kill yourself. That won\'t happen! yay!\n\nand always remember, VD stands for more than just Valentine\'s Day.', 
	defaultResponse: 'you either can\'t spell, picked an obscure STD, or you are being a smartass. Either one, just remember: VD stands for more than just Valentine\'s Day. Oh, and the coding gods forsee a special woman in your future...her name starts with an A. STAY FAR AWAY. NO MATTER HER HOTNESS. Trust the code. Trust Maggie F.' 
}; 

alert(diseases[death] || diseases.defaultResponse); 
	
var smart = function() {
	var maggie = prompt("do you believe you can outsmart Maggie F.? YES or NO?","Just type NO.").toUpperCase(); 

	if (maggie === "YES") {
		alert("Margaret's still prettier than you!"); 
	} else if (maggie === "NO") {
		alert("Good, honest head on your shoulders. Maggie F. is smarter (and prettier....always prettier) than you. You may have a good fortune coming :)"); 
	} else {
		alert("ughh, let's try this again. YES or NO? no smartass answers!"); 
		smart(); 
	};
}; 

smart(); 

var die = function() {
	var brokenHeart = prompt("would you rather die of a broken heart or being mauled by a bunny? of course, it's a big bunny....type BROKEN or BUNNY....thank you!", "Reminder, Maggie F.'s birthday is Feb 24th, and she expects a multitude of cookies sent to her at this time.").toUpperCase(); 

	if (brokenHeart === "BROKEN") {
		alert("The coding gods will make sure this doesn't happen! No one deserves a broken heart! It's Valentine's Day!"); 
	} else if (brokenHeart === "BUNNY") {
		alert("It's going to be a big bunny! :("); 
	} else {
		alert("ughh, let's try this again. BROKEN or BUNNY? no smartass answers! or the coding gods will take revenge!"); 
		die(); 
	};
}; 

die(); 

function almost(){
     alert("almost done! just one more question...and don't take it too lightly. The coding gods are watching! and Maggie F.'s birthday really is Feb. 24th, and she really really does like cookies.");
     };

almost(); 

function lastQuestion(){
	var number = prompt("Pick a number from 1 to 10."); 
	if (number <= 10) {
		alert("yay! don't be scared for what comes next. It's Valentine's day after all....how bad could it be? even if Maggie F. is deciding your future.");
		console.log(number); 
	} else {
		alert("ugh...pick a (whole) number 1 to 10! don't mess with the coding gods. they are watching!"); 
		lastQuestion(); 
		}; 

var newNumber = parseInt(number);
window.newNumber = newNumber; 

}; 

lastQuestion();

var wifeChoice = Math.random();
if (wifeChoice < 0.50) {
	wifeChoice = response.girlTwo
} else {
	wifeChoice = response.girlThree
} console.log(wifeChoice); 

var boyChoice = Math.random();
if (boyChoice < 0.34) {
	boyChoice = answer.boyOne
} else if (boyChoice <= 0.67) {
	boyChoice = answer.boyTwo
} else {
	boyChoice = answer.boyThree
} console.log(boyChoice); 

var jobChoice = Math.random();
if (jobChoice < 0.34) {
	jobChoice = future.jobOne
} else if (jobChoice <= 0.67) {
	jobChoice = future.jobTwo
} else {
	jobChoice = future.jobThree
} console.log(jobChoice); 

var cityChoice = Math.random();
if (cityChoice < 0.50) {
	cityChoice = place.cityOne
} else {
	cityChoice = place.cityThree 
} console.log(cityChoice); 

function lastQuestion(){
	var number = prompt("Pick a number from 1 to 8."); 
	if (number <= 8) {
		alert("yay! don't be scared for what comes next. It's Valentine's Day after all....how bad could it be? even if Maggie F. is deciding your future.");
		console.log(number); 
	} else {
		alert("ugh...pick a (whole) number 1 to 8! don't mess with the coding gods. they are watching!"); 
		lastQuestion(); 
		}; 

var newNumber = parseInt(number);
window.newNumber = newNumber; 

}; 

var yourFuture = newNumber;

var theResult = {

	1: 'You do get married! ' + wifeChoice + ' only marries you because ' + boyChoice + ' makes her. They have been conspiring and fucking for over a decade together as your fortune grows to $' + newNumber + ',000,000 in the bank and sizable real-estate investments in ' + cityChoice + ' and ' + deathCity + '. But the good news is that before they disappear to an island where only rich ppl go, you catch your wife packing lingerie for a business trip. To throw off suspicion, she finally agrees to have lesbian love with ' + lesbian + ' in front of you!',  

	2: 'Number of babies you get: ' + newNumber + '. Unfortunately, you never marry the mother, ' + wifeChoice + '. She only fucked you to guarantee child support, what Maggie F. calls BEST INSURANCE POLICY ever. It was actually ' + boyChoice + '\'s idea. Your friend actually got ' + lesbian + ' pregnant once by accident, too. Your ex and friend now have houses in ' + cityChoice + ' and ' + deathCity + ', spending the $' + newNumber + '0,000/monthly check like no tomorrow! Oh...you start dating a ' + jobChoice + ', but she breaks up with you because you have no money.', 

	3: 'The bitch ' + wifeChoice + ' decides to leave you at the altar. But it\'s kinda ok because she leaves you for ' + lesbian + ', and as a parting gift, they let you watch them for only one night. IN YOUR DREAMS! NEVER WILL HAPPEN! You are on the brink of suicide until ' + boyChoice + ' steps in offering you $' + newNumber + ',000,000 because you are that great of a guy. You move to ' + cityChoice + ', but no women want you there. So you then move to ' + deathCity + ' where you find your true love! She\'s a ' + jobChoice + ' (and will let you watch! :)',  

	4: 'You have 3 daughters named Margaret with ' + wifeChoice + '. Margaret #2 marries ' + boyChoice + ', and you get really upset because your friend is so old with no money. They move to ' + cityChoice + ' once you cut her off, but before they leave, they embezzle $' + newNumber + ',000,000 from your estate. Margaret #3 falls in love with ' + lesbian + ', but they embezzle no money so you are happy with the match. You gift them a house in ' + deathCity + ', where Margaret #3 realizes her dream of becoming a ' + jobChoice + '. Margaret #1 is boring.', 

	5: 'Unfortunately, you contracted herpes from ' + wifeChoice + '. She denies her involvement, of course, until ' + boyChoice + ' admits to the affair and the herpes. Full of sadness because of this betrayal...and knowing that no one will love you anymore, you move to ' + cityChoice + '. You meet a ' + jobChoice + ' who also has herpes and you live happily ever after with $' + newNumber + ',000,000 in the bank. Your new wife is then transferred to ' + deathCity + ', where you have ' + newNumber + ' children named Margaret. ' + lesbian + ' is the godmomma!', 

	6: 'The bitch ' + lesbian + ' pines for you for years as you fall hard for your wife,' + wifeChoice + '. She gets you drunk one night to fool you into sleeping with her, and you father her bastard child. Your wife leaves you because of the betrayal...gets $' + newNumber + ',000,000 in the settlement and buys her new lover ' + boyChoice + ' a house in ' + deathCity + '. You have so little money left that babyMomma falls out of love and moves to ' + cityChoice + '. She becomes a ' + jobChoice + ' to provide a better life for your child. You don\'t get herpes though.', 

	7: 'You live a pretty boring life until you marry ' + wifeChoice + '. She supports you as a ' + jobChoice + ' while you realize your dream of becoming a ballet dancer in the great city of ' + cityChoice + '. Only, she gets sick of supporting you and starts fucking ' + boyChoice + '. You foolishly signed a prenup, so you got no money in the divorce. On the brighter side, you start a fling with ' + lesbian + ', and even though she\'s let herself go a bit, she\'s a CTO who can financially support your dancer lifestyle. You have ' + newNumber + ' children together.',  

	8: 'The great news is that you don\'t get herpes. The bad news is that you lose $' + newNumber + ',000,000 over night. What happened was...co-conspirators ' + lesbian + ' and ' + wifeChoice + ', both ' + jobChoice + 's, trick you into believing that they have a great business idea. Because they are so hot (kissing), you hand them over a blank check. They skip town with all your money and move to ' + cityChoice + ', where they run into ' + boyChoice + '. This friend of yours reports the hot bitches to the authorities, and you recover 1/2 of what you lost.'
}; 


alert(theResult[yourFuture]); 

alert("Have a very special Valentine's Day! Maggie F. and the coding gods wishing you all the love in the world!"); 
alert("Maggie F. dedicates this Valentine to her first/only nephew, Reed B. Let's hope he doesn't meet a girl like his aunt one day.\n\nSpecial Thanks to...\n\n+ Roommate #1 for feeding Maggie F. fancy chocolate cake for V-Day.\n+ Roommate #2 for not locking his door every time Maggie F. had a code question.\n+ Favorite Former Coworker for answering code questions while on a romantic getaway with his hot wife (...but not hotter than Maggie F.).\n+ the short German warrior.");