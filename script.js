document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});

// 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

// API KEY:zqt_DsRdibFlpo68ouQDnXYvpy54PiewDaB4b_Odlw


function addItem() {
  var newItem = document.getElementById("newItem").value;
  var list = document.getElementById("checklist");
  var item = document.createElement("li");
  item.appendChild(document.createTextNode(newItem));
  list.appendChild(item);
}

// function getDate() {
//   const dateInput = document.getElementById("date-input").value;
//   const output = document.getElementById("output");
//   output.innerHTML = `You entered: ${dateInput}`;
// }


function sendToChatGPT() {
  let value = document.getElementById("task-input").value;

  let body = {
    "model": "text-davinci-003",
    "prompt": "Say this is a test",
    "max_tokens": 7,
    "temperature": 0
};

  let header = 
  {
    'Content-Type': 'application/json',
    'customer-id': '247750025',
    'x-api-key': 'zqt_DsRdibFlpo68ouQDnXYvpy54PiewDaB4b_Odlw'
  }

  axios
    .post("https://experimental.willow.vectara.io/v1/completions", body, 
      {headers: header}
    )
    .then((response) => {
      let reply = response.data.choices[0].message.content;
      document.getElementById("reply-content").textContent = reply;
    });
}
