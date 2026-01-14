
const grid = document.getElementById('goat-grid');
const galleryPage = document.getElementById('gallery-scene');
const quizPage = document.getElementById('quiz-scene');
const optionsContainer = document.getElementById('options-container');
const resultPage = document.getElementById('result-scene');
const video = document.getElementById('reward-video');
const welcomePage = document.getElementById('welcomePage');
const overlay = document.
getElementById('overlay');
const topGoats = document.getElementById('topGoats');
const subGoats = document.getElementById('goats');
const headsUp = document.querySelector('.heads-up');
const sentinel = document.getElementById('sentinel');
const scoreTracker = document.getElementById('scoreBoard');
const bgMusic = document.getElementById('bg-music');
const resultMusic = document.getElementById('result-music');
const videoWrapper = document.getElementById('video-wrapper');
const scoreContainer = document.getElementById('score-container');
const nowPlayin = document.getElementById('nowPlayin');
let Timer;

let score = 0;
let selectedGoat = null;
let currentQuestionIndex = 0;



/*   Game database  */
const goats = {
	messi: {
	name: "Lionel Messi",
	profilePic: "galleryImg/4messi.jpg",
	videoReward: "",
	questions: [
		{
			text: "Messi won his first Olympic Gold Medal in which city?",
			image: "images/m1.jpg",
			options: ["London", "Beijing", "Athens", "Rio"],
			correct: 1
		},
		
		{
			text: "Which goalkeeper has Messi scored against the most in his career?",
			image: "images/m2.jpg",
			options: ["Casillas", "Oblak", "Diego Alves", "Neuer"],
			correct: 2
		},
		
		{
			text: "In 2012, Messi set the record for most goals in a calendar year. How many did he score?",
			image: "images/m3.jpeg",
			options: ["82", "85", "91", "96"],
			correct: 2
		},
		
		{
			text: "Who provided the assist for Messi's first ever official goal for FC Barcelona?",
			image: "images/m4.jpg",
			options: ["Xavi", "Ronaldinho", "Iniesta", "Deco"],
			correct: 1
		},
		
	  {
				text: "Identify Messi's goal celebration?",
				options: ["images/m6.jpg", "images/m5.jpg", "images/m3.jpeg", "images/m4.jpg"],
				correct: 0
			}
	]
}, /*  messi   */
	
	cr7: {
		name: "Cristiano Ronaldo",
		profilePic: "galleryImg/2cr7.jpg",
		videoReward: "",
		questions: [
			{
				text: "Against which club did Ronaldo score his famous 'gravity-defying' header for Juventus?",
				image: "images/r1.jpg",
				options: ["Man Utd", "Sampdoria", "Torino", "AC Milan"],
				correct: 1
			},
			
			{
				text: "Ronaldo is the all-time top scorer in the Champions League. How many titles has he won?",
				image: "images/r2.jpg",
				options: ["3", "4", "5", "6"],
				correct: 0
			},
			
			{
				text: "Before wearing #7 at Real Madrid, which number did Cristiano wear in his first season?",
				image: "images/r9.jpg",
				options: ["9", "10", "11", "28"],
				correct: 0
			},
			
			{
				text: "error 404 not found🧐",
				image: "images/r6.jpg",
				options: ["Benefica", "Porto", "Sporting CP", "Braga"],
				correct: 2
			},
			
			{
				text: "what does Ronaldo say during his goal celebration?",
				image: "images/r7.jpg",
				options: ["cuuu", "suiuu", "siuuu", "suuuu"],
				correct: 2
			},
			
			{
				text: "Identify cr7 goal celebration?",
        image: "",
				options: ["images/r2.jpg", "images/r5.jpg", "images/r9.jpg", "images/r8.jpg"],
				correct: 1
			}
			
		] //  questions 
	}, /*  cr7 */
	
	ronaldinho: {
	name: "Ronaldinho",
	profilePic: "galleryImg/rd.jpg",
	videoReward: "",
	questions: [
		{
			text: "Which club did Ronaldinho join when he moved from Paris Saint-Germain in 2003?",
			image: "images/rd1.jpeg",
			options: ["AC Milan", "Barcelona", "Chelsea", "Real Madrid"],
			correct: 1
		},
		
		{
			text: "What year did Ronaldinho win the FIFA World Player of the Year award for the first time?",
			image: "images/rd2.jpeg",
			options: ["2002", "2003", "2004", "2005"],
			correct: 2
		},
		
		{
			text: "Ronaldinho scored two free kicks against which English club in the 2004–05 Champions League?",
			image: "images/rd3.jpeg",
			options: ["Chelsea", "Manchester United", "Arsenal", "Liverpool"],
			correct: 0
		},
		
		{
			text: "Which Brazilian club did Ronaldinho play for after leaving AC Milan?",
			image: "images/rd4.jpg",
			options: ["Flamengo", "Grêmio", "Atlético Mineiro", "Santos"],
			correct: 2
		},
		
		{
			text: "Ronaldinho is famous for his trademark skill move called the...",
			image: "images/rd5.jpeg",
			options: ["Elastico", "Rabona", "Cruyff Turn", "Sombrero Flick"],
			correct: 0
		},
		
		{
				text: "Identify Ronaldinho goal celebration?",
				options: ["images/rd2.jpeg", "images/rd5.jpeg", "images/rdn99.jpg", "images/rd3.jpeg"],
				correct: 2
			}
		
	]
}, /*  cr7 */
	
	neymar: {
	name: "Neymar Jr",
	profilePic: "galleryImg/ney1.jpeg",
	videoReward: "",
	questions: [
		{
			text: "Which Brazilian club did Neymar play for before joining Barcelona?",
			image: "images/ney1.jpg",
			options: ["Flamengo", "Santos", "Corinthians", "Palmeiras"],
			correct: 1
		},
		{
			text: "In which year did Neymar join Paris Saint-Germain (PSG)?",
			image: "images/ney2.jpg",
			options: ["2015", "2016", "2017", "2018"],
			correct: 2
		},
		{
			text: "Which number does Neymar usually wear for Brazil?",
			image: "images/ney3.jpg",
			options: ["7", "9", "10", "11"],
			correct: 2
		},
		{
			text: "At which Olympic Games did Neymar win a gold medal with Brazil?",
			image: "images/ney4.jpg",
			options: ["London 2012", "Rio 2016", "Tokyo 2020", "Beijing 2008"],
			correct: 1
		},
		{
			text: "Who did Neymar assist for Barcelona’s third goal in the 2015 UCL final?",
			image: "images/ney5.jpg",
			options: ["Suárez", "Messi", "Rakitić", "Iniesta"],
			correct: 0
		},
		{
			text: "Neymar is famous for his dazzling skills. What’s his signature move called?",
			image: "images/ney6.jpg",
			options: ["Elastico", "Rabona", "Rainbow Flick", "Step Over"],
			correct: 2
		},
		{
			text: "How many goals did Neymar score during the 2014 FIFA World Cup before injury?",
			image: "images/ney7.jpg",
			options: ["2", "4", "5", "6"],
			correct: 1
		},
		{
			text: "Which trio was Neymar part of at Barcelona nicknamed ‘MSN’?",
			image: "images/ney8.jpg",
			options: ["Messi, Suárez, Neymar", "Modric, Silva, Neymar", "Mane, Salah, Neymar", "Mbappé, Messi, Neymar"],
			correct: 0
		},
		{
			text: "Neymar surpassed which Brazilian legend’s international goal record in 2023?",
			image: "images/ney9.jpg",
			options: ["Rivaldo", "Pele", "Ronaldo", "Romario"],
			correct: 1
		},
		{
			text: "Which country did Neymar face in his senior Brazil debut in 2010?",
			image: "images/ney10.jpg",
			options: ["USA", "Argentina", "England", "France"],
			correct: 0
		},
		{
			text: "What brand sponsors most of Neymar’s football boots?",
			image: "images/ney11.jpeg",
			options: ["Puma", "Nike", "Adidas", "New Balance"],
			correct: 0
		},
		{
			text: "In 2013, Neymar won the FIFA Confederations Cup with Brazil — who did they beat in the final?",
			image: "images/ney12.jpg",
			options: ["Spain", "Germany", "Argentina", "Italy"],
			correct: 0
		},
		
		{
				text: "Identify Neymar jr goal celebration?",
				options: ["images/ney10.jpg", "images/ney99.jpg", "images/ney9.jpg", "images/r5.jpg"],
				correct: 1
			}
		
	]
}, /*  cr7 */
	
	dybala: {
	name: "Paulo Dybala",
	profilePic: "galleryImg/dy4.jpg",
	videoReward: "",
	questions: [
		{
			text: "Which club did Paulo Dybala join after leaving Juventus in 2022?",
			image: "images/dy1.jpeg",
			options: ["Inter Milan", "AS Roma", "Napoli", "Atalanta"],
			correct: 1
		},
		{
			text: "What jersey number does Dybala wear at AS Roma?",
			image: "images/dy5.jpg",
			options: ["9", "10", "11", "21"],
			correct: 3
		},
		{
			text: "Which country does Paulo Dybala represent internationally?",
			image: "images/dy3.jpg",
			options: ["Spain", "Italy", "Argentina", "Uruguay"],
			correct: 2
		},
		{
			text: "What is Paulo Dybala’s famous goal celebration called?",
			image: "images/dy10.jpg",
			options: ["The Mask", "The Sword", "The Sniper", "The Gladiator"],
			correct: 0
		},
	
		{
			text: "Which famous Argentine player has Dybala often been compared to?",
			image: "images/dy6.jpg",
			options: ["Maradona", "Messi", "Batistuta", "Aimar"],
			correct: 1
		},
		
		{
			text: "Which legendary player did Dybala replace in Argentina’s 2018 World Cup squad?",
			image: "images/dy7.jpg",
			options: ["Carlos Tevez", "Gonzalo Higuaín", "Sergio Aguero", "Angel Di Maria"],
			correct: 1
		},
		{
			text: "Dybala scored in the UEFA Europa League final against which team in 2023?",
			image: "images/dy8.jpg",
			options: ["Sevilla", "Leverkusen", "Feyenoord", "Sporting Lisbon"],
			correct: 0
		},
		{
			text: "What is Paulo Dybala’s preferred foot?",
			image: "images/dy9.jpg",
			options: ["Right", "Left", "Both", "Ambidextrous"],
			correct: 1
		},
		
		{
				text: "Identify Dybala's goal celebration?",
				options: ["images/k2.jpeg", "images/r5.jpg", "images/dy3.jpg", "galleryimg/dy4.jpg"],
				correct: 3
			}
		
	]
}, /*  cr7 */
	
	kdb: {
	name: "Kevin De Bruyne",
	profilePic: "galleryImg/de.jpg",
	videoReward: "",
	questions: [
		{
			text: "Which English club did Kevin De Bruyne play for before joining Manchester City?",
			image: "images/kde1.jpg",
			options: ["Chelsea", "Liverpool", "Everton", "Leicester City"],
			correct: 0
		},
		{
			text: "De Bruyne wears which shirt number for Manchester City?",
			image: "images/de2.jpeg",
			options: ["8", "10", "14", "17"],
			correct: 3
		},
		{
			text: "Which national team does Kevin De Bruyne represent?",
			image: "images/de8.jpg",
			options: ["Netherlands", "Belgium", "Germany", "Sweden"],
			correct: 1
		},
		{
			text: "De Bruyne won the Premier League Player of the Season in which year for the first time?",
			image: "images/de4.jpeg",
			options: ["2018", "2019", "2020", "2021"],
			correct: 2
		},
		{
			text: "What is De Bruyne’s trademark skill on the field?",
			image: "images/de5.jpg",
			options: ["Speed", "Long shots", "Passing vision", "Heading"],
			correct: 2
		},
		{
			text: "Which club did De Bruyne start his professional career with?",
			image: "images/de6.jpg",
			options: ["Genk", "Wolfsburg", "Chelsea", "Anderlecht"],
			correct: 0
		},
		
		{
				text: "Identify Kevin De Bruyne goal celebration?",
				options: ["images/r2.jpg", "images/k99.jpg", "images/de4.jpeg", "images/kde99.jpg"],
				correct: 3
			}
		
	]
}, /*  cr7 */
	
	mbappe: {
	name: "Kylian Mbappé",
	profilePic: "galleryImg/k.jpeg",
	videoReward: "",
	questions: [
		{
			text: "Which club did Kylian Mbappé play for before joining Paris Saint-Germain?",
			image: "images/k1.jpg",
			options: ["AS Monaco", "Lille", "Marseille", "Lyon"],
			correct: 0
		},
		{
			text: "In which year did Mbappé win the FIFA World Cup with France?",
			image: "images/k2.jpeg",
			options: ["2014", "2018", "2022", "2016"],
			correct: 1
		},
		{
			text: "Against which team did Mbappé score a hat-trick in the 2022 World Cup final?",
			image: "images/k3.jpg",
			options: ["Croatia", "Argentina", "Brazil", "Germany"],
			correct: 1
		},
		{
			text: "Which jersey number does Mbappé wear for PSG?",
			image: "images/k4.jpg",
			options: ["7", "9", "10", "11"],
			correct: 0
		},
		{
			text: "Mbappé made his professional debut at what age?",
			image: "images/k5.jpg",
			options: ["15", "16", "17", "18"],
			correct: 2
		},
		{
			text: "Which international teammate assisted Mbappé’s first World Cup goal?",
			image: "images/k6.jpeg",
			options: ["Pogba", "Griezmann", "Giroud", "Dembele"],
			correct: 1
		},
		{
			text: "Mbappé became PSG’s all-time top scorer in which year?",
			image: "images/k7.jpeg",
			options: ["2021", "2022", "2023", "2024"],
			correct: 2
		},
		
		{
				text: "Identify Mbappé goal celebration?",
				options: ["images/k1.jpg", "images/k99.jpg", "images/k2.jpeg", "images/dy3.jpg"],
				correct: 1
			}
		
	]
}, /*  cr7 */
	
	haaland: {
	name: "Erling Haaland",
	profilePic: "galleryImg/haa1.jpg",
	videoReward: "",
	questions: [
		{
			text: "Which club did Haaland play for before joining Borussia Dortmund?",
			image: "images/haa2.jpg",
			options: ["Molde", "RB Salzburg", "Leeds United", "Stavanger"],
			correct: 1
		},
		{
			text: "In which country was Erling Haaland born?",
			image: "images/haa3.jpg",
			options: ["Norway", "England", "Sweden", "Denmark"],
			correct: 1
		},
		{
			text: "Haaland broke the Premier League record by scoring how many goals in the 2022–23 season?",
			image: "images/haa4.jpg",
			options: ["30", "36", "38", "40"],
			correct: 1
		},
		{
			text: "Which club did Haaland’s father play for during his career?",
			image: "images/haa5.jpg",
			options: ["Liverpool", "Leeds United", "Manchester United", "Arsenal"],
			correct: 1
		},
		{
			text: "Which number does Haaland wear at Manchester City?",
			image: "images/haa6.jpg",
			options: ["7", "8", "9", "10"],
			correct: 2
		},
		{
			text: "Haaland scored a record-breaking five goals in a single Champions League match against which club?",
			image: "images/haa7.jpg",
			options: ["RB Leipzig", "Porto", "Copenhagen", "Sevilla"],
			correct: 0
		},
		{
			text: "What’s Haaland’s signature goal celebration?",
			image: "images/haa8.jpeg",
			options: ["Meditation pose", "Backflip", "Arms folded", "Salute"],
			correct: 0
		},
		
		{
				text: "Identify Haaland goal celebration?",
				options: ["images/haa99.jpeg", "images/m2.jpg", "images/haa2.jpg", "images/haa5.jpg"],
				correct: 0
			}
		
	]
} /*  cr7 */
	
} /*  goats   */

