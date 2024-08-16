import React from "react";
import Accordion from "react-bootstrap/Accordion"; 
export default function About(props) {
  const myStyle = { 
    color: `${props.mode === "light" ? "black" : "white"}`,
    backgroundColor: `${props.mode === "light" ? "white" : "#1e3021"}`,
    
  };
  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3 p-3">About Us</h2>
      <Accordion defaultActiveKey="0"  >
        <Accordion.Item eventKey="0" >
          <Accordion.Header style={myStyle}>What We Offer</Accordion.Header>
          <Accordion.Body style={myStyle}>
            <h4>Text Conversion:</h4>
            <p>
              Our tool allows you to effortlessly convert entered text to upper
              or lower case with just a click of a button. Whether you need your
              text to be in all caps or lowercase, we've got you covered.
            </p>
            <h4>Clear Text</h4>
            <p>
              Don't like the text you entered? No problem! Our tool provides a
              convenient option to clear the text field with a single click,
              allowing you to start fresh in no time.
            </p>
            <h4>Text Summary</h4>
            <p>
              Need a quick summary of your text? Our tool generates a concise
              summary, highlighting the estimated time to read
              the text, along with the word and character count.
            </p>
            <h4>Text Preview</h4>
            <p>
              Want to see how your text will look after conversion? Our tool
              offers a preview feature that allows you to visualize the changes
              before applying them. It's a great way to ensure that your text
              looks exactly the way you want it to.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={myStyle}>
          <Accordion.Header style={myStyle}>Why Choose Us</Accordion.Header>
          <Accordion.Body style={myStyle}>
            <h4> Free to Use  </h4>
            <p>
              Our tool boasts a simple and intuitive interface, making it easy
              for users of all levels to navigate and utilize its features
              effortlessly.
            </p>
            <h4>Fast and Efficient </h4>
            <p>
              With lightning-fast processing speeds, our tool delivers quick
              results, saving you valuable time and effort.
            </p>
            <h4>User-Friendly Interface  </h4>
            <p>
              Text Converter Tool is completely free to use! No subscriptions,
              no hidden fees – just a hassle-free text editing experience at
              your fingertips.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
       
    </div>
  );
}
