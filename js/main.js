// sweetalart
function addrate() {
  Swal.fire({
    html:
      ' <br> <img class="img-pop" src="photo/finger.png" alt="">' +
      "<br>" +
      "<br>  <h4 class='done' >تم تسجيل الدخول بنجاح </h4>",
  });
}
function addratee() {
  Swal.fire({
    html:
      ' <br> <img class="img-pop" src="photo/finger.png" alt="">' +
      "<br>" +
      "<br>  <h4 class='done' >تم اضافة التبرع للمشروع بنجاح </h4>",
  });
}
function addratees() {
  Swal.fire({
    html:
      ' <br> <img class="img-pop" src="photo/finger.png" alt="">' +
      "<br>" +
      "<br>  <h4 class='done' >تم انجاز  المشروع بنجاح </h4>",
  });
}

function success() {
  Swal.fire({
    title: "تم اضافه مرحله تعليميه ",
    text: "",
    icon: "success",
  });
}
function remove() {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}
function prohibition() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "Do you want to remove the ban?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, i want ",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "prohibition!",
          text: ". The student has been banned",
          icon: "success",
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          // text: "Your imaginary file is safe :)",
          icon: "error",
        });
      }
    });
}
// sweetalart
// =====================================================================
// =====================================================================
// validation regaster
function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var bothError = document.getElementById("bothError");

  // Reset errors
  emailError.style.display = "none";
  passwordError.style.display = "none";
  bothError.style.display = "none";

  // Basic email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.style.display = "flex";
    return false;
  }

  // Basic password validation
  if (password.length < 6) {
    passwordError.style.display = "flex";
    return false;
  }

  // You can add further validation here

  // If both email and password are invalid
  if (!emailPattern.test(email) && password.length < 6) {
    bothError.style.display = "block";
    return false;
  }

  // Form is valid
  return true;
}
// validation regaster
// =====================================================================
// =====================================================================
// side bar
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//=========== Active sidebar dashboard =============
const currentLocationDashboard = location.href;
const menuItemDashboard = document.querySelectorAll(
  ".sidebar .nav-pills .nav-item .collapse"
);
const menuChildDashboard = document.querySelectorAll(
  ".sidebar .nav-pills .nav-item ul li .nav-link"
);
const menuLengthDashboard = menuChildDashboard.length;
for (let i = 0; i < menuLengthDashboard; i++) {
  if (menuChildDashboard[i].href === currentLocationDashboard) {
    menuChildDashboard[i].className = "nav-link active";
    menuChildDashboard[i].parentElement.parentElement.className =
      "flex-column collapse show";
  }
}
//=========== Active sidebar dashboard =============

//=========== sidebar toggle =============
const sideBar = document.querySelector(".sidebar");
const toggler = document.querySelector(".menu");
toggler.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});

$(document).ready(function () {
  $(".close").on("click", function () {
    $(".sidebar.open .nav-pills .nav-item ul").removeClass("show");
  });
});

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

// Get references to the button and the sidebar
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const sidebar = document.querySelector(".sidebar");

// Add a click event listener to the button
closeSidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("open"); // Toggle the 'open' class on the sidebar
});
// =====================================================================
// =====================================================================
// botton search
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownMenuLink");
  const searchField = document.querySelector(".search-field");

  dropdownToggle.addEventListener("click", function () {
    searchField.style.display = "block";
    dropdownToggle.style.display = "none";
  });

  searchField.addEventListener("blur", function () {
    searchField.style.display = "none";
    dropdownToggle.style.display = "block";
  });
});
// =====================================================================
// =====================================================================

// add quesion
function showContent(contentId) {
  // Hide all contents
  var contents = document.querySelectorAll(".quesions");
  contents.forEach(function (quesions) {
    quesions.style.display = "none";
  });

  // Show the selected content
  var selectedContent = document.getElementById(contentId);
  selectedContent.style.display = "block";
}
// ----------------------------------------------
// reload img
document
  .getElementById("imageInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgPreviewContainer = document.getElementById(
          "imgPreviewContainer"
        );
        const imgPreview = document.getElementById("imgPreview");
        imgPreview.src = e.target.result;
        imgPreviewContainer.style.display = "block"; // Show the div
      };
      reader.readAsDataURL(file);
    }
  });

document
  .getElementById("imgPreviewContainer")
  .addEventListener("click", function () {
    const imgPreviewContainer = document.getElementById("imgPreviewContainer");
    imgPreviewContainer.style.display = "none"; // Hide the div on click
  });
