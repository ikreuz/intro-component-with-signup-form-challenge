function hasClass(el, className) {
  if (!el) return;
  if (el.classList) return el.classList.contains(className);
  else return !!el.className.match(new RegExp("\\s|^" + className + "(\\s|$)"));
}

function addClass(el, className) {
  if (!el) return;
  let classList = className.split(" ");
  if (el.classList) el.classList.add(classList[0]);
  else if (!this.hasClass(el, classList[0])) el.className += " " + classList[0];
  if (classList.length > 1) this.addClass(el, classList.slice(1).join(" "));
}

function removeClass(el, className) {
  if (!el) return;
  let classList = className.split(" ");
  if (el.classList) el.classList.remove(classList[0]);
  else if (this.hasClass(el, classList[0])) {
    let reg = new RegExp("(\\s|^)" + classList[0] + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
  if (classList.length > 1) this.removeClass(el, classList.slice(1).join(" "));
}

function toggleClass(el, className, bool) {
  if (bool) this.addClass(el, className);
  else this.removeClass(el, className);
}

/** */
document.addEventListener("click", function (e) {
  /** inputs */
  const inputFirstName = document.getElementById("firstname-si");
  const inputLastName = document.getElementById("lastname-si");
  const inputEmail = document.getElementById("email-si");
  const inputPassword = document.getElementById("password-si");

  /** buttons */
  // const specifiedTryFreeSi = document.getElementById("try-free-si");
  const specifiedSubmitSi = document.getElementById("submit-si");

  /** is clicked */
  // const isClickTryFree = specifiedTryFreeSi?.contains(e.target);
  const isClickSubmit = specifiedSubmitSi?.contains(e.target);
  /** error */
  const firstNameError = document.getElementById("firstname-error-si");
  const lastNameError = document.getElementById("lastname-error-si");
  const emailError = document.getElementById("email-error-si");
  const passwordError = document.getElementById("password-error-si");

  if (isClickSubmit) {
    console.log("isClickSubmit");
    if (!inputFirstName.value) {
      inputFirstName.classList.add("state-error");
      document.getElementById("firstname-si").setAttribute("placeholder", "");
      document
        .getElementById("firstname-si")
        .setAttribute("border-color", "red");
      firstNameError.setAttribute("aria-hidden", false);
      firstNameError.setAttribute("aria-invalid", true);
      toggleClass(firstNameError, "state-error-hidden", false);
      toggleClass(firstNameError, "state-error-show", true);
      console.log("isBlack, isEmpty: inputFirstName");
    }

    if (!inputLastName.value) {
      inputLastName.classList.add("state-error");
      document.getElementById("lastname-si").setAttribute("placeholder", "");
      lastNameError.setAttribute("aria-hidden", false);
      lastNameError.setAttribute("aria-invalid", true);
      toggleClass(lastNameError, "state-error-hidden", false);
      toggleClass(lastNameError, "state-error-show", true);
    }

    if (!inputEmail.value) {
      inputEmail.classList.add("state-error");
      document.getElementById("email-si").classList.add("state-error-text");
      emailError.setAttribute("aria-hidden", false);
      emailError.setAttribute("aria-invalid", true);
      document.getElementById((inputEmail.value = "email@example/com"));
      toggleClass(emailError, "state-error-hidden", false);
      toggleClass(emailError, "state-error-show", true);
    }

    if (!inputPassword.value) {
      inputPassword.classList.add("state-error");
      document.getElementById("password-si").setAttribute("placeholder", "");
      passwordError.setAttribute("aria-hidden", false);
      passwordError.setAttribute("aria-invalid", true);
      toggleClass(passwordError, "state-error-hidden", false);
      toggleClass(passwordError, "state-error-show", true);
    }
  }
});
