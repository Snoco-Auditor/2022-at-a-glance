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
			window.open("https://snoco-auditor.github.io/2022_Auditor_Report/Recording.html", "_blank");
			break;
		  case "tab1":
			window.open("https://snoco-auditor.github.io/2022_Auditor_Report/Licensing.html", "_blank");
			break;
		  case "tab2":
			window.open("https://snoco-auditor.github.io/2022_Auditor_Report/Elections.html", "_blank");
			break;
		  case "tab3":
			window.open("https://snoco-auditor.github.io/2022_Auditor_Report/Animal_Services.html", "_blank");
			break;
		  default:
			break;
		}
	  }
	}
  
    // Create an array of image URLs to preload
    const imageUrls = [
      "https://snoco-auditor.github.io/2022_Auditor_Report/graphics/Animals/Animal%20Control%20Officers-01.png",
      "https://snoco-auditor.github.io/2022_Auditor_Report/graphics/Animals/Animal%20Services%20Cases_alt-03.png",
	  "https://snoco-auditor.github.io/2022_Auditor_Report/graphics/Animals/Animal%20Services%20Cases-04.png"
    ];

    // Create an empty array to hold the image objects
    const images = [];

    // Preload the images
    function preloadImages() {
      for (let i = 0; i < imageUrls.length; i++) {
        const image = new Image();
        image.src = imageUrls[i];
        images.push(image);
      }
    }

    // Call the preloadImages function when the page loads
    window.onload = preloadImages;

	function showPopup() {
		var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (screenWidth < 800) {
			document.getElementById("popup").style.display = "block";
		}
	}

	window.onload = showPopup;

	function redirectToURL() {
		if (window.innerWidth > 767) {
			// Redirect to URL for larger screens
			window.location.href = "#admin";
		} else {
			// Redirect to URL for smaller screens
			window.location.href = "https://snoco-auditor.github.io/2022_Auditor_Report/County_Auditor_letter.html";
		}
	}