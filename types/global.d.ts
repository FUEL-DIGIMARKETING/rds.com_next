declare global {
  var mongoose: {
    conn: any
    promise: any
  }
  
  interface Window {
    gsap: any
    MorphSVGPlugin: any
    Draggable: any
  }
}

export {}