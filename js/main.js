var shareIcon = document.getElementsByClassName('share-svg-div');
var shareIcn = document.getElementsByClassName('share-item');
var shareItems = document.getElementById('share-items-div');
var shareSvg = document.getElementsByClassName('share-svg');
var shareit = document.getElementsByClassName('share-items');
document.addEventListener('click', (evt) => {
	if (
		(evt.target == shareIcon[0] || evt.target == shareSvg[0]) &&
		window.getComputedStyle(shareit[0]).getPropertyValue('display') == 'none'
	) {
		shareIcon[0].style.backgroundColor = 'hsl(217, 19%, 35%)';
		shareit[0].style.display = 'block';
		setTimeout(() => {
			shareIcn[0].classList.remove('share-item-anime');
			shareIcn[1].classList.remove('share-item-anime');
			shareIcn[2].classList.remove('share-item-anime');
		}, 1000);
	} else {
		var result = false;
		var shareItemsChilds = shareItems.childNodes;
		for (let i = 0; i < shareItemsChilds.length; i++) {
			if (evt.target == shareItemsChilds[i]) {
				result = true;
			}
		}
		if (!result && evt.target != shareItems) {
			shareit[0].style.display = 'none';
			shareIcon[0].style.backgroundColor = 'var(--DesaturatedDarkBlue)';
			shareIcn[0].classList.add('share-item-anime');
			shareIcn[1].classList.add('share-item-anime');
			shareIcn[2].classList.add('share-item-anime');
		}
	}
});

var codedBy = 'NitheeshKumar';
var codedByElement=document.getElementById('codedBy');
var i=0
typeLetter();
function typeLetter() {
    if (i < codedBy.length) {
      codedByElement.innerHTML += codedBy.charAt(i);
      i++;
      setTimeout(typeLetter, 90);
    }
  }