//  shows and transitions from welcome page to galleryPage
function startGame() {
	welcomePage.style.display = 'none';
	overlay.style.display = 'block';
	
	bgMusic.currentTime = 0;
		bgMusic.play();
	
	initGallery(); 
	
	setTimeout( () => {
	overlay.style.display = 'none';
	galleryPage.style.display = 'block';
	},  1500
	);
}

/*  loads and shows Gallery images */
function initGallery() {
    // 1. CLEAR CONTAINERS FIRST to prevent the duplicate cards in your screenshots
    topGoats.innerHTML = '';
    subGoats.innerHTML = '';

  //  loops through the goat object and loads data for each goat 
   for(const [key, goat] of Object.entries(goats) ) {
   	const card = document.createElement('div');
   	
        card.classList.add('goat-card');
        card.dataset.goatKey = key;
        
        card.innerHTML = `
            <img src="${goats[key].profilePic}">
            <h3>${goats[key].name}</h3>
        `;
        
        card.addEventListener('click', ()=> {
        	console.log("Loading quiz for:", card.dataset.goatKey);
            startQuiz(card.dataset.goatKey);
        });
        
        if (topGoats.children.length < 2) {
        	card.classList.add('featured');
            topGoats.appendChild(card);
        } else {
            subGoats.appendChild(card);
        }
   }
   
   //  handles animation for the nowPlayin banner 
   setTimeout(()=> {
   	nowPlayin.classList.toggle('fade-in', true);
    setTimeout(()=> {
   	nowPlayin.classList.toggle('fade-in', false);
   	nowPlayin.classList.add('fade-out');
  	console.log(nowPlayin.className);
   	}, 6000);
  console.log('waiting for fade-out'); }
   	, 3500);
   	
}

