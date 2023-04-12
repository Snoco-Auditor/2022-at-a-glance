	// JavaScript code to show and hide the loading screen
document.addEventListener("DOMContentLoaded", function() {
	// Show the loading screen
	document.getElementById("loading-screen").style.display = "flex";
  
	// Hide the loading screen when the page is fully loaded
	window.addEventListener("load", function() {
	  document.getElementById("loading-screen").style.display = "none";
	});
  });
  
  function slideTab(selectedTabId, tabsToTransformIds) {
	  const selectedTab = document.getElementById(selectedTabId);
	  const tabsToTransform = tabsToTransformIds.map(id => document.getElementById(id));
  
	  if (window.innerWidth >= 768) {
		// Check if any of the tabs are already translated, and move them back if they are
		tabsToTransform.forEach(tab => {
		  if (tab.style.transform === "translateX(-55vw)" || tab.style.transform === "") {
			tab.style.transform = "translateX(0)";
		  }
		});
  
		// Translate the selected tab and the other tabs together
		tabsToTransform.forEach(tab => {
		  tab.style.transform = "translateX(-55vw)";
		  tab.style.transition = "all .5s";
		});
		selectedTab.style.transform = "translateX(0)";
	  } else {
		// Open the respective URL in a new window
		switch(selectedTabId) {
		  case "tab0":
			window.open("https://snoco-auditor.github.io/2022-at-a-glance/Recording.html", "_blank");
			break;
		  case "tab1":
			window.open("https://snoco-auditor.github.io/2022-at-a-glance/Licensing.html", "_blank");
			break;
		  case "tab2":
			window.open("https://snoco-auditor.github.io/2022-at-a-glance/Elections.html", "_blank");
			break;
		  case "tab3":
			window.open("https://snoco-auditor.github.io/2022-at-a-glance/Animal_Services.html", "_blank");
			break;
		  default:
			break;
		}
	  }
	}

	function redirectToURL() {
		if (window.innerWidth > 767) {
			// Redirect to URL for larger screens
			window.location.href = "#admin";
		} else {
			// Redirect to URL for smaller screens
			window.location.href = "https://snoco-auditor.github.io/2022-at-a-glance/County_Auditor_letter.html";
		}
	}

window.addEventListener('scroll', function() {
  const element = document.getElementsByClassName('hideme');
  const position = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (position < windowHeight) {
    element.style.opacity = 1;
    element.style.transition = 'opacity 1s ease-in-out';
  }
});
