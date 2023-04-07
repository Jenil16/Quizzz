const quizDB = [
  {
    question: "Javascript is an _______ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of these",
    ans: "ans1",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both A and B",
    d: "None",
    ans: "ans3",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementById()",
    b: "getElementByClassName()",
    c: "Both",
    d: "None",
    ans: "ans3",
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: "Throws an error",
    b: "Ignores the statement",
    c: "Gives the warning",
    d: "None",
    ans: "ans2",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of these",
    ans: "ans4",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    a: "const",
    b: "var",
    c: "let",
    d: "constant",
    ans: "ans1",
  },
  {
    question:
      "When the switch statement matches the expression with the given labels, how is the comparison done?",
    a: "Both the datatype and the result of the expression is compared",
    b: "Only the datatype of the result is compared",
    c: "Only the value of the expression is compared",
    d: "None of the above",
    ans: "ans1",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    a: "in",
    b: "is in",
    c: "exists",
    d: "lies",
    ans: "ans1",
  },
  {
    question: "What is the use of the <noscript> tag in Javascript?",
    a: "The contents are displayed by non-JS-based browsers",
    b: "Clear all cookies and threats",
    c: "Both A and B",
    d: "None of these",
    ans: "ans1",
  },
  {
    question:
      "When an operator value is NULL, the typeof returned by the unary operator is:",
    a: "Boolean",
    b: "Undefined",
    c: "Object",
    d: "Null",
    ans: "ans3",
  },
  {
    question: "What does the Javascript “debugger” statement do?",
    a: "It will debug all the errors in the program at the runtime",
    b: "It acts as a breakpoint in the system",
    c: "It will debug error in the current statement if any",
    d: "All of these",
    ans: "ans2",
  },
  {
    question: "What does the ‘toLocateString()’ method do in JS?",
    a: "Returns a localised object representation",
    b: "Returns a parsed string",
    c: "Returns a localised string representation of an object",
    d: "None",
    ans: "ans3",
  },
  {
    question:
      "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
    a: "Object Serialization",
    b: "Object Encapsulation",
    c: "Object Inheritance",
    d: "None",
    ans: "ans1",
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "stringify()",
    b: "parse()",
    c: "convert()",
    d: "None",
    ans: "ans1",
  },
  {
    question: "Which of the following is not a Javascript framework?",
    a: "Node",
    b: "Vue",
    c: "React",
    d: "Cassandra",
    ans: "ans4",
  },
  {
    question:
      "What keyword is used to declare an asynchronous function in Javascript?",
    a: "async",
    b: "await",
    c: "setTimeOut",
    d: "None",
    ans: "ans1",
  },
  {
    question: "How do we write a comment in javascript?",
    a: "/* */",
    b: "//",
    c: "#",
    d: "$ $",
    ans: "ans2",
  },
  {
    question: "Which of the following are not server-side Javascript objects?",
    a: "Date",
    b: "FileUpload",
    c: "Function",
    d: "All of these",
    ans: "ans4",
  },
  {
    question: "Which one was the first fully supported 64-bit OS?",
    a: "Windows Vista",
    b: "Mac",
    c: "Linux",
    d: "Windows XP",
    ans: "ans3",
  },
  {
    question: "Computer HardDisk was first introduced by _____",
    a: "Dell",
    b: "Apple",
    c: "Microsoft",
    d: "IBM",
    ans: "ans4",
  },
  {
    question: "In computer world, Torjan refers to ",
    a: "Virus",
    b: "Malware",
    c: "Worm",
    d: "Spyware",
    ans: "ans2",
  },
  {
    question: "Which protocol is used to receive an email?",
    a: "SMTP",
    b: "POP3",
    c: "HTTP",
    d: "FTP",
    ans: "ans2",
  },
  {
    question: "Which protocol is used to send an email?",
    a: "SMTP",
    b: "POP3",
    c: "HTTP",
    d: "FTP",
    ans: "ans1",
  },
  {
    question:
      "Which computer program converts the assembly language into the machine language?",
    a: "Interpreter",
    b: "Compiler",
    c: "Assembler",
    d: "Comparator",
    ans: "ans3",
  },
  {
    question:
      "A folder in the Windows computer cant be made with the name _____",
    a: "can",
    b: "con",
    c: "mak",
    d: "make",
    ans: "ans2",
  },
  {
    question: "What is the extension of the excel 2007 files?",
    a: ".xls",
    b: ".xlsx",
    c: ".xsl",
    d: ".xl",
    ans: "ans2",
  },
  {
    question: "How many layers are there in the TCP/IP model?",
    a: "7",
    b: "5",
    c: "4",
    d: "8",
    ans: "ans3",
  },
  {
    question: "Which one is the example of connectionless protocols?",
    a: "TCP",
    b: "IPX/SPX",
    c: "Frame Relay",
    d: "UDP",
    ans: "ans4",
  },
  {
    question: "NIC (Network Interface Card) is generally used for ____",
    a: "Connectivity",
    b: "Programming",
    c: "Printing",
    d: "None",
    ans: "ans1",
  },
  {
    question: "What is the fullForm of PDF?",
    a: "Printed Document Format",
    b: "Public Document Format",
    c: "Portable Document Format",
    d: "Published Document Format",
    ans: "ans3",
  },
  {
    question: "The simplest CPU scheduling algorithm?",
    a: "Multilevel",
    b: "FCFS",
    c: "SJF",
    d: "RR",
    ans: "ans2",
  },
  {
    question: "Which of the following is not he search engine?",
    a: "Google",
    b: "Yahoo",
    c: "Mozilla FireFox",
    d: "Altavista",
    ans: "ans3",
  },
  {
    question: "The GUI means ?",
    a: "General User Interaction",
    b: "Graphical User Interface",
    c: "Guided User Interface",
    d: "General User Interface",
    ans: "ans2",
  },
  {
    question: "A hyperlink means ?",
    a: "a text connected to page",
    b: "plain text",
    c: "coloured text",
    d: "None",
    ans: "ans1",
  },
  {
    question: "What does the letter `S` stands for in the terminology HTTPS?",
    a: "Safe",
    b: "Secure",
    c: "Short",
    d: "Shorter",
    ans: "ans2",
  },
  {
    question:
      "The maximum speed at which the data can be transmitted on each channel of a standard PCM stream is ?",
    a: "64 Kbps",
    b: "128 Kbps",
    c: "1 Mbps",
    d: "4 Mbps",
    ans: "ans1",
  },
  {
    question:
      "Which IP address cannot be assign to a computer system in the network?",
    a: "192.168.1.1",
    b: "127.0.0.1",
    c: "192.1.1.27",
    d: "None",
    ans: "ans2",
  },
  {
    question: "ORACLE is a _______",
    a: "OS",
    b: "RDBMS",
    c: "Interpreter",
    d: "Compiler",
    ans: "ans2",
  },
  {
    question: "Repeater function is which layer ?",
    a: "Physical",
    b: "Data Link",
    c: "Network",
    d: "Presentation",
    ans: "ans1",
  },
  {
    question: "Moving processes from the RAM to the Disk is called ______",
    a: "Scheduling",
    b: "Catching",
    c: "Swapping",
    d: "Spooling",
    ans: "ans3",
  },
  {
    question: "What is the port number of POP3?",
    a: "21",
    b: "58",
    c: "80",
    d: "110",
    ans: "ans4",
  },
  {
    question: "What is the port number of SMTP?",
    a: "25",
    b: "28",
    c: "110",
    d: "52",
    ans: "ans1",
  },
  {
    question: "IC chips of computer are usually made of ?",
    a: "Silver",
    b: "Aluminum",
    c: "Copper",
    d: "Silicon",
    ans: "ans4",
  },
  {
    question: "ASCII has how many codes?",
    a: "64",
    b: "128",
    c: "256",
    d: "512",
    ans: "ans2",
  },
  {
    question: "Binary equivalent of decimal number 23 is _____",
    a: "01011",
    b: "10111",
    c: "10011",
    d: "11011",
    ans: "ans2",
  },
  {
    question: "USB port stands for ?",
    a: "United Serial Bus Port",
    b: "Universal Serial Bus Port",
    c: "Universal Sequential Bus Port",
    d: "Universal Serial BIOS Port",
    ans: "ans2",
  },
  {
    question:
      "Which of the following is not the mandatory component of the URL?",
    a: "Resource Path",
    b: "Protocol",
    c: "Port Number",
    d: "None",
    ans: "ans4",
  },
  {
    question: "Where are cookies stored?",
    a: "In HTML",
    b: "In web.xml",
    c: "On the client",
    d: "None",
    ans: "ans3",
  },
  {
    question: "The _____ protects system from hakers.",
    a: "Antivirus",
    b: "Backup",
    c: "Hard Disk",
    d: "Firewall",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
const optionparent = document.querySelector(".options-div");
const firstoption = document.querySelector(".firstoption");
const secondoption = document.querySelector(".secondoption");
const thirdoption = document.querySelector(".thirdoption");
const fourthoption = document.querySelector(".fourthoption");

let questionCount = 0;
let quesno;
let score = 0;
const loadQuestion = () => {
  var no = Math.floor(Math.random() * quizDB.length);
  quesno = no;
  question.innerText = quizDB[no].question;

  option1.innerText = quizDB[no].a;
  option2.innerText = quizDB[no].b;
  option3.innerText = quizDB[no].c;
  option4.innerText = quizDB[no].d;

  // console.log(questionCount);
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkanswer = getCheckAnswer();
  // console.log(checkanswer)
  if (checkanswer === quizDB[quesno].ans) {
    score++;
  }
  questionCount++;

  deselectAll();

  if (questionCount < 5) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h3>You scored : ${score}/${5} ✌️ </h3>
    <button class="again" onclick = "location.reload()">Play Again</button>`;
    showScore.classList.remove("scoreArea");
    question.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    submit.style.display = "none";
    firstoption.style.display = "none";
    secondoption.style.display = "none";
    thirdoption.style.display = "none";
    fourthoption.style.display = "none";
  }
});
