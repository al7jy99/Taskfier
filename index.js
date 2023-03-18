//var axios = require('axios');



document.getElementById("submit-btn").addEventListener("click", function () {
    sendToChatGPT();
  });
  


function sendToChatGPT() {
    let task = document.getElementById("task-input").value;
    let teams = document.getElementById("teams-input").value;
    let date = document.getElementById("date-input").value;

    let value = " قم بعمل خطة للقيام بمهمة" + task + " عبر خطوات " + " يتم توزعيها للفرق التالية: " + teams +" وتاريخ انتهاء كل من الخطوات بحيث تكتمل المهمة قبل "+ date+ "make the output in a html list باللغة العربية بحد ٣ خطوات لكل فريق";
    console.log(value)


    var data = JSON.stringify({
        "model": "text-davinci-003",
        "prompt": value,
        "max_tokens": 700,
        "temperature": 0
      });
      
      var config = {
        method: 'post',
        url: 'https://experimental.willow.vectara.io/v1/completions',
        headers: { 
          'Content-Type': 'application/json', 
          'customer-id': '247750025', 
          'x-api-key': 'zqt_DsRdibFlpo68ouQDnXYvpy54PiewDaB4b_Odlw'
        },
        data : data
      };

axios(config)
.then(function (response) {

  console.log(JSON.stringify(response.data.choices[0].text));
    let reply = response.data.choices[0].text;
  console.log(reply);
  document.getElementById("reply-content").innerHTML = reply;
})
.catch(function (error) {
  console.log(error);
});


}