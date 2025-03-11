
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
});


document.addEventListener("DOMContentLoaded", () => {
  // Dropdown toggle function
  function setupDropdown(buttonSelector, dropdownSelector) {
    const button = document.querySelector(buttonSelector);
    const dropdown = document.querySelector(dropdownSelector);

    // Show dropdown when mouse enters button
    button.addEventListener("mouseenter", () => {
      dropdown.classList.add("show");
    });

    // Keep dropdown visible when hovering over dropdown content
    dropdown.addEventListener("mouseenter", () => {
      dropdown.classList.add("show");
    });

    // Hide dropdown when mouse leaves both button and dropdown
    button.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!dropdown.matches(":hover")) {
          dropdown.classList.remove("show");
        }
      }, 100); // Small delay to allow moving from button to dropdown
    });

    dropdown.addEventListener("mouseleave", () => {
      dropdown.classList.remove("show");
    });
  }

  // Set up dropdowns
  setupDropdown(".case-btn", ".case-dropdown");
  setupDropdown(".automated-btn", ".automated-dropdown");
  setupDropdown(".storage-btn", ".storage-dropdown");
});



document.getElementById('video-thumbnail').addEventListener('click', function () {
  var videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" 
          title="YouTube video" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
      </iframe>`;
});





// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Document Loaded");

//   // Function to detect if it's a mobile device
//   function isMobile() {
//     return window.innerWidth <= 768; // Adjust breakpoint as needed
//   }

//   // Function to setup dropdowns
//   function setupDropdown(buttonSelector, dropdownSelector) {
//     const button = document.querySelector(buttonSelector);
//     const dropdown = document.querySelector(dropdownSelector);

//     if (!button || !dropdown) {
//       console.warn(`Element not found: ${buttonSelector} or ${dropdownSelector}`);
//       return;
//     }

//     // **FOR DESKTOP** - Open dropdown on hover
//     if (!isMobile()) {
//       button.addEventListener("mouseenter", () => {
//         dropdown.classList.add("show");
//         console.log(`Dropdown Opened: ${dropdownSelector}`);
//       });

//       dropdown.addEventListener("mouseenter", () => {
//         dropdown.classList.add("show");
//       });

//       // Close when mouse leaves both button & dropdown
//       button.addEventListener("mouseleave", () => {
//         setTimeout(() => {
//           if (!dropdown.matches(":hover")) {
//             dropdown.classList.remove("show");
//             console.log(`Dropdown Closed: ${dropdownSelector}`);
//           }
//         }, 100);
//       });

//       dropdown.addEventListener("mouseleave", () => {
//         dropdown.classList.remove("show");
//         console.log(`Dropdown Closed: ${dropdownSelector}`);
//       });
//     }

//     // **FOR MOBILE** - Toggle dropdown on click
//     button.addEventListener("click", (e) => {
//       e.preventDefault(); // Prevent accidental link redirection
//       dropdown.classList.toggle("show");
//       console.log(`Dropdown Toggled: ${dropdownSelector}`);
//     });
//   }

//   // Setup dropdowns for each menu item
//   setupDropdown(".case-btn", ".case-dropdown");
//   setupDropdown(".automated-btn", ".automated-dropdown");
//   setupDropdown(".storage-btn", ".storage-dropdown");

//   // Handle mobile menu toggle
//   const menuToggle = document.querySelector(".menu-toggle");
//   const navbarNav = document.querySelector("#navbarNav");

//   if (menuToggle && navbarNav) {
//     menuToggle.addEventListener("click", () => {
//       navbarNav.classList.toggle("show");
//       console.log("Mobile Menu Toggled");
//     });
//   }

//   // Handle YouTube video loading on click
//   const videoThumbnail = document.getElementById("video-thumbnail");
//   if (videoThumbnail) {
//     videoThumbnail.addEventListener("click", function () {
//       var videoContainer = document.getElementById("video-container");
//       if (videoContainer) {
//         videoContainer.innerHTML = `
//           <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
//               title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
//               encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
//           </iframe>`;
//         console.log("Video Loaded");
//       }
//     });
//   }
// });