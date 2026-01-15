document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("feedbackForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll("input, textarea");

      const feedbackData = {
        collaboration: inputs[0].value,
        communication: inputs[1].value,
        reliability: inputs[2].value,
        initiative: inputs[3].value,
        comment: inputs[4].value
      };

      localStorage.setItem("peerFeedback", JSON.stringify(feedbackData));
      window.location.href = "summary.html";
    });
  }

  const data = JSON.parse(localStorage.getItem("peerFeedback"));

  if (data && document.getElementById("collaboration")) {
    document.getElementById("collaboration").innerText = data.collaboration;
    document.getElementById("communication").innerText = data.communication;
    document.getElementById("reliability").innerText = data.reliability;
    document.getElementById("initiative").innerText = data.initiative;
    document.getElementById("comment").innerText = data.comment || "—";
  }

});
