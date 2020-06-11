import React from 'react';
 
const ElementContext = React.createContext<{data: Array<object>} |null>(null);
 
export default ElementContext;