/*   Leftronic Hack
     Raymond Zhong (hello@raymondzhong.com)
     MIT License */
chrome.extension.sendRequest({greeting: "get_settings"}, function(response) {
				 console.log(response);
				 if (response.farewell === undefined) return;

				 var inj = document.createElement('script');
				 inj.innerText = "LeftronicConfig.gridX = " + response.farewell.gridsizex + ";" +
				     "LeftronicConfig.gridY = " + response.farewell.gridsizey + ";" +
				     "dashboardManager.resizeGrid();";
				 document.body.parentElement.insertBefore(inj, document.body);
			     });