/*  Starts the quiz engine   */
function startQuiz(key) {
    // general Reset for each restart of the engine
    selectedGoat = key;
    currentQuestionIndex = 0; 
    score = 0;
    
    console.log("user selected:", selectedGoat);

    galleryPage.style.display = 'none';
    overlay.style.display = 'block'; // Keep overlay visible during transition

    setTimeout(() => {
        quizPage.style.display = 'block';
        overlay.style.display = 'none';
        
        //  checks for question with images and shows it
        const qImg = document.getElementById('question-image');
        if (qImg) qImg.style.display = "block";
        
        //  calls renderQuestion  to show questions and option 
        renderQuestion(); 
        
    }, 1000);
}

//  shows each question and option for each selectedGoat
function renderQuestion() {
	console.time("renderQuestion takes",);
	
	const quizData = goats[selectedGoat].questions[currentQuestionIndex];
	
	console.log(`question ${currentQuestionIndex} is ready`);
	document.getElementById('question-text').innerText = quizData.text ;
	document.getElementById('question-image').src = quizData.image ;
	
	//  clears container for each control flow Restart.
	optionsContainer.innerHTML = '';
	
	/*  creates and load the necessary data for each option buttons */
	quizData.options.forEach( (opt, Index) => {
		const btn = document.createElement('button');
		
		/*  displays images as options if available or shows text instead */
		if (opt.includes('/') || opt.includes('.jpg') || opt.includes('.png')) {
			
			document.getElementById('question-image').style.display = "none";
			
			btn.innerHTML = `<img src="${opt}" style="width:100%; height:100%;" >`; // btn
		} else {
		btn.innerText = opt;
		btn.style.height = "auto";
		btn.style.padding = "17px";
		}
		
		btn.classList.add('option-btn'); 
		
		//  unlocks the locked buttons
		optionsContainer.classList.remove('no-click');
		//  set event listener to listen and respond to clicks
		btn.onclick = () => handleAnswer(Index, btn); 
		
		optionsContainer.appendChild(btn);
		
	} 
		
		); /*  forEach loop   */
	console.timeEnd("renderQuestion takes",);
}  /*  function   */

