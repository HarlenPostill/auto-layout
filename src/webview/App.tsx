import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './App.css';
import { useDictionary } from './hooks/useDictionary';
import Divider from './components/Atoms/Divider/Divider';


// declare const acquireVsCodeApi: () => {
//   postMessage: (message: any) => void;
// };

// const vscode = acquireVsCodeApi();

const App = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const d = useDictionary();

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const isWidthTooSmall = width < 215;

  return (
    <div ref={divRef} className="app-container">
      <div className={`app-content ${isWidthTooSmall ? 'app-content--blurred' : ''}`}>
        <Divider/>
        <div>TitleView</div>
        <Divider/>
        <div>PositionView</div>
        <Divider/>
        <div>AutoLayoutView</div>
        <Divider/>
        <div>AppearanceView</div>
        <Divider/>
        <div>FillView</div>
        <Divider/>
        <div>StrokeView</div>
        <Divider/>
        <div>EffectsView</div>
        <Divider/>
      </div>
      {isWidthTooSmall && (
        <div className="width-overlay">
          <p className="width-overlay__message">{d('ui.errors.widthSmall')}</p>
        </div>
      )}
    </div>
  );
};

export default App;
