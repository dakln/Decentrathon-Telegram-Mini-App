
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
// 	if (window.visualViewport) {
// 		window.visualViewport.addEventListener('resize', () => {
// 			document.body.style.height = window.visualViewport.height + 'px';
// 		});
// 	}
// 	// This will ensure user never overscroll the page
// 	window.addEventListener('scroll', () => {
// 		if (window.scrollY > 0) window.scrollTo(0, 0);
// 	});

	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}