/*  handles both logic for correct and wrong answer  */
function handleAnswer(choice, btn) {
	
	const correctAnswer = goats[selectedGoat]. questions[currentQuestionIndex].correct;
	
	const questionLength = goats[selectedGoat]. questions.length;
	
	//  Grab all buttons
	const correctButton = document.querySelectorAll('.option-btn');
	
	//  Disable click on the optionsContainer
	optionsContainer.classList.add('no-click');
	
	//  if user clicks the correct option
	if(choice === correctAnswer) {
		console.log(`Question ${currentQuestionIndex} is correct`);
		
		score++;  //  updates Score in memory 
		scoreTracker.innerText = score;
		
		//  scoreTracker shows Green background 
		scoreTracker.classList.toggle("correct2", true);
		
		//  after 800ms toogles background color back to default 
		setTimeout( ()=> {
			scoreTracker.classList.toggle("correct2", false);
		  }, 800
		);
		
		//  button highlights green — correct answer
		btn.classList.add('correct');
	} else {
		//  button highlights red — wrong answer
		btn.classList.add('wrong');
		
		//  highlights correct button for reference 
		correctButton[correctAnswer].classList.add('correct');
	}
	
	
	/*   switches to the next question or calls showVideoReward  */
	currentQuestionIndex++;
	
	setTimeout(() => {
	  if(currentQuestionIndex < questionLength) {
			renderQuestion();
		} else {
			showVideoReward();
		}
	},  /*  setTimeout function   */
	500);
	
}  /*  function   */

