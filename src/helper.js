export function debounce(fn, time, immediate = false) {
  let timeout;
  return function() {
    const callNow = immediate && !timeout;
    const next = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(next, time);
    if(callNow) {
      next()
    }
  }
}

export function isElementInViewport(el) {
  const scroll = window.scrollY || window.pageYOffset;
	const boundsTop = el.getBoundingClientRect().top + scroll;
	
	const viewport = {
		top: scroll,
		bottom: scroll + window.innerHeight,
	};
	
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	};
	
	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}