	console.log("start");
	
	// Вопрос Заголовок
	// Zagolovok = document.getElementsByClassName("card-header")[0].children[0].innerText;
	// console.log(voprosZ[0].children[0].innerText);
	// document.getElementsByClassName("card-header")[0].children[0].innerText.split(" ")
	
	var client = new XMLHttpRequest();
	client.open('GET', 'https://gazmiliano.github.io/qq.txt');
	client.onreadystatechange = function() {		
	    if (client.readyState == 4 && client.status == 200) {
			if (client.responseText) {
				
				// Для начало грузим ответы  
				var Answers = new Array();
				text = client.responseText;
				lines = text.split("\n"); 
				Question = "";			// Сам вопрос
				QuestionLength = "";	// Длина в символах вопроса
				Answer = "";			// Ответ
				
				for(i = 0; i < lines.length; i++){ 
			
					if (i === 0) {
						Question = lines[i].replace(/\s/g, '');
						QuestionLength = lines[i].length;
					} else if (i % 2 === 0) {
						Question = lines[i].replace(/\s/g, '');
						QuestionLength = lines[i].length;
					} else {
						let el = new Object();
						el["Question"] = Question;
						el["QuestionLength"] = QuestionLength;
						el["Answer"] = lines[i];
						Answers.push(el);	
					}
				}
				
				// Запускаем цикл на 100 
				// Вопрос и авто ответ 
				for(i = 0; i < 100; i++) {
					
					// Вопрос
					Question = document.getElementsByClassName("card-title")[0].innerText.replace(/\s/g, '');
					QuestionLength = Question.length;
					Answer = '';
					
					// Ищем
					for(j = 0; j < Answers.length; j++){
						
						// Если нашли ответ
						if (Question == Answers[j]["Question"]) {
							// Ответ
							Answer = Answers[j]["Answer"].replace(/\s/g, '');							
							break;
						}				
					}
					
					if (Answer !== '') {
						
						// Варианты ответов
						variant1 = document.getElementsByClassName("form-check-input")[0].parentElement.childNodes[1].childNodes[1].innerText;
						variant2 = document.getElementsByClassName("form-check-input")[1].parentElement.childNodes[1].childNodes[1].innerText;
						variant3 = document.getElementsByClassName("form-check-input")[2].parentElement.childNodes[1].childNodes[1].innerText;
						variant4 = document.getElementsByClassName("form-check-input")[3].parentElement.childNodes[1].childNodes[1].innerText;
						variant5 = document.getElementsByClassName("form-check-input")[4].parentElement.childNodes[1].childNodes[1].innerText;
						
						// Определяем являеться ли первый символ варианта число
						variant1firstIsNumber = !isNaN(variant1[0]);
						variant2firstIsNumber = !isNaN(variant2[0]);
						variant3firstIsNumber = !isNaN(variant3[0]);
						variant4firstIsNumber = !isNaN(variant4[0]);
						variant5firstIsNumber = !isNaN(variant5[0]);
												
						if ((variant1firstIsNumber) && ((variant1[1] == '.') || (variant1[1] == ')'))) {
								
							// Убераем пробелы
							// Убераем 1.2.3.4.5. 1)2)3)4)5)
							variantSplit = variant1.split(' ');
							variantSplit.splice(0,1);
							variant1 = variantSplit.join('');
							
							variantSplit = variant2.split(' ');
							variantSplit.splice(0,1);
							variant2 = variantSplit.join('');
							
							variantSplit = variant3.split(' ');
							variantSplit.splice(0,1);
							variant3 = variantSplit.join('');
							
							variantSplit = variant4.split(' ');
							variantSplit.splice(0,1);
							variant4 = variantSplit.join('');
							
							variantSplit = variant5.split(' ');
							variantSplit.splice(0,1);
							variant5 = variantSplit.join('');							
							
						} else {
							
							// Убераем пробелы
							variant1 = variant1.replace(/\s/g, '');
							variant2 = variant1.replace(/\s/g, '');
							variant3 = variant1.replace(/\s/g, '');
							variant4 = variant1.replace(/\s/g, '');
							variant5 = variant1.replace(/\s/g, '');
							
						}
						
						// Какой подходить
						if (Answer == variant1) {
							document.getElementsByClassName("form-check-input")[0].checked = true;
						} else if (Answer == variant2) {
							document.getElementsByClassName("form-check-input")[1].checked = true;
						} else if (Answer == variant3) { 
							document.getElementsByClassName("form-check-input")[2].checked = true;
						} else if (Answer == variant4) { 
							document.getElementsByClassName("form-check-input")[3].checked = true;
						} else if (Answer == variant5) {
							document.getElementsByClassName("form-check-input")[4].checked = true;
						} else {
							console.log(document.getElementsByClassName("card-header")[0].children[0].innerText); 
							console.log(document.getElementsByClassName("card-title")[0].innerText);
							
							// Не нашли, то наугад
							randomInt = Math.floor(Math.random() * 5) + 1;
							randomInt = randomInt - 1;
							document.getElementsByClassName("form-check-input")[randomInt].checked;
						} 
						
						// Жмем следующий
						document.getElementsByClassName("btn-primary")[0].click();
						
						// Ждем 5 сек
						const date = Date.now();
						let currentDate = null;
						do {
							currentDate = Date.now();
						} while (currentDate - date < 5000);
					} 					
				}
			}
		}
	}
	client.send();
	
	//Вопрос
	vopros = document.getElementsByClassName("card-title")[0].innerText;