//  handles  videoReward onquiz ended 
function showVideoReward() {
	bgMusic.pause();
	
	quizPage.style.display = 'none';
	resultPage.style.display = 'flex';
	videoWrapper.style.display = 'block';
	scoreContainer.style.display = 'none';
	
	const vidReward = goats[selectedGoat].videoReward;
	
	if(vidReward === "") { 
		
		videoWrapper.textContent = video.dataset.error;
		setTimeout(playAndUpdate ,2500);
	} else {
	video.src = goats[selectedGoat].videoReward;
	video.load();
	video.play();
	video.onended = () => {
	playAndUpdate();
  //  resultMusic.play();
	}; 
	}

}

// helper function to handle nowPlayin and showing of Final score
function playAndUpdate() {
			
		bgMusic.play();
    videoWrapper.style.display = 'none';
    console.log("main theme: all i know");
    scoreContainer.style.display = 'flex';
    
    if(score < 2) {
		document.getElementById('final-score').innerText = `You scored ${score} points!`;
    } else {
    	document.getElementById('final-score').innerText = `You scored ${score} points! 🎉🎉`;
    }
    
		} /*  function   */


/*  utilities   */

/*  Logic for the collapsed and expanded header  */
const observer = new IntersectionObserver(
  ([entry]) => {
    header.classList.toggle("collapsed", !entry.isIntersecting);
  },
  { threshold: 0 }
);

