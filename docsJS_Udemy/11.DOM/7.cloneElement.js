// coppy cả id, attr, inline listener(onclick=Logger()),...
// nhưng ko coppy addEventListener() và node.onclick= function(){}.

const cloneH1 = h1Element.cloneNode(true); // true là clone cả những thằng con bên trong, false ngược lại
