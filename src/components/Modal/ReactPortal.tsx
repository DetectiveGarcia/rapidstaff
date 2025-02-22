import React from 'react'
import { createPortal } from 'react-dom'
import { useState, useLayoutEffect } from 'react'

interface ReactPortalProps {
  children: React.ReactNode;
  wrapperId: string;
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
  if(!document) return null;
  
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

const ReactPortal = ({ children, wrapperId }: ReactPortalProps) => {
  
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {

    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    if(!element){
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element!);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    }


  }, [wrapperId])

  if(!wrapperElement) return null;

  return createPortal(
    children, wrapperElement
  )
}

export default ReactPortal