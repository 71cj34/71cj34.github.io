(function () {
  var modal = document.getElementById("grade-history-modal");
  var trigger = document.getElementById("grade-history-trigger");
  if (!modal || !trigger) return;

  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  trigger.addEventListener("click", openModal);
  modal.querySelector(".gh-close").addEventListener("click", closeModal);
  modal.querySelector(".gh-backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
})();
