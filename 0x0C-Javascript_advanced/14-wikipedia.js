function createElement (data) {
  const p = document.createElement("p");
  p.textContent = data;
  document.body.appendChild(p);
}

function queryWikipedia (callback) {
  let r = new XMLHttpRequest();
  r.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
	r.onload = function () {
    if (this.status === 200) {
      const res = JSON.parse(this.responseText);
      callback(res.query.pages[21721040].extract);
    }
  };

  r.send();
}

queryWikipedia(createElement);
