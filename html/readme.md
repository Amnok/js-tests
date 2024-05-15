### window is at the root of all.

### alert( document.documentElement.parentNode ); // document , alert( document.documentElement.parentElement ); // null

### For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.

### For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.

### elem.matches()

All methods "getElementsBy\*" return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes.

div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');

<!-- offset -->

offsetWidth -> full width of element (including borders)
offsetHeight -> full height of element (including borders)

<!-- client -->

# clientTop

The width of the top border of an element in pixels.

# clientLeft

The width of the left border of an element in pixels. It includes the width of the vertical scrollbar if the text direction of the element is right-to-left and if there is an overflow causing a left vertical scrollbar to be rendered.

# clientWidth

property is zero for inline elements and elements with no CSS; otherwise, it's the inner width of an element in pixels. I includes padding but excludes borders, margins, and vertical scrollbars (if present).

# clientHeight

clientHeight can be calculated as: CSS height + CSS padding - height of horizontal scrollbar (if present)

<!-- scroll -->

# scrollWidth

a measurement of the width of an element's content, including content not visible on the screen due to overflow.

# scrollHeight

is a measurement of the height of an element's content, including content not visible on the screen due to overflow.

# scrollTop

property gets or sets the number of pixels that an element's content is scrolled vertically.
An element's scrollTop value is a measurement of the distance from the element's top to its topmost visible content.

# scrollLeft

this property gets or sets the number of pixels that an element's content is scrolled from its left edge.

If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position (at the start of the scrolled content), and then increasingly negative as you scroll towards the end of the content.

# To get window width and height, we can use the clientWidth/clientHeight of document.documentElement:

document.documentElement.ClientHeight

# scrollX

returns the number of pixels that the document is currently scrolled horizontally

# scrollY

returns the number of pixels that the document is currently scrolled vertically.

# scrollBy, scrollTo, scrollIntoView

# DOM Navigation

children – only those children that are element nodes.
firstElementChild, lastElementChild – first and last element children.
previousElementSibling, nextElementSibling – neighbor elements.
parentElement – parent element.

# abbr, quotation, superscript, subscript, pre, kbd, time
