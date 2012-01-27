/*   Leftronic Hack
     Raymond Zhong (hello@raymondzhong.com)
     MIT License */
chrome.extension.sendRequest({greeting: "get_settings"}, function(response) {
				 debugger;
				 console.log(response);
				 if (response.farewell === undefined) return;

				 var inj = document.createElement('script');
				 inj.innerText = "function leftronic_hack_size() {" +
				     "var gx = " + response.farewell.gridsizex + ";" +
				     "var gy = " + response.farewell.gridsizey + ";" +
				     "if (gx != LeftronicConfig.gridX || gy != LeftronicConfig.gridY) {" +
				     "LeftronicConfig.gridX = gx; LeftronicConfig.gridY = gy; dashboardManager.resizeGrid(); }" +
				     "};" +
				     "$('#grid').resize(leftronic_hack_size); leftronic_hack_size()";
				 document.body.parentElement.insertBefore(inj, document.body);
			     });

