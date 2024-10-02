document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer .container");
  
    // Browser detection based on userAgent string
    const userAgent = navigator.userAgent;
    let browserName = "Unknown Browser";
    
    if (userAgent.includes("Chrome")) {
      browserName = "Chrome";
    } else if (userAgent.includes("Firefox")) {
      browserName = "Firefox";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      browserName = "Safari";
    } else if (userAgent.includes("Edg")) {
      browserName = "Edge";
    }
  
    // Use supported navigator properties
    const language = navigator.language;
    const platform = navigator.platform;
    const isCookieEnabled = navigator.cookieEnabled;
  
    // Insert browser information into the navigation bar
    const browserInfo = document.createElement("div");
    browserInfo.className = "browser-info";
    browserInfo.style.padding = "10px";
    browserInfo.style.fontSize = "14px";
    browserInfo.style.backgroundColor = "#f0f0f0";
    browserInfo.style.borderBottom = "1px solid #ccc";
  
    browserInfo.innerHTML = `
      <p><strong>Browser Information:</strong></p>
      <p>Browser Name: ${browserName}</p>
      <p>User Agent: ${userAgent}</p>
      <p>Language: ${language}</p>
      <p>Platform: ${platform}</p>
      <p>Cookies Enabled: ${isCookieEnabled ? 'Yes' : 'No'}</p>
    `;
  
    // Append the browser information to the navigation bar
    nav.appendChild(browserInfo);
  
    // Append brief browser info in the footer
    const footerInfo = document.createElement("div");
    footerInfo.className = "footer-browser-info";
    footerInfo.style.padding = "10px";
    footerInfo.style.fontSize = "12px";
    footerInfo.innerHTML = `<p>You are browsing from: ${platform} using ${browserName} (${language})</p>`;
  
    footer.appendChild(footerInfo);
  });
  