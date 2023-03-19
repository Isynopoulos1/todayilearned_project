// data
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#00F49B" },
  { name: "science", color: "#004DFF" },
  { name: "finance", color: "#FAAF3D" },
  { name: "society", color: "#FA8BFF" },
  { name: "entertainment", color: "#8F79EB" },
  { name: "health", color: "#EAD0B3" },
  { name: "history", color: "#8095FF" },
  { name: "news", color: "#EA53AA" },
];
//selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//create DOM elements: render facts in list
factsList.innerHTML = "";

//Load data from supabase

loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://gxxidlbsnhqhsaiheujp.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4eGlkbGJzbmhxaHNhaWhldWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5Nzc0NTksImV4cCI6MTk5NDU1MzQ1OX0.bLKNDQUAIK9NwDv8BqBbDpbOnOoKUHRIinsf0tY8LSY",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4eGlkbGJzbmhxaHNhaWhldWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5Nzc0NTksImV4cCI6MTk5NDU1MzQ1OX0.bLKNDQUAIK9NwDv8BqBbDpbOnOoKUHRIinsf0tY8LSY",
      },
    }
  );
  const data = await res.json();
  // const filterData = data.filter((fact) => fact.category === "society");

  createFactList(data);
}

function createFactList(dataArr) {
  const htmlArr = dataArr.map(
    (fact) => `<li class= "fact"> 
    <p>
    ${fact.text}
    <a
      class="source"
      href="${fact.source}"
      target="_blank"
      >Source</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">
    ${fact.category}</span> </li>`
  );

  const html = htmlArr.join("");

  factsList.insertAdjacentHTML("afterbegin", html);
}

// toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

/*
// if (votesInteresting === votesMindBlowing) {
//   alert("this is equaly mindblowing and interesting");
// }

// const calcFactsAge2 = (year) => 2022 - year;



const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

*/