observer.observe(sentinel);

function message() {
	headsUp.style.display = "block";
	setTimeout( () => {
		headsUp.style.display = "none";
	},
  1500	);
}

let scrolling = true;
let scrollDirection = 1; // 1 = right, -1 = left

function autoScroll() {
	if(window.innerWidth >= 1024) return;
	
  if (!scrolling) return;

  // Move scroll position
  topGoats.scrollLeft += scrollDirection * 1; // speed
  subGoats.scrollLeft += scrollDirection * 1;

  const maxScrollTop = topGoats.scrollWidth - topGoats.clientWidth;
  const maxScrollSub = subGoats.scrollWidth - subGoats.clientWidth;

  // Reverse direction when reaching either edge
  if (
    topGoats.scrollLeft >= maxScrollTop ||
    subGoats.scrollLeft >= maxScrollSub
  ) {
    scrollDirection = -1; // go left
  } else if (
    topGoats.scrollLeft <= 0 ||
    subGoats.scrollLeft <= 0
  ) {
    scrollDirection = 1; // go right
  }

  requestAnimationFrame(autoScroll);
}

//  Pause when user interacts
[topGoats, subGoats].forEach(container => {
  container.addEventListener("mousedown", () => scrolling = false);
  container.addEventListener("touchstart", () => scrolling = false);

  // Resume after 3 seconds
  container.addEventListener("mouseup", () => {
    setTimeout(() => {
      scrolling = true;
      requestAnimationFrame(autoScroll);
    }, 3000);
  });
  container.addEventListener("touchend", () => {
    setTimeout(() => {
      scrolling = true;
      requestAnimationFrame(autoScroll);
    }, 3000);
  });
});

// Start it rolling 
autoScroll();

/*  reRuns  the quiz by restarting key binding name to default values */
function reRun() {
	score = 0;
  selectedGoat = null;
  currentQuestionIndex = 0;
  scoreTracker.innerText = "";
	resultPage.style.display = 'none';
	overlay.style.display = 'block';
	
	setTimeout( () => {
	overlay.style.display = 'none';
	galleryPage.style.display = 'block';
	},  1500
	);
}