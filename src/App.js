import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useRef } from 'react';

function App() {
  //* Switch tabs feature
  const editorTabRef  = useRef();
	const previewTabRef = useRef();
	const lineRef       = useRef();
  const [editorOnLeft, setEditorOnLeft] = useState(true);
	const switchTabs = () => {
		if (editorOnLeft) {
			previewTabRef.current.style.order = 0;
			lineRef.current.style.order = 1;
			editorTabRef.current.style.order = 2;
		} else {
			editorTabRef.current.style.order = 0;
			lineRef.current.style.order = 1;
			previewTabRef.current.style.order = 2;
		}
		setEditorOnLeft(!editorOnLeft);
	};


  return (
    <div id="app" className="App">
      <Header onSwitchTabs={switchTabs}/>
      <Main 
        editorTabRef={editorTabRef}
        previewTabRef={previewTabRef}
        lineRef={lineRef}
      />
    </div>
  );
}

export default App;
