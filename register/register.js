let participantCount = 1;

document.getElementById("add").addEventListener("click", () => {
  participantCount++;
  const newParticipant = participantTemplate(participantCount);
  document.getElementById("add").insertAdjacentHTML("beforebegin", newParticipant);
});

function participantTemplate(count) {
  return `
  <section class="participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
      <label for="fname${count}">First Name<span>*</span></label>
      <input id="fname${count}" type="text" name="fname${count}" required />
    </div>
    <div class="item activities">
      <label for="activity${count}">Activity #<span>*</span></label>
      <input id="activity${count}" type="text" name="activity${count}" />
    </div>
    <div class="item">
      <label for="fee${count}">Fee ($)<span>*</span></label>
      <input id="fee${count}" type="number" name="fee${count}" />
    </div>
    <div class="item">
      <label for="date${count}">Desired Date <span>*</span></label>
      <input id="date${count}" type="date" name="date${count}" />
    </div>
    <div class="item">
      <label for="grade${count}">Grade<span>*</span></label>
      <select id="grade${count}" name="grade${count}">
        <option selected value="" disabled></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>
  `;
}

document.getElementById("registrationForm").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault(); 

  const total = totalFees();
  const adultName = document.getElementById("adult_name").value;
  const summary = document.getElementById("summary");
  const form = document.getElementById("registrationForm");

  form.style.display = "none";
  summary.innerHTML = successTemplate({
    name: adultName,
    participants: participantCount,
    total: total
  });
}

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  return feeElements.reduce((sum, fee) => {
    const value = parseFloat(fee.value) || 0;
    return sum + value;
  }, 0);
}

function successTemplate(info) {
  return `
    <h2>Thank you ${info.name} for registering.</h2>
    <p>You have registered ${info.participants} participant${info.participants > 1 ? "s" : ""} and owe $${info.total.toFixed(2)} in fees.</p>
  `;
}
