  
export default function Footer(props) {
    const myStyle = { 
      color: `${props.mode === "light" ? "black" : "white"}`,
      backgroundColor: `${props.mode === "light" ? "white" : "#1e3021"}`,
      textAlign: 'center',
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%'
       
    };
    return (
      <div style={myStyle} className="mt-5 mb-2">
         <span>&copy;All rights are reserved by TextUtils.com</span> 
      </div>
    );
  }
